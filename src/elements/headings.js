import styled from 'styled-components'
import { avenir, darkTheme } from '../utils'

export const Title = styled.h1`
  color: ${darkTheme.text};
  ${avenir};
  font-weight: 900;
  margin-bottom: 2rem;
`

export const SubTitle = styled.h2`
  ${avenir};
  letter-spacing: -0.0625rem;
  line-height: 2rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`

export const HeadingThree = styled.h3`
  margin-top: 3rem;
  margin-bottom: 0.25rem;
  font-weight: 500;
`

export const HeadingSix = styled.h6`
  margin-top: 0.5rem;
  margin-bottom: 0;
  ${avenir};
  font-size: 0.875rem;
  font-weight: 700;
`
