import React, { useState } from "react";
import styled from "styled-components";
import ServerIcon from '../atoms/ServerIcon'
import ServerIconText from "../atoms/ServerIconText";

import dmIcon from "../../assets/svg/icon-dm.svg";
import serverIcon from "../../assets/svg/icon-include-server.svg";
import exploreIcon from "../../assets/svg/icon-explore.svg";

const SideServerList = ({ onSelectLabel }) => {
  const [selectedLabel, setSelectedLabel] = useState('');

  const handleSelect = (label) => {
    setSelectedLabel(label);
    onSelectLabel(label); 
  };

  return (
    <MainWrpper>
      <ListWrapper>
        <ServerIcon
          src={dmIcon}
          alt="dm 아이콘"
          label='다이렉트 메세지'
          isSelected={selectedLabel === 'DM'}
          onClick={() => handleSelect('대화 찾기 또는 시작하기')}
        />
        <ServerIconText
          label='4월 팀스터디'
          isSelected={selectedLabel === '4월 팀스터디'}
          onClick={() => handleSelect('4월 팀스터디')}
        />
        <ServerIcon
          src={serverIcon}
          alt="서버 추가 아이콘"
          label='서버 추가하기'
          // isSelected={selectedLabel === '서버 추가'}
          // onClick={() => handleSelect('서버 추가')}
        />
        <ServerIcon
          src={exploreIcon}
          alt="커뮤니티 찾기 아이콘"
          label='찾기'
          // isSelected={selectedLabel === '커뮤니티 찾기'}
          // onClick={() => handleSelect('커뮤니티 찾기')}
        />
      </ListWrapper>
    </MainWrpper>
  )
}

export default SideServerList;

const MainWrpper = styled.div`
  display: flex;
  width: 7.2rem;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  box-sizing: border-box;
`;

const ListWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  box-sizing: border-box;
`;

