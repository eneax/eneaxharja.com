import styled from 'styled-components'
import { Link } from 'gatsby'
import { darkTheme } from '../utils'

export const styledLink = `
  text-decoration: underline;
  text-decoration-color: ${darkTheme.primary};
  color: ${darkTheme.text};
  &:hover {
    transition: color .05s easeIn;
  }
  &:hover,
  &:focus {
    color: ${darkTheme.primary};
  }
`

export const ExternalLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener'
})`
  ${styledLink}
`

export const InternalLink = styled(Link)`
  ${styledLink}
`

export const TagsLink = styled(Link)`
  background-color: ${darkTheme.primaryDarker};
  color: ${darkTheme.text};
  text-decoration: none;
  border-radius: 5px;
  padding: .2rem .5rem;
  font-size: 1rem;
  transition: background-color .3s;
  &:nth-child(odd) {
    margin-left: .5rem;
  }
  &:hover,
  &:focus {
    color: ${darkTheme.text};
    background-color: ${darkTheme.primaryDarkerHover};
  }
`

export const SocialLink = styled.a.attrs({
  target: '_blank',
  rel: 'noopener'
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
  border-color: ${darkTheme.primary};
	svg {
		font-size: 2em;
    color: ${darkTheme.text};
	}
`

export const HoverUnderlineLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  position: relative;
  color: ${darkTheme.primary};
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(1);
    height: 2px;
    bottom: 2px;
    left: 0;
    background-color: ${darkTheme.primary};
    transform-origin: bottom left;
    transition: transform 0.25s ease-out;
  }
  &:hover {
    cursor: pointer;

    &::after {
      transform: scaleX(0);
      transform-origin: bottom right;
    }
  }
`
