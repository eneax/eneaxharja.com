import styled from 'styled-components'
import { osloGrey } from '../utils'


export const DateTime = styled.p`
  font-size: 1rem;
  font-style: italic;
  font-weight: 600;
  margin-top: .25rem;
  color: ${osloGrey};
`

export function formatReadingTime(minutes) {
  let cups = Math.round(minutes / 5);
  return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`;
}