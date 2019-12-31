import styled from 'styled-components'
import { above, avenir, purple } from '../utils'


export const MainWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
`

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
  h2 {
    margin-top: 2.5rem;
    margin-bottom: 1rem;
  }

  h3 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

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
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    border: 0; 
    height: 1px; 
    background-image: -webkit-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -moz-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -ms-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0);
    background-image: -o-linear-gradient(left, #f0f0f0, #8c8b8b, #f0f0f0); 
  }

  blockquote {
    margin-bottom: 3.5rem;
  }

  .gatsby-resp-image-wrapper {
    a.gatsby-resp-image-link {
      span.gatsby-resp-image-background-image {
        display: none !important;
      }
    }
  }

  /* Specific Post styles */
  .fundamentals-quote {
    margin-top: 3rem;
  }
`

export const ImageWrapper = styled.div`
	margin-bottom: .75rem;
	img {
		border: 1px solid #e7e7e7;
		border-radius: .25rem !important;
	}
`
