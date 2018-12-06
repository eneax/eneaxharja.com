import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
	@media (min-width: 576px) {
    max-width: 540px;
	}
	@media (min-width: 768px) {
    max-width: 720px;
	}
	@media (min-width: 992px) {
    max-width: 960px;
	}
	@media (min-width: 1200px) {
    max-width: 1140px;
	}
`

const TitleWrapper = styled.div`
  padding: 1rem 1rem;
  margin-bottom: 2rem;
	border-radius: 0.3rem;
	h1 {
		font-family: avenir,sans-serif;
		text-align: center;
		margin-bottom: 0;
	}
`

const MainTextWrapper = styled.div`
	max-width: 30em;
	margin-right: auto;
	margin-left: auto;
	margin-bottom: 4rem;
	margin-top: 0;
	font-size: 1.2rem;
	text-align: justify;
	background-color: #fff;
	font-weight: 100;
	> p {
		font-family: avenir,sans-serif;
		@media screen and (min-width: 48em) {
			font-size: 1.5rem;
		}
		line-height: 1.2;
  	margin-top: 0;
		margin-bottom: 0;
		a {
			color: #000;
			text-decoration: underline;
			transition: color .15s ease-in;
			transition: background-color .15s ease-in-out;
			&:link,
			&:visited {
				transition: color .15s ease-in;
			}
			&:hover {
				transition: color .15s ease-in;
				transition: background-color .15s ease-in-out;
				background-color: #000000;
				color: #fff;
			}
			&:active {
				transition: color .15s ease-in;
			}
			&:focus {
				transition: color .15s ease-in;
				transition: background-color .15s ease-in-out;
				outline: 1px dotted #000000;
				background-color: #000000;
				color: #fff;
			}
		}
	}
`

const NotFoundPage = () => (
  <div>
    <Container>
      <TitleWrapper>
        <h1>NOT FOUND</h1>
      </TitleWrapper>

      <MainTextWrapper>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </MainTextWrapper>
    </Container>
  </div>
)

export default NotFoundPage
