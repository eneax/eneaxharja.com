import { createGlobalStyle, keyframes } from 'styled-components';

const rainbowLoad = keyframes`
  0% {
    background-size: 650%;
  }
  40% {
    background-size: 650%;
  }
  100% {
    background-size: 100%;
  }
`;

const rainbowHover = keyframes`
  0% {
    background-size: 100%;
  }
  80% {
    background-size: 650%;
  }
  100% {
    background-size: 650%;
  }
`;

export const gradientText = `
  background-color: var(--primary);
  background: linear-gradient(45deg,var(--primary),var(--secondary));
  background-size: 100%;
  background-repeat: repeat;
  text-decoration: none;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-box-decoration-break: clone;
`;

const GlobalStyle = createGlobalStyle`
  :root {
    --body: #1c1c1c;
    --bodyLighter: rgb(25, 26, 27);
    --text: #fff;
    --textLighter: #868e96;
    --primary: #3ddc84;
    --primaryLighter: rgba(61, 220, 132, .3);
    --primaryDarker: rgba(61, 220, 132, .8);
    --primaryDarkerHover: rgba(61, 220, 132, .6);
    --secondary: #4285f4;
    --secondaryLighter: #8ab4f8;
    --maxWidth: 800px;
    --radius: 0.5rem;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  html {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    background: var(--body);
    color: var(--text);
  }

  body {
    font-size: 2rem;
    font-weight: normal;
    min-height: 100vh;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    ${gradientText};
    animation: ${rainbowLoad} 0.75s ease forwards;
    &:hover{
      animation: ${rainbowHover} 0.5s ease-in forwards;
    }
  }

  p, ul, ol {
    line-height: 1.5;
  }

  img {
    max-width: 100%;
  }

  code {
    font-size: 1.75rem;
    font-family: 'Roboto', sans-serif;
    padding: 0.35rem;
    border-radius: var(--radius);
    background-color: var(--primaryLighter);

    &:after {
      content: none !important;
    }
  }

  ::selection { 
    background: var(--primaryDarkerHover);
  }
`;

export default GlobalStyle;
