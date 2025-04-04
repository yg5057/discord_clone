import React from "react";
import ResetStyle from './styles/ResetStyle';
import GlobalStyle from "./styles/GlobalStyles";
import styled from "styled-components";

import SideChannelList from "./components/templates/SideChannelList";
import Message from "./components/templates/Message";
import SideMemberList from "./components/templates/SideMemberList";
import ProfileBar from "./components/templates/ProfileBar";

// styled-components 사용법
// const 변수이름 = styled.태그종류 `안에 작성` < 백틱
const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-color: var(--main-bg-color);
`;

const MainContent = styled.div`
  display: grid;
  position: relative;
  left: 4vw;
  top: 4vh;
  width: 96vw;
  height: 96vh;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-top-left-radius: 20px;
  box-sizing: border-box;
  grid-template-columns: 1fr 3fr 1fr;
`;

function App() {
  return (
    <>
     <ResetStyle />  
     <GlobalStyle />
      <MainDiv>
        <MainContent className="MaiNContent">
          <SideChannelList />
          <Message />
          <SideMemberList />
        </MainContent>
        <ProfileBar />
      </MainDiv>
    </>
  );
}

export default App;
