import React, { useState } from "react";
import styled from "styled-components";
import ChannelIcon from "../atoms/icons/ChannelIcon";

import CalendarIcon from '../../assets/svg/channelEvent.svg';
import DropDowIcon from '../../assets/svg/dropdown.svg';

const SideChannelList = ({ label }) => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggle = () => { setIsOpen((prev) => !prev); }

  return (
    <MainWrapper>
      <TitleWrapper>
        {label || '4월 팀스터디'}
      </TitleWrapper>
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
              <ChannelItem># 일반</ChannelItem>
              <ChannelItem># 질문</ChannelItem>
              <ChannelItem># 자료공유</ChannelItem>
            </ChannelList>
          )}
        </ChatListWrapper>
      </ListWrapper>
    </MainWrapper>
  )
}

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
  border-top: 1px solid var( --primary-border-color );
  border-left: 1px solid var( --primary-border-color );
  `;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: fit-content;
  padding: 1.6rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  border-bottom: 1px solid var( --primary-border-color );
  color: var( --default-white );
  font-family: var( --font-primary );
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
  padding: .8rem 1rem;
  align-items: flex-start;
  box-sizing: border-box;
`;
const ListTitleWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  padding: .8rem 1rem;
  padding: .6rem .8rem 1.4rem .8rem;
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
  padding: 1.4rem .8rem .6rem .8rem;
  align-items: center;
  gap: .8rem;
  align-self: stretch;
  color: var(--secondary-txt-color);
  font-family: var(--font-primary);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  box-sizing: border-box;
`;


const ChannelList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 1.6rem;
  gap: .8rem;
  margin-top: .8rem;
`;

const ChannelItem = styled.li`
  color: var(--default-white);
  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;