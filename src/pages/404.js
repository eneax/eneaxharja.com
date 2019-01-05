import React from 'react'
import Layout from '../components/Layout'
import { TitleWrapper, MainTextWrapper } from '../components/Global'


const NotFoundPage = () => (
	<Layout>
		<TitleWrapper>
			<h1>NOT FOUND</h1>
		</TitleWrapper>

		<MainTextWrapper>
			<p>You just hit a route that doesn&#39;t exist... the sadness.</p>
		</MainTextWrapper>
	</Layout>
)

export default NotFoundPage
