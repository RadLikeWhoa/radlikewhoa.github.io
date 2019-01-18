import React from "react"
import { Link, graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template({
  data
}) {
  const { markdownRemark, site } = data
  const { frontmatter, html } = markdownRemark
	const { url } = site.siteMetadata

  return (
		<Layout>
			<SEO />
			<article class="post-full wrap hentry">
		    {/* <a class="include" href="#author"></a> */}
		    <h2 class="h1 post-title entry-title">{frontmatter.title}</h2>
		    <div class="post-meta">
					<time>{frontmatter.date}</time>
		      {/* <time datetime="{{ page.date | date: "%Y-%m-%d %T" }}" pubdate class="updated">{{ page.date | date: "%d %B %Y" }}</time> */}
		    </div>
				<div
					className="post-body entry-content"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
		    <div class="post-links" style={{ display: 'none' }}>
		      <h3>Links in this post</h3>
		      <div id="post-links-list" data-grid></div>
		    </div>
		    <p data-block="share">
					If you enjoyed reading this article you might want to share it <a href={`https://twitter.com/intent/tweet?url=${url}${frontmatter.path}&amp;text=${frontmatter.title}`}>on Twitter</a>, <a href={`https://facebook.com/sharer.php?u=${url}${frontmatter.path}`}>on Facebook</a>, or <a href={`https://pinboard.in/add?next=same&amp;url=${url}${frontmatter.path}&amp;title=${frontmatter.title}`}>on Pinboard</a>.
					For comments and questions, <a href="mailto:hello@sacha.me">contact me through e-mail</a>.
		    </p>
				<Link to="/articles" data-button="center">
					<span class="label">View more articles</span>
		    </Link>
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
      }
    }
  }
`
