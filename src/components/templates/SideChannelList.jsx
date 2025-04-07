import React from "react";
import styled from "styled-components";

const SideChannelList = ({ label }) => {
  return (
    <MainWrapper>
      <TitleWrapper>
        {label || '4월 팀스터디'}
      </TitleWrapper>
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