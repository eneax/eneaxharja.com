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
`;

export default GlobalStyle;
