import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
	background: #212529;
	margin-bottom: 1.45rem;
`

const HeaderContainer = styled.div`
	margin: 0 auto;
	max-width: 960px;
	padding: 1.45rem 1.0875rem;
`

const Header = () => (
	<HeaderWrapper>
		<HeaderContainer>
			<h1 style={{ margin: 0 }}>
				<Link
					to="/"
					style={{
						color: 'white',
						textDecoration: 'none',
					}}
				>
					Home
				</Link>
			</h1>
			<nav>
				<ul>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/projects'>Projects</Link>
					</li>
				</ul>
			</nav>
		</HeaderContainer>
	</HeaderWrapper>
)

export default Header
