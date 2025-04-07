import React from 'react'
import styled from "styled-components";


const ServerIconText = ({ label, isSelected, onClick }) => {
  return (
    <Wrapper onClick={onClick} $selected={isSelected}>
      {isSelected && <Selector />}
      <IconWrapper className="icon-wrapper">
        <Label>{label}</Label>
      </IconWrapper>
      <Tooltip>{label}</Tooltip>
    </Wrapper>
  );
};

export default ServerIconText


const Wrapper = styled.div`
  position: relative;
  width: 7.2rem;
  min-width: 100%;
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
  border-radius: 12px;
  background: #47474d;
  color: var(--default-white);
  font-family: var( --font-primary );
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  text-align: center;
  overflow: hidden;
  transition: background 0.2s ease;
  box-sizing: border-box;
`;

const Label = styled.span`
  display: block;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, white 20%, white 80%, transparent);
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