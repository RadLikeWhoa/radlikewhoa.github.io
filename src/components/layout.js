import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'

import Header from './header'
import Footer from './footer'

import favicon from '../../static/favicon.png'

const Layout = ({ children, alternate, highlightColor }) => (
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
          link={[
            { rel: 'shortcut icon', type: 'image/png', href: favicon }
          ]} />
        <Header
          siteTitle={data.site.siteMetadata.title}
          alternate={alternate}
          highlightColor={highlightColor} />
        <main className="site-main">
          {children}
        </main>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  alternate: PropTypes.bool,
  highlightColor: PropTypes.string
}

Layout.defaultProps = {
  alternate: false,
  highlightColor: '#fff'
}

export default Layout
