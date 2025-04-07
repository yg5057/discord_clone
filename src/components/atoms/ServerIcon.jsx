import React, { useState } from "react";
import styled from 'styled-components'


const ServerIcon = ({ src, alt = "serverIcon", isSelected, onClick, label }) => {
  return (
    <Wrapper onClick={onClick} $selected={isSelected}>
      {isSelected && <Selector />}
      <IconWrapper>
        <IconImage src={src} alt={alt} />
      </IconWrapper>
      <Tooltip>{label}</Tooltip>
    </Wrapper>
  );
};

export default ServerIcon


const Wrapper = styled.div`
  position: relative;
  width: 7.2rem;
  height: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 0.8rem;
  box-sizing: border-box;
  cursor: pointer;

  &:hover > div.icon-wrapper {
    background: var(--active-bg-color); 
  }
`;


const IconWrapper = styled.div.attrs(() => ({
  className: 'icon-wrapper',
}))`
  width: 4.8rem;
  height: 4.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.2rem;
  border-radius: 12px;
  background: #47474d;
  transition: background 0.2s ease;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Selector = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: .4rem;
  height: 90%;
  background-color: var(--default-white);
  border-radius: 0 4px 4px 0;
`;

const Tooltip = styled.div`
  position: absolute;
  left: 110%;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--chat-bg-color);
  color: var(--default-white);
  padding: 1.2rem 1.6rem;
  border: 1px solid #64646e;
  border-radius: 8px;
  font-family: var(--font-primary);
  font-size: 1.6rem;
  font-weight: 700;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease;
  z-index: 100;
  
  &::before {
    content: "";
    position: absolute;
    left: -1.2rem; 
    top: 50%;
    transform: translateY(-50%);
    border-width: .6rem;
    border-style: solid;
    border-color: transparent #64646e transparent transparent;
  }

  ${Wrapper}:hover & {
    opacity: 1;
  }
`;