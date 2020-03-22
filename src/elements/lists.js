import styled from 'styled-components';
import { darkTheme } from '../utils';

export const UnOrderedList = styled.ul`
  list-style: none;
  li::before {
    content: '\\2022';
    color: ${darkTheme.primary};
    font-weight: 900;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
`;
