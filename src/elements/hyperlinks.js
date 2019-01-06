import styled from 'styled-components'
import { Link } from 'gatsby'


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
`

export const InternalLink = styled(Link)`
  text-decoration: underline;
  color: #000;
  &:hover {
    text-decoration: none; 
  }
`
