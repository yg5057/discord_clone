import React, { useState } from 'react'
import styled from 'styled-components'


const HeaderIcon = ({ src, alt = "headerIcon", description, onClick }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <IconWrapper
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <IconImage src={src} alt={alt} />
      <Tooltip isVisible={isHovered}>{description}</Tooltip>
    </IconWrapper>
  )
}

export default HeaderIcon


const IconWrapper = styled.div`
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Tooltip = styled.div`
  position: absolute;
  top: 50%;
  right: 110%; 
  transform: translateY(-50%);
  background-color: var(--chat-bg-color);
  color: var(--default-white);
  padding: .8rem 1rem;
  border: 1px solid #64646e;
  border-radius: 8px;
  font-family: var(--font-primary);
  font-size: 1.4rem;
  font-weight: 700;
  white-space: nowrap;
  cursor: pointer;
  z-index: 9999;

  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
  transition: opacity 0.2s ease, visibility 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    border-width: 0.6rem;
    border-style: solid;
    border-color: transparent transparent transparent #64646e;
  }
`;