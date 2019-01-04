import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

import Particles from 'react-particles-js';
import { particlesConfig } from '../utils';
import favicon from '../images/favicon.ico'
import { library } from '@fortawesome/fontawesome-svg-core'
// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCodeBranch, faCloudDownloadAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faEnvelope, faCodeBranch, faCloudDownloadAlt)


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Self-taught web developer with proven ability to build for the modern web while using cutting-edge technologies' },
            { name: 'keywords', content: 'web developer, webdev, gatsbyjs, reactjs, frontend, library, books' },
          ]}
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Particles
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1
          }}
          params={particlesConfig}
        />

        <Header />
        
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '42rem',
            padding: '2.625rem 1.3125rem'
          }}
        >
          {children}
        </div>

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
