// import React, { useEffect, useRef, useState } from "react";
// import styled from "styled-components";
// import { createClient } from "@supabase/supabase-js";
// import { AnimatePresence, motion } from "framer-motion";

// import ChatDiscordIcon from "../../assets/svg/chat-discord-logo.svg";
// import MemberIcon from "../../assets/svg/rolePermission.svg";

// const supabaseUrl = "https://vlowdzoigoyaudsydqam.supabase.co";
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsb3dkem9pZ295YXVkc3lkcWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MDg3NTUsImV4cCI6MjA1ODk4NDc1NX0.7ltcwu8G4_awXU5SFkAXRGnSeThjTTqAOVUm1bjtmnU";
// const supabase = createClient(supabaseUrl, supabaseKey);

// export default function Message({ selectedChannel }) {
//   const [username, setUsername] = useState("조연경");
//   const [message, setMessage] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [isMemberListOpen, setIsMemberListOpen] = useState(false);

//   const bottomRef = useRef(null);

//   const toggleMemberList = () => setIsMemberListOpen((prev) => !prev);

//   const fetchMessages = async () => {
//     const { data, error } = await supabase
//       .from("messages")
//       .select("*")
//       .order("time", { ascending: true });

//     if (!error) setMessages(data);
//   };

//   const sendMessage = async () => {
//     if (!username || !message.trim()) return;
//     await supabase.from("messages").insert([
//       {
//         name: username,
//         message,
//         time: new Date().toISOString(),
//       },
//     ]);
//     setMessage("");
//   };

//   const scrollToBottom = () => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   useEffect(() => {
//     fetchMessages();
//     const subscription = supabase
//       .channel("realtime-messages")
//       .on(
//         "postgres_changes",
//         { event: "INSERT", schema: "public", table: "messages" },
//         (payload) => {
//           setMessages((prev) => [...prev, payload.new]);
//         }
//       )
//       .subscribe();
//     return () => {
//       supabase.removeChannel(subscription);
//     };
//   }, []);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   return (
//     <Wrapper>
//       <MessageHeader>
//         <span># {selectedChannel || "일반"}</span>
//         <MemberToggleIcon src={MemberIcon} onClick={toggleMemberList} />
//       </MessageHeader>

//       <MessageContsWrapper>
//         <MessageListWrapper>
//           {messages.map((msg) => (
//             <MessageItem key={msg.id}>
//               <MsgIcon src={ChatDiscordIcon} />
//               <MsgChatWrapper>
//                 <MessageOption>
//                   <MsgNameText>{msg.name}</MsgNameText>
//                   <TimeText>
//                     {msg.time
//                       ? new Date(msg.time).toLocaleString()
//                       : "시간 없음"}
//                   </TimeText>
//                 </MessageOption>
//                 <MsgText>{msg.message}</MsgText>
//               </MsgChatWrapper>
//             </MessageItem>
//           ))}
//           <div ref={bottomRef} />
//         </MessageListWrapper>
//         <InputWrapper>
//           <Input
//             type="text"
//             placeholder="# 메시지 보내기"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") sendMessage();
//             }}
//           />
//         </InputWrapper>
//       </MessageContsWrapper>

//       {/* 멤버리스트 패널 */}
//       <AnimatePresence>
//         {isMemberListOpen && (
//           <MemberPanel
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//           >
//             <MemberPanelTitle>참여 멤버</MemberPanelTitle>
//             <MemberList>
//               {["김호영", "양아름", "이예도", "조연경"].map((name, idx) => (
//                 <MemberItem key={idx}>
//                   <Avatar src={ChatDiscordIcon} />
//                   <MemberInfo>
//                     <strong>{name}</strong>
//                     <Status online={idx % 2 === 0}>
//                       ● {idx % 2 === 0 ? "온라인" : "오프라인"}
//                     </Status>
//                   </MemberInfo>
//                 </MemberItem>
//               ))}
//             </MemberList>
//           </MemberPanel>
//         )}
//       </AnimatePresence>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   width: 100%;
//   height: 100%;
//   flex-direction: column;
//   align-items: center;
//   background-color: #2e2e33;
//   box-sizing: border-box;
// `;

// const MessageHeader = styled.div`
//   display: flex;
//   width: 100%;
//   height: 5.45rem;
//   padding: 1rem 1.6rem 1rem 3.6rem;
//   justify-content: space-between;
//   align-items: center;
//   border-top: 1px solid var(--primary-border-color);
//   box-sizing: border-box;

//   color: var(--primary-txt-color);
//   font-family: var(--font-primary);
//   font-size: 1.6rem;
//   font-style: normal;
//   font-weight: 600;
//   line-height: normal;
// `;

// const MemberToggleIcon = styled.img`
//   width: 2rem;
//   height: 2rem;
//   cursor: pointer;
// `;

// const MessageContsWrapper = styled.div`
//   display: flex;
//   width: 100%;
//   height: calc(100% - 5.45rem);
//   padding: 0 2.4rem 3.6rem 2.4rem;
//   flex-direction: column;
//   justify-content: flex-end;
//   align-items: flex-start;
//   /* gap: 2.4rem; */
//   flex-shrink: 0;
//   align-self: stretch;
//   border-top: 1px solid var(--primary-border-color);
//   box-sizing: border-box;
// `;

// const MessageListWrapper = styled.div`
//   display: flex;
//   width: 100%;
//   height: 100%;
//   padding: 0 0.5rem;
//   flex-direction: column;
//   overflow-y: scroll;
//   box-sizing: border-box;
// `;

// const MessageItem = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   gap: 1.2rem;
//   word-break: break-word;
//   padding: 1.2rem 0;
// `;
// const MsgIcon = styled.img`
//   width: 4rem;
//   height: 4rem;
//   object-fit: contain;
// `;
// const MsgChatWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: flex-start;
//   gap: 2px;
// `;
// const MessageOption = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: flex-end;
//   gap: 0.4rem;
//   align-self: stretch;
// `;

// const MsgNameText = styled.p`
//   color: var(--default-white);
//   font-family: var(--font-primary);
//   font-size: 1.6rem;
//   font-style: normal;
//   font-weight: 600;
//   line-height: normal;
// `;

// const TimeText = styled.p`
//   color: var(--primary-txt-color);
//   font-family: var(--font-primary);
//   font-size: 1rem;
//   font-style: normal;
//   line-height: normal;
// `;

// const MsgText = styled.p`
//   font-family: var(--font-primary);
//   font-size: 1.4rem;
//   font-style: normal;
//   line-height: normal;
//   color: var(--primary-txt-color);
// `;

// const InputWrapper = styled.div`
//   display: flex;
//   width: 100%;
//   height: fit-content;
//   padding: 2rem 2.4rem;
//   justify-content: left;
//   align-items: center;
//   gap: 1.6rem;
//   align-self: stretch;
//   border-radius: 8px;
//   border: 1px solid var(--primary-border-color);
//   background: #333338;
// `;

// const Input = styled.input`
//   font-family: var(--font-primary);
//   font-size: 1.6rem;
//   font-style: normal;
//   font-weight: 600;
//   line-height: normal;
//   color: var(--primary-txt-color);
// `;

// // 추가된 스타일
// const MemberPanel = styled(motion.div)`
//   position: absolute;
//   top: 5.45rem;
//   right: 0;
//   width: 26.5rem;
//   height: calc(100% - 5.45rem);
//   background: #3e3e44;
//   padding: 1.6rem;
//   gap: 0.4rem;
//   border-left: 1px solid var(--primary-border-color);
//   z-index: 200;
//   box-sizing: border-box;
// `;

// const MemberPanelTitle = styled.h3`
//   color: rgba(255, 255, 255, 0.6);
//   font-family: var(--font-primary);
//   font-size: 1.4rem;
//   font-style: normal;
//   font-weight: 600;
//   line-height: normal;
// `;

// const MemberList = styled.ul`
//   margin-top: 1rem;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   color: #fff;
//   font-family: var(--font-primary);
//   font-size: 1.6rem;
//   font-style: normal;
//   line-height: normal;
// `;

// const MemberItem = styled.li`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
// `;

// const Avatar = styled.img`
//   width: 3.2rem;
//   height: 3.2rem;
//   border-radius: 50%;
// `;

// const MemberInfo = styled.div`
//   display: flex;
//   flex-direction: column;
//   color: var(--default-white);
// `;

// const Status = styled.span`
//   color: ${({ online }) => (online ? "limegreen" : "#888")};
//   font-size: 1.2rem;
// `;

import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { createClient } from "@supabase/supabase-js";
import { AnimatePresence, motion } from "framer-motion";

import ChatDiscordIcon from "../../assets/svg/chat-discord-logo.svg";
import MemberIcon from "../../assets/svg/rolePermission.svg";

const supabaseUrl = "https://vlowdzoigoyaudsydqam.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZsb3dkem9pZ295YXVkc3lkcWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM0MDg3NTUsImV4cCI6MjA1ODk4NDc1NX0.7ltcwu8G4_awXU5SFkAXRGnSeThjTTqAOVUm1bjtmnU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Message({ selectedChannel }) {
  const [username, setUsername] = useState("조연경");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [isMemberListOpen, setIsMemberListOpen] = useState(false);

  const bottomRef = useRef(null);

  const toggleMemberList = () => setIsMemberListOpen((prev) => !prev);

  const fetchMessages = async () => {
    const { data, error } = await supabase
      .from("messages")
      .select("*")
      .order("time", { ascending: true });

    if (!error) setMessages(data);
  };

  const sendMessage = async () => {
    if (!username || !message.trim()) return;
    await supabase.from("messages").insert([
      {
        name: username,
        message,
        time: new Date().toISOString(),
      },
    ]);
    setMessage("");
  };

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetchMessages();
    const subscription = supabase
      .channel("realtime-messages")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "messages" },
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
      <MessageHeader>
        <span># {selectedChannel || "일반"}</span>
        <MemberToggleIcon src={MemberIcon} onClick={toggleMemberList} />
      </MessageHeader>

      <ContentArea>
        <MessageContsWrapper isShrinked={isMemberListOpen}>
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

        <AnimatePresence>
          {isMemberListOpen && (
            <MemberPanel
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <MemberPanelTitle>참여 멤버</MemberPanelTitle>
              <MemberList>
                {["김호영", "양아름", "이예도", "조연경"].map((name, idx) => (
                  <MemberItem key={idx}>
                    <Avatar src={ChatDiscordIcon} />
                    <MemberInfo>
                      <strong>{name}</strong>
                      <Status online={idx % 2 === 0}>
                        ● {idx % 2 === 0 ? "온라인" : "오프라인"}
                      </Status>
                    </MemberInfo>
                  </MemberItem>
                ))}
              </MemberList>
            </MemberPanel>
          )}
        </AnimatePresence>
      </ContentArea>
    </Wrapper>
  );
}

// 스타일 컴포넌트
const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
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
  border-top: 1px solid var(--primary-border-color);
  box-sizing: border-box;
  color: var(--primary-txt-color);
  font-size: 1.6rem;
  font-weight: 600;
`;

const MemberToggleIcon = styled.img`
  width: 2rem;
  height: 2rem;
  cursor: pointer;
`;

const ContentArea = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 5.45rem);
  flex-direction: row;
  box-sizing: border-box;
`;

const MessageContsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  width: ${({ isShrinked }) => (isShrinked ? "calc(100% - 26.5rem)" : "100%")};
  padding: 0 2.4rem 3.6rem 2.4rem;
  border-top: 1px solid var(--primary-border-color);
  transition: width 0.3s ease;
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
  gap: 2px;
`;

const MessageOption = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 0.4rem;
`;

const MsgNameText = styled.p`
  color: var(--default-white);
  font-size: 1.6rem;
  font-weight: 600;
`;

const TimeText = styled.p`
  color: var(--primary-txt-color);
  font-size: 1rem;
`;

const MsgText = styled.p`
  font-size: 1.4rem;
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
  border-radius: 8px;
  border: 1px solid var(--primary-border-color);
  background: #333338;
`;

const Input = styled.input`
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--primary-txt-color);
  background: transparent;
  border: none;
  outline: none;
`;

const MemberPanel = styled(motion.div)`
  width: 26.5rem;
  height: 100%;
  background: #3e3e44;
  padding: 1.6rem;
  border-left: 1px solid var(--primary-border-color);
  box-sizing: border-box;
  z-index: 200;
`;

const MemberPanelTitle = styled.h3`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.4rem;
  font-weight: 600;
`;

const MemberList = styled.ul`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: #fff;
  font-size: 1.6rem;
`;

const MemberItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Avatar = styled.img`
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--default-white);
`;

const Status = styled.span`
  color: ${({ online }) => (online ? "limegreen" : "#888")};
  font-size: 1.2rem;
`;
