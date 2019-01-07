import styled from 'styled-components'
import { Link } from 'gatsby'
import { purple } from '../utils'

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
