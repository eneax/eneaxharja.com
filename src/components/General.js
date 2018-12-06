import styled from 'styled-components'




const Col6Medium4 = styled.div`
	position: relative;
	width: 100%;
	min-height: 1px;
	padding-right: 15px;
	padding-left: 15px;
	margin-top: 1rem;
	-ms-flex: 0 0 50%;
  flex: 0 0 50%;
	max-width: 50%;
	@media (min-width: 768px) {
		-ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
	}
`

const Thumbnail = styled.div`
	padding: 0.25rem;
	background-color: #fff;
	border: 1px solid #dee2e6;
	border-radius: 0.25rem;
	max-width: 100%;
	height: auto;
	text-align: center;
	a {
		color: #000;
		text-decoration: none;
		&:hover,
		&:focus {
			h6 {
				transition: color .15s ease-in;
				color: #663399;
			}
		}
	}
	img {
		width: 100%;
		height: auto;
		margin-bottom: 0;
	}
	h6 {
		margin-bottom: 0;
		span {
			font-size: .875rem;
			font-weight: 500;
			font-family: avenir,sans-serif;
		}
	}
	p {
		margin-bottom: 0;
		small {
			font-size: .875rem;
			font-weight: 100;
			font-family: avenir,sans-serif;
			font-style: italic;
		}
	}
`







export {
	Col6Medium4, 
	Thumbnail,
}
