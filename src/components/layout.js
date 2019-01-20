import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import Footer from './footer'

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
        <Header siteTitle={data.site.siteMetadata.title} alternate={alternate} highlightColor={highlightColor} />
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
