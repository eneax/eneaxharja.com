import styled from 'styled-components';
import { darkTheme } from './colors';

export const DateTime = styled.p`
  font-size: 1rem;
  font-style: italic;
  font-weight: 500;
  margin-top: 0.25rem;
  color: ${darkTheme.textLighter};
`;

export function formatReadingTime(minutes) {
  const cups = Math.round(minutes / 5);
  return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
}
