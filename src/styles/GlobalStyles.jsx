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
    --primary-txt-color: rgba(255, 255, 255, 0.80);
    --secondary-txt-color: rgba(255, 255, 255, 0.60);
    --primary-border-color: #3e3e46;
  }

  html, body {
    font-size: 62.5%;  /* 1rem = 10px */
    font-family: var(--font-primary);
    background-color: var(--main-bg-color);
    color: var(--primary-txt-color);
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: var(--hover-txt-color);
  }

 /* WebKit 브라우저용 스크롤 커스터마이징 (Chrome, Safari, Edge) */
  ::-webkit-scrollbar {
    width: 8px;
    height: 0px; /* 가로 스크롤 완전 제거 */
  }
  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Firefox 전용 스크롤 스타일 */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
  }
  /* iOS Safari에서 스크롤 부드럽게 */
  html {
    -webkit-overflow-scrolling: touch;
  }
`;

export default GlobalStyle;