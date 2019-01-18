import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

class Index extends React.Component {
  render() {
    const article = this.props.data.allMarkdownRemark.edges.filter(a => !a.node.frontmatter.icon)[0].node
    const projects = this.props.data.allMarkdownRemark.edges.filter(a => !!a.node.frontmatter.icon).slice(0, 3)

    return (
      <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    		<section className="home-section wrap">
    		  <p className="site-intro hero-text">Hi there, my name is Sacha Schmid and I am a front-end developer. I design and build websites and applications using modern technologies and methodologies.</p>
    		</section>
    		<section className="home-section wrap">
    		  <h2 className="section-heading">Latest Projects</h2>
          <div className="project-overview" data-grid>
            {projects.map(({ node }) => {
  						return (
                <div data-col="M1-3">
                  <a href={node.frontmatter.path} className="project-link">
                    <div className="icon-well" data-pattern={node.frontmatter.pattern} style={{ backgroundColor: node.frontmatter.background }}><img src={node.frontmatter.icon.publicURL} alt={`${node.frontmatter.title} icon`} /></div>
                  </a>
                </div>
  						)
  					})}
          </div>
    			<Link to="/projects" data-button="center">
    				<span className="label">View all projects</span>
    			</Link>
    		</section>
    		<section className="home-section wrap">
    		  <h2 className="section-heading">Latest Article</h2>
					<article class="post-inline hentry">
			      <h3 class="post-title entry-title">
			        <Link to={article.frontmatter.path}>{article.frontmatter.title}</Link>
			      </h3>
            <p className="post-caption">{article.frontmatter.teaser}</p>
			    </article>
    			<Link to="/articles" data-button="center">
    		    <span className="label">View all articles</span>
    		  </Link>
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
		) {
      edges {
        node {
          html
          frontmatter {
            date(formatString: "DD.MM.YYYY")
            title
						end
						pattern
						background
						tags
						path
						teaser
            icon {
              publicURL
            }
          }
        }
      }
    }
  }
`

export default Index
