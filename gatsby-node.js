const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const articleTemplate = path.resolve(`src/templates/article.js`)
  const projectTemplate = path.resolve(`src/templates/project.js`)

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node }) => {
			if (/\/articles/.test(node.frontmatter.path)) {
				createPage({
					path: node.frontmatter.path,
					component: articleTemplate
				})
			} else if (/\/projects/.test(node.frontmatter.path)) {
				createPage({
					path: node.frontmatter.path,
					component: projectTemplate
				})
			}
    })
  })
}
