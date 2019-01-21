import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import ProjectTeaser from '../../components/projectTeaser'
import FilterButton from '../../components/filterButton'

class Projects extends React.Component {
  state = {
    filter: '',
    overlaid: false
  }

	render() {
    const { filter, overlaid } = this.state
		const projects = this.props.data.allMarkdownRemark.edges.filter(p => !filter || p.node.frontmatter.tags.indexOf(filter) !== -1)

    const filters = {
      platform: [ 'Web', 'iOS' ],
  		type: [ 'App', 'Site', 'Library', 'Game' ],
    	tool: [ 'Swift', 'JavaScript', 'Node.js', 'PHP', 'HTML', 'Sass', 'React', 'Angular', 'Wordpress' ]
    }

		return (
		  <Layout>
		    <SEO title="Projects" />
				<section className="content-section wrap">
					<button
            href="#"
            data-button="block"
            className="filter-toggle"
            onClick={() => this.setState({ overlaid: true })}>
			      <span data-icon="list"></span>
            <span className="label">Show Filters</span>
			    </button>
			    <div className={`filters ${filter && 'is-filtered'} ${overlaid && 'is-overlaid'}`}>
			      <div className="filter-list-wrapper">
			        <ul
                className="filter-list"
                data-tags>
                {Object.entries(filters).map(([ key, values ]) => values.map(f => (
                  <FilterButton
                    label={f}
                    key={f}
                    type={key}
                    onClickFilter={() => this.setState({ filter: filter === f ? '' : f, overlaid: false })}
                    isActive={filter === f} />
                )))}
			        </ul>
			      </div>
			      <button
              data-button="block center"
              className="filter-close"
              onClick={() => this.setState({ overlaid: false })}>
              Close
            </button>
			    </div>
			    <div className="filter-shade filter-close" onClick={() => this.setState({ overlaid: false })}></div>
					{projects.map(({ node }) => (
            <ProjectTeaser
              project={node}
              key={node.frontmatter.title}
              onClickFilter={tag => () => this.setState({ filter: filter === tag ? '' : tag })} />
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
