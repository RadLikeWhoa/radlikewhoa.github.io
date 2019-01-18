import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

class Articles extends React.Component {
 	render() {
		const articles = this.props.data.allMarkdownRemark.edges

		return (
			<Layout>
				<SEO title="Articles" />
				<section className="home-section wrap">
					{articles.map(({ node }) => (
						<article class="post-archive hentry">
				      <h3 class="post-title entry-title">
				        <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
				      </h3>
              <p className="post-caption">{node.frontmatter.teaser}</p>
              <a href={node.frontmatter.path}>Read more &raquo;</a>
				    </article>
					))}
				</section>
			</Layout>
		)
	}
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(
			sort: { fields: [frontmatter___date], order: DESC }
			filter: { fileAbsolutePath: { regex : "\/articles/" }}
		) {
      edges {
        node {
          html
					excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
						path
            teaser
          }
        }
      }
    }
  }
`

export default Articles
