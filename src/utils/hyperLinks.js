import styled from 'styled-components';
import { darkTheme } from './colors';

export const ExternalLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener',
})``;

export const SocialIconLink = styled(ExternalLink)`
  padding: 1rem 0.5rem;
  background-image: none;

  svg {
    fill: ${darkTheme.textLighter};
    transition: all 0.2s ease-in-out;
    &:hover {
      fill: ${darkTheme.primary};
      transform: scale(1.1);
    }
  }
`;
