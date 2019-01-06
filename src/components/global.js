import styled from 'styled-components'
import { above, avenir, purple } from '../utils'


const MainTextWrapper = styled.div`
  margin-bottom: 4rem;
  font-size: 1.2rem;
  background-color: #fff;
  ${avenir};
  ${above.tablet`
		font-size: 1.5rem;
	`}
  line-height: 1.2;
  a {
    text-decoration: underline;
    color: #000;
    &:hover,
    &:focus {
      text-decoration: none;
      color: ${purple};
    }
  }
  p {
    margin-top: 0;
    margin-bottom: ${props => props.theme.marginBottom};
  }
  p + p {
    text-indent: 1rem;
  }
  ul {
    list-style: none;
    li::before {
      content: '\\2022';
      color: ${purple};
      font-weight: 900;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
  hr {
    border: 0; 
    height: 1px; 
    background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); 
  }
`

export {
  MainTextWrapper
}