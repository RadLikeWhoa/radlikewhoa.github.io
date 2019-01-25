import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="wrap">
      <h1>Page not found</h1>
      <p>The page you were looking for does not exist. <Link to="/">Head back</Link> to the home page to start looking for the right page.</p>
    </div>
  </Layout>
)

export default NotFoundPage
