import React from 'react'
import Layout from '../components/layout'
import { Title, Container } from '../elements'


const NotFoundPage = () => (
	<Layout>
		<Title>NOT FOUND</Title>

		<Container>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		</Container>
	</Layout>
)

export default NotFoundPage
