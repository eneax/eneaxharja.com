import React from 'react'
import Layout from '../components/layout'
import { MainTextWrapper } from '../components/global'
import { Title } from '../elements'


const NotFoundPage = () => (
	<Layout>
		<Title>NOT FOUND</Title>

		<MainTextWrapper>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		</MainTextWrapper>
	</Layout>
)

export default NotFoundPage
