import React, { useState } from "react";
import ResetStyle from './styles/ResetStyle';
import GlobalStyle from "./styles/GlobalStyles";
import styled from "styled-components";

import Header from "./components/molecules/Header";
import SideServerList from "./components/templates/SideServerList";
import SideChannelList from "./components/templates/SideChannelList";
import Message from "./components/templates/Message";
import SideMemberList from "./components/templates/SideMemberList";
import ProfileBar from "./components/templates/ProfileBar";


function App() {
  const [selectedLabel, setSelectedLabel] = useState("");

  return (
    <>
      <ResetStyle />
      <GlobalStyle />
      <MainWrapper>
        <Header label={selectedLabel} />
        <ContsWrapper>
          <SideServerList onSelectLabel={setSelectedLabel} />
          <SideChannelList label={selectedLabel} />
            <Message />
            {/* <SideMemberList />
            <ProfileBar /> */}
        </ContsWrapper>
      </MainWrapper>
    </>
  );
}

export default App;


const MainWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  background-color: var(--main-bg-color);
`;

const ContsWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 4rem);
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  overflow-y: scroll;
`;