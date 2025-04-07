import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "gg sans";
    src: url('/fonts/gg sans Bold') format('woff');
    src: url('/fonts/gg sans Medium') format('woff');
    src: url('/fonts/gg sans Regular') format('woff');
    src: url('/fonts/gg sans Semibold') format('woff');
    font-weight: normal;
    font-style: normal;
  }
:root {
    --font-primary: "gg sans", "Apple SD Gothic Neo", NanumBarunGothic, "맑은 고딕", "Malgun Gothic", Gulim, 굴림, Dotum, 돋움, "Noto Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
    --main-bg-color: #28282D;
    --chat-bg-color: #2E2E33;
    --default-white: #ffffff;
    --active-bg-color: #5A65EA;
    --primary-txt-color: #D9D7DB;
    --secondary-txt-color: #95929C;
    --primary-border-color: #35353B;
  }

  html {
    font-size: 62.5%;  /* 1rem = 10px */
  }

  body {
    font-size: 1.6rem;
    background-color: var(--main-bg-color);
    color: var(--primary-txt-color);
    font-size: 1.6rem;
  }

  a {
    text-decoration: none;
    color: var(--hover-txt-color);
  }
`;

export default GlobalStyle;