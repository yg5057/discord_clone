import React, { useState } from "react";
import styled from "styled-components";
import HeaderIcon from '../atoms/icons/HeaderIcon';

import boxIcon from '../../assets/svg/icon-box.svg'
import helpIcon from '../../assets/svg/icon-help.svg'

const Header = ({ label, description }) => {

  return (
    <Wrapper>
      <div />
      <Span> {label || '4월 팀스터디'} </Span>
      <HeaderIconWrapper>
        <HeaderIcon src={boxIcon} description="받은 편지함" />
        <HeaderIcon 
          src={helpIcon}
          description="도움말"
          onClick={() => window.open('https://support.discord.com/hc/ko', '_blank')}
        />
      </HeaderIconWrapper>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  padding: .8rem 1.6rem;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`;

const Span = styled.h1`
  color: var(--default-white);
  font-family: var( --font-primary );
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  line-height: normal;
`;

const HeaderIconWrapper = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    box-sizing: border-box;
`;