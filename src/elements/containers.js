import styled from 'styled-components'
import { above, avenir, darkTheme } from '../utils'
import { styledLink, customHr } from '../elements'


export const MainWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 1rem 1.3125rem;
`

export const Container = styled.div`
  background-color: ${darkTheme.body};
  color: ${darkTheme.text};
  ${avenir};
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 4rem;
  ${above.tablet`
		font-size: 1.5rem;
	`}
  
  p {
    margin-bottom: 0;
    font-weight: 400;
    line-height: 2rem;
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
    ${styledLink};
  }

  hr {
    ${customHr};
  }

  blockquote, pre {
    background-color: ${darkTheme.bodyLighter};
    border-radius: 8px;
    box-shadow: rgba(255, 255, 255, 0.16) 0px 0px 0px 1px, rgba(0, 0, 0, 0.04) 0px 1px 4px inset;
    padding: 1rem;
    margin: 2rem 0 3.5rem 0;

    p {
      padding: 1rem;
      margin-bottom: 0;
    }
  }

  .gatsby-resp-image-wrapper {
    a.gatsby-resp-image-link {
      span.gatsby-resp-image-background-image {
        display: none !important;
      }
    }
  }
`

export const ImageWrapper = styled.div`
	margin-bottom: .75rem;
	img {
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: .25rem !important;
	}
`
