import React from 'react'
import PropTypes from 'prop-types'
import Particles from 'react-particles-js'

import Header from './header'

import GlobalStyles from '../utils/globalStyles'
import { MainWrapper } from '../elements/containers'
import { particlesStyles, particlesConfig } from '../utils'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />

    <Particles style={particlesStyles} params={particlesConfig} />

    <Header />

    <MainWrapper>{children}</MainWrapper>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
