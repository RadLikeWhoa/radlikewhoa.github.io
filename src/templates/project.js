import React from "react"
import { Link, graphql } from "gatsby"
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template({
  data
}) {
  const { markdownRemark, site } = data
  const { frontmatter, html } = markdownRemark
	const { url } = site.siteMetadata

	const start = +frontmatter.date.split(' ').slice(-1).pop()

  return (
		<Layout
      alternate={true}
      highlightColor={frontmatter.background}>
			<SEO title={frontmatter.title} />
			<div
        className="project-header"
        data-pattern={frontmatter.pattern}
        style={{ backgroundColor: frontmatter.background }}>
		    <div className="wrap">
		      <h2 className="h1 post-title">{frontmatter.title}</h2>
		      <p className="hero-text">{frontmatter.teaser}</p>
		    </div>
		  </div>
			<article className="post-full wrap">
		    <div className="hero-img-wrapper">
		      <a
            href={frontmatter.link}
            target="_blank"
            rel="noopener noreferrer">
            <Img
              sizes={frontmatter.hero.childImageSharp.sizes}
              className="hero-img"
              alt={`Impression from the ${frontmatter.title} website`} />
		      </a>
		    </div>
		    <div
          className="project-meta"
          data-grid="gutterless">
		      <div
            className="project-meta-item"
            data-col="M1-2">
		        <div data-col="1-4 M1-2">
		          <div className="project-meta-label small faded">Years</div>
		        </div>
		        <div data-col="3-4 M1-2">
		          <div className="project-meta-body small">
								{!frontmatter.end && 'since'}
								<time pubdate={start}>{start}</time>
                {frontmatter.end && frontmatter.end !== start && ` – ${frontmatter.end}`}
		          </div>
		        </div>
		      </div>
		      <div
            className="project-meta-item"
            data-col="M1-2">
		        <div data-col="1-4 M1-2">
		          <div className="project-meta-label small faded">Team</div>
		        </div>
		        <div data-col="3-4 M1-2">
		          <div className="project-meta-body small">
		            {frontmatter.team === 1 ? 'Individual' : `${frontmatter.team} people`}
		          </div>
		        </div>
		      </div>
					{frontmatter.client && (
						<div
              className="project-meta-item"
              data-col>
		          <div data-col="1-4">
		            <div className="project-meta-label small faded">Client</div>
		          </div>
		          <div data-col="3-4">
		            <div className="project-meta-body small">{frontmatter.client}</div>
		          </div>
		        </div>
					)}
					{frontmatter.repo && (
						<div
              className="project-meta-item"
              data-col>
		          <div data-col="1-4">
		            <div className="project-meta-label small faded">Source</div>
		          </div>
		          <div data-col="3-4">
		            <div className="project-meta-body small">
		              <a
                    href={frontmatter.repo}
                    target="_blank"
                    rel="noopener noreferrer">
                    {frontmatter.repo}
                  </a>
		            </div>
		          </div>
		        </div>
					)}
					{frontmatter.link && (
						<div
              className="project-meta-item"
              data-col>
		          <div data-col="1-4">
		            <div className="project-meta-label small faded">URL</div>
		          </div>
		          <div data-col="3-4">
		            <div className="project-meta-body small">
									<a
                    href={frontmatter.link}
                    target="_blank"
                    rel="noopener noreferrer">
                    {frontmatter.link}
                  </a>
		            </div>
		          </div>
		        </div>
					)}
					<div
            className="project-meta-item"
            data-col>
						<div data-col="1-4">
							<div className="project-meta-label small faded">Tags</div>
						</div>
						<div data-col="3-4">
							<div className="project-meta-body small">
								{frontmatter.tags.join(', ')}
							</div>
						</div>
					</div>
		    </div>
				<div
					className="post-body"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
				<div
          className="project-meta"
          data-grid="gutterless">
					<div
            className="project-meta-item"
            data-col>
						<div data-col="1-4">
							<div className="project-meta-label small faded">Learnings</div>
						</div>
						<div data-col="3-4">
							<div className="project-meta-body small">{frontmatter.learned.join(', ')}</div>
						</div>
					</div>
					<div className="project-meta-item" data-col>
						<div data-col="1-4">
							<div className="project-meta-label small faded">Technologies</div>
						</div>
						<div data-col="3-4">
							<div className="project-meta-body small">{frontmatter.technologies.join(', ')}</div>
						</div>
					</div>
				</div>
		    <p data-block="share">
		      If you enjoyed reading this case study you might want to share it <a href={`https://twitter.com/intent/tweet?url=${url}${frontmatter.path}&amp;text=${frontmatter.title}`}>on Twitter</a>, <a href={`https://facebook.com/sharer.php?u=${url}${frontmatter.path}`}>on Facebook</a>, or <a href={`https://pinboard.in/add?next=same&amp;url=${url}${frontmatter.path}&amp;title=${frontmatter.title}`}>on Pinboard</a>.
					{frontmatter.link && (<>You should also take a look at the project's <a href={frontmatter.link}>website</a>, if you haven't already.</>)}
					For comments and questions, <a href="mailto:hello@sacha.me">contact me through e-mail</a>.
		    </p>
        <div className="text-center">
  		    <Link
            to="/projects"
            data-button="dark">
  		      <span className="label">View more projects</span>
  		    </Link>
        </div>
		  </article>
		</Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
		site {
			siteMetadata {
				url
			}
		}
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD MMMM YYYY")
        path
        title
				end
				client
				link
				repo
				team
				pattern
				background
				teaser
				tags
				technologies
				learned
        hero {
          childImageSharp {
            sizes(maxWidth: 1100) {
              ...GatsbyImageSharpSizes_noBase64
            }
          }
        }
      }
    }
  }
`
