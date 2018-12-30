import styled from 'styled-components'

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
	h1 {
    font-weight: 900;
    font-family: 'Maven Pro', sans-serif;
	}
`

const SubTitleWrapper = styled.div`
  font-family: 'Maven Pro', sans-serif;
	margin-top: 2rem;
	a {
		text-decoration: underline;
		color: #000;
    &:hover {
      text-decoration: none; 
    }
		&:hover,
		&:focus {
			h2 {
				transition: color .05s ease-in;
				color: #663399;
			}
		}
	}
	h2 {
		margin-bottom: .5rem;
		font-weight: 400;
	}
`

const MainTextWrapper = styled.div`
  margin-bottom: 4rem;
  font-size: 1.2rem;
  background-color: #fff;
  font-family: 'Maven Pro', sans-serif;
  @media screen and (min-width: 48em) {
    font-size: 1.5rem;
  }
  line-height: 1.2;
  a {
    text-decoration: underline;
    color: #000;
    &:hover,
    &:focus {
      text-decoration: none;
      color: #663399;
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
      color: #663399;
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
  TitleWrapper,
  SubTitleWrapper,
  MainTextWrapper
}