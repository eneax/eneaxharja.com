import styled from 'styled-components'
import { Link } from 'gatsby'
import { purple, mineShaft } from '../utils'

export const ExternalLink = styled.a.attrs({
  target: '_blank',
  rel: 'nofollow'
})`
  text-decoration: underline;
  color: #000;
  &:hover {
    text-decoration: none;
    transition: color .05s ease-in;
  }
  &:hover,
  &:focus {
    color: ${purple};
  }
`

export const InternalLink = styled(Link)`
  text-decoration: underline;
  color: #000;
  &:hover {
    text-decoration: none;
    transition: color .05s ease-in;
  }
  &:hover,
  &:focus {
    color: ${purple};
  }
`

export const SocialLink = styled.a.attrs({
  target: '_blank',
  rel: 'nofollow'
})`
	font-size: .875rem;
	-moz-osx-font-smoothing: grayscale;
	backface-visibility: hidden;
	transform: translateZ(0);
	transition: transform .25s ease-out;
	&:hover,
	&:focus {
		transform: scale(1.05);
	}
	&:active {
		transform: scale(.9);
	}
	display: inline-block;
  vertical-align: middle;
  padding: .5rem .5rem;
	margin-bottom: 1rem;
  color: ${mineShaft};
	svg {
		font-size: 2em;
	}
`