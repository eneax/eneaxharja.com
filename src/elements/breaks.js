import styled from 'styled-components';
import { darkTheme } from '../utils';

export const classicHr = `
  border: 0;
  height: 1px;
  background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
  background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); 
`;

export const customHr = `
  width: 30%;
  overflow: visible; /* For IE */
  padding: 0;
  border: none;
  border-top: medium double #333;
  color: #333;
  text-align: center;
  margin: 4rem auto;

  &:after {
    content: "§";
    display: inline-block;
    position: relative;
    top: -2em;
    font-size: .5em;
    padding: 0 0.25em;
    color: ${darkTheme.textLighter};
  }
`;

export const HR = styled.hr`
  ${classicHr}
`;
