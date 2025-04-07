import React from 'react'
import styled from "styled-components";

const ChannelIcon = ({ src, alt = "headerIcon"}) => {
  return (
    <IconWrapper>
      <IconImage src={src} alt={alt} />
    </IconWrapper>
  )
}

export default ChannelIcon


const IconWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
