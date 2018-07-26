import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
	<div
		style={{
			background: 'rebeccapurple',
			marginBottom: '1.45rem',
		}}
	>
		<div
			style={{
				margin: '0 auto',
				maxWidth: 960,
				padding: '1.45rem 1.0875rem',
			}}
		>
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
		</div>
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
	</div>
)

export default Header
