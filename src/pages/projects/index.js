import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'

class Projects extends React.Component {
  state = {
    filter: ''
  }

	render() {
    const { filter } = this.state
		const projects = this.props.data.allMarkdownRemark.edges.filter(p => !filter || p.node.frontmatter.tags.indexOf(filter) !== -1)

		const platforms = [ 'Web', 'iOS' ]
		const types = [ 'App', 'Site', 'Library', 'Game' ]
  	const tools = [ 'Swift', 'Haskell', 'JavaScript', 'Node.js', 'PHP', 'HTML', 'Sass', 'React', 'Angular', 'Wordpress' ]

		return (
		  <Layout>
		    <SEO title="Projects" />
				<section className="home-section wrap">
					<button href="#" data-button="block" className="filter-toggle">
			      <span data-icon="list"></span><span className="label">Show Filters</span>
			    </button>
			    <div className={`filters ${filter ? 'is-filtered' : ''}`}>
			      <div className="filter-list-wrapper">
			        <ul className="filter-list" data-tags>
			          {platforms.map(platform => <button href="#" className={`tag filter-platform ${filter === platform ? 'is-active' : ''}`} onClick={() => this.setState({ filter: filter === platform ? '' : platform })}><span className="label">{platform}</span></button>)}
			          {types.map(type => <button href="#" className={`tag filter-type ${filter === type ? 'is-active' : ''}`} onClick={() => this.setState({ filter: filter === type ? '' : type })}><span className="label">{type}</span></button>)}
			          {tools.map(tool => <button href="#" className={`tag filter-tool ${filter === tool ? 'is-active' : ''}`} onClick={() => this.setState({ filter: filter === tool ? '' : tool })}><span className="label">{tool}</span></button>)}
			        </ul>
			      </div>
			      <button data-button="block center" class="filter-close">Close</button>
			    </div>
			    <div class="filter-shade filter-close"></div>
					{projects.map(({ node }) => {
						const start = +node.frontmatter.date.split('.').splice(-1).pop()

						return (
							<article className="post-inline project-inline">
							  <div data-grid>
							    <div data-col="M1-3">
							      <a href={node.frontmatter.path} className="project-link">
							        <div className="icon-well" data-pattern={node.frontmatter.pattern} style={{ backgroundColor: node.frontmatter.background }}><img src={node.frontmatter.icon.publicURL} alt={`${node.frontmatter.title} icon`} /></div>
							      </a>
							    </div>
							    <div data-col="M2-3">
							      <h3 className="project-title"><a href={node.frontmatter.path}>{node.frontmatter.title}</a></h3>
							      <div className="project-intro">
							        <p><span className="faded">{!node.frontmatter.end && 'since '}{start}{node.frontmatter.end && node.frontmatter.end !== start && `– ${node.frontmatter.end}`} —</span> {node.frontmatter.teaser}</p>
							      </div>
										<ul data-tags>
											{node.frontmatter.tags.map(tag => <li className="tag" onClick={() => this.setState({ filter: filter === tag ? '' : tag })}>{tag}</li>)}
										</ul>
							    </div>
							  </div>
							</article>
						)
					})}
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
			filter: { fileAbsolutePath: { regex : "\/projects/" }}
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

export default Projects
