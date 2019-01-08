import styled from 'styled-components'
import { above, avenir, purple } from '../utils'


export const Container = styled.div`
  background-color: #fff;
  ${avenir};
  font-size: 1.2rem;
  line-height: 1.2;
  margin-bottom: 4rem;
  ${above.tablet`
		font-size: 1.5rem;
	`}
  
  p {
    margin-bottom: 0;
  }
`

export const BlogPostContent = styled(Container)`
  p {
    margin-bottom: 1.45rem;
  }

  a {
    margin-bottom: 1.45rem;
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
  }

  hr {
    margin-top: 1.45rem;
    border: 0; 
    height: 1px; 
    background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); 
  }
`
