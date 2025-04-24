import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { createClient } from "@supabase/supabase-js";

import ChatDiscordIcon from "../../assets/svg/chat-discord-logo.svg";

// supabase 기본 url과 key인데 이건 제꺼로 적어놨으니 추후 코드 재사용하실 분은 supabase에서 본인끼로 교체
// Table 이름은 messages란 이름이고 안에 Columns는 id(primary key), name, message, time 총 4개의 Columns가 존재
const supabaseUrl = "https://vlowdzoigoyaudsydqam.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsb3dkem9pZ295YXVkc3lkcWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MDg3NTUsImV4cCI6MjA1ODk4NDc1NX0.7ltcwu8G4_awXU5SFkAXRGnSeThjTTqAOVUm1bjtmnU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Message() {
  const [username, setUsername] = useState("조연경");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const bottomRef = useRef(null);

  // 메시지 불러오기
  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("time", { ascending: true });

    if (error) {
      console.error("메시지 불러오기 실패:", error.message);
    } else {
      setMessages(data);
    }
  };

  // 메시지 보내기
  const sendMessage = async () => {
    if (!username || !message.trim()) return;
    const { error } = await supabase.from("messages").insert([
      {
        name: username,
        message: message,
        time: new Date().toISOString(),
      },
    ]);
    if (error) {
      console.error("메시지 전송 실패:", error.message);
    }
    setMessage("");
  };

  // 자동 스크롤
  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetchMessages();

    const subscription = supabase
      .channel("realtime-messages")
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
        },
        (payload) => {
          setMessages((prev) => [...prev, payload.new]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <Wrapper>
      <MessageHeader># 일반</MessageHeader>
      <MessageContsWrapper>
        <MessageListWrapper>
          {messages.map((msg) => (
            <MessageItem key={msg.id}>
              <MsgIcon src={ChatDiscordIcon} />
              <MsgChatWrapper>
                <MessageOption>
                  <MsgNameText>{msg.name}</MsgNameText>
                  <TimeText>
                    {msg.time
                      ? new Date(msg.time).toLocaleString()
                      : "시간 없음"}
                  </TimeText>
                </MessageOption>
                <MsgText>{msg.message}</MsgText>
              </MsgChatWrapper>
            </MessageItem>
          ))}
          <div ref={bottomRef} />
        </MessageListWrapper>
        <InputWrapper>
          <Input
            type="text"
            placeholder="# 메시지 보내기"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") sendMessage();
            }}
          />
        </InputWrapper>
      </MessageContsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background-color: #2e2e33;
  box-sizing: border-box;
`;
const MessageHeader = styled.div`
  display: flex;
  width: 100%;
  height: 5.45rem;
  padding: 1rem 1.6rem 1rem 3.6rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  border-top: 1px solid var(--primary-border-color);
  box-sizing: border-box;
`;

const MessageContsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 5.45rem);
  padding: 0 2.4rem 3.6rem 2.4rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  /* gap: 2.4rem; */
  flex-shrink: 0;
  align-self: stretch;
  border-top: 1px solid var(--primary-border-color);
  box-sizing: border-box;
`;

const MessageListWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 0 0.5rem;
  flex-direction: column;
  overflow-y: scroll;
  box-sizing: border-box;
`;

const MessageItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.2rem;
  word-break: break-word;
  padding: 1.2rem 0;
`;
const MsgIcon = styled.img`
  width: 4rem;
  height: 4rem;
  object-fit: contain;
`;
const MsgChatWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
`;
const MessageOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 0.4rem;
  align-self: stretch;
`;

const MsgNameText = styled.p`
  color: var(--default-white);
  font-family: var(--font-primary);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const TimeText = styled.p`
  color: var(--primary-txt-color);
  font-family: "gg sans Normal", "sans-serif";
  font-size: 1rem;
  font-style: normal;
  line-height: normal;
`;

const MsgText = styled.p`
  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-style: normal;
  line-height: normal;
  color: var(--primary-txt-color);
`;

const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 2rem 2.4rem;
  justify-content: left;
  align-items: center;
  gap: 1.6rem;
  align-self: stretch;
  border-radius: 8px;
  border: 1px solid var(--primary-border-color);
  background: #333338;
`;

const Input = styled.input`
  font-family: var(--font-primary);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: var(--primary-txt-color);
`;
