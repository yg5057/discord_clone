import React, { useState } from "react";
import styled from "styled-components";
import ChannelIcon from "../atoms/icons/ChannelIcon";

import CalendarIcon from "../../assets/svg/channelEvent.svg";
import DropDowIcon from "../../assets/svg/dropdown.svg";
import ChannelTextIcon from "../../assets/svg/channelText.svg";

const SideChannelList = ({ label, onSelectChannel }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedChannel, setSelectedChannel] = useState(null);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectChannel = (channel) => {
    setSelectedChannel(channel);
    onSelectChannel(channel);
  };

  return (
    <MainWrapper>
      <TitleWrapper>{label || "4월 팀스터디"}</TitleWrapper>
      <ListWrapper>
        <ListTitleWrapper>
          <ChannelIcon src={CalendarIcon} />
          이벤트
        </ListTitleWrapper>
        <ChatListWrapper>
          <ChatTitleWrapper onClick={handleToggle}>
            채팅 채널
            <ChannelIcon src={DropDowIcon} />
          </ChatTitleWrapper>
          {isOpen && (
            <ChannelList>
              <ChannelItem
                isActive={selectedChannel === "클론코딩"}
                onClick={() => handleSelectChannel("클론코딩")}
              >
                <ChannelIcon src={ChannelTextIcon} />
                클론코딩
              </ChannelItem>
              <ChannelItem
                isActive={selectedChannel === "일반"}
                onClick={() => handleSelectChannel("일반")}
              >
                <ChannelIcon src={ChannelTextIcon} />
                일반
              </ChannelItem>
              <ChannelItem
                isActive={selectedChannel === "exp미션"}
                onClick={() => handleSelectChannel("exp미션")}
              >
                <ChannelIcon src={ChannelTextIcon} />
                exp미션
              </ChannelItem>
              <ChannelItem
                isActive={selectedChannel === "nextjs"}
                onClick={() => handleSelectChannel("nextjs")}
              >
                <ChannelIcon src={ChannelTextIcon} />
                nextjs
              </ChannelItem>
            </ChannelList>
          )}
        </ChatListWrapper>
      </ListWrapper>
    </MainWrapper>
  );
};

export default SideChannelList;

const MainWrapper = styled.div`
  width: 23.2rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
  border-radius: 8px 0px 0px 0px;
  border-top: 1px solid var(--primary-border-color);
  border-left: 1px solid var(--primary-border-color);
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 5.45rem;
  padding: 1.6rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  border-bottom: 1px solid var(--primary-border-color);
  color: var(--default-white);
  font-family: var(--font-primary);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ListWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 0.8rem 1rem;
  align-items: flex-start;
  box-sizing: border-box;
`;
const ListTitleWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  padding: 0.8rem 1rem;
  padding: 0.6rem 0.8rem 1.4rem 0.8rem;
  align-items: center;
  gap: 8px;
  box-sizing: border-box;
  border-bottom: 1px solid var(--primary-border-color);
  color: var(--secondary-txt-color);
  font-family: var(--font-primary);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
const ChatListWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const ChatTitleWrapper = styled.div`
  cursor: pointer;
  display: flex;
  padding: 1.4rem 0.8rem 0.6rem 0.8rem;
  align-items: center;
  gap: 0.8rem;
  align-self: stretch;
  color: var(--secondary-txt-color);
  font-family: var(--font-primary);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  box-sizing: border-box;
  transition: color 0.2s ease;

  &:hover {
    color: var(--default-white);
  }
`;
const ChannelList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 1.6rem;
  gap: 0.4rem;
`;

const ChannelItem = styled.li`
  width: 100%;
  padding: 0.6rem 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-weight: 600;
  transition: all 0.2s ease;

  color: ${({ isActive }) =>
    isActive ? "var(--default-white)" : "var(--secondary-txt-color)"};
  background: ${({ isActive }) => (isActive ? "#47474D" : "transparent")};

  &:hover {
    background: #47474d;
    color: var(--default-white);
  }
`;
