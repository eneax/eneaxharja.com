import { createGlobalStyle } from 'styled-components';

import { darkTheme } from './colors';

const GlobalStyle = createGlobalStyle`
  ::selection { 
    background: ${darkTheme.primaryLighter};
  }

  body {
    background: ${darkTheme.body};
  }

  code:after {
    content: none !important;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: ${darkTheme.primary} ${darkTheme.body};
  }
  body::-webkit-scrollbar-track {
    background: ${darkTheme.body};
  }
  body::-webkit-scrollbar-thumb {
    background-color: ${darkTheme.primary};
    border-radius: 6px;
    border: 3px solid ${darkTheme.body};
  }
`;

export default GlobalStyle;
