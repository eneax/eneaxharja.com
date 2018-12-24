import styled from 'styled-components'

const TitleWrapper = styled.div`
  margin-bottom: 2rem;
	h1 {
		font-family: avenir,sans-serif;
	}
`

const SubTitleWrapper = styled.div`
	font-family: avenir,sans-serif;
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
		font-weight: 500;
	}
`

const MainTextWrapper = styled.div`
  margin-bottom: 4rem;
  font-size: 1.2rem;
  background-color: #fff;
  font-weight: 100;
  p {
    font-family: avenir, sans-serif;
    @media screen and (min-width: 48em) {
      font-size: 1.5rem;
    }
    line-height: 1.2;
    margin-top: 0;
    margin-bottom: ${props => props.theme.marginBottom};
    a {
      color: #000;
      text-decoration: underline;
      transition: color 0.15s ease-in;
      transition: background-color 0.15s ease-in-out;
      &:link,
      &:visited {
        transition: color 0.15s ease-in;
      }
      &:hover {
        transition: color 0.15s ease-in;
        transition: background-color 0.15s ease-in-out;
        background-color: #000000;
        color: #fff;
      }
      &:active {
        transition: color 0.15s ease-in;
      }
      &:focus {
        transition: color 0.15s ease-in;
        transition: background-color 0.15s ease-in-out;
        outline: 1px dotted #000000;
        background-color: #000000;
        color: #fff;
      }
    }
  }
  p + p {
    text-indent: 1rem;
  }
`



export {
  TitleWrapper,
  SubTitleWrapper,
  MainTextWrapper
}