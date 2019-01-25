module.exports = {
  siteMetadata: {
    title: `Sacha Schmid`,
    author: `Sacha Schmid`,
    description: `Sacha Schmid is a front-end developer from Switzerland, designing and building websites and applications.`,
		siteUrl: `https://sacha.me`,
    keywords: [ `Front-End`, `Developer`, `Switzerland`, `Engineer`, `Web`, `Designer`, `Developer` ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sacha Schmid`,
        short_name: `Sacha Schmid`,
        start_url: `/`,
        background_color: `#faf0e1`,
        theme_color: `#e95e7a`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`
      },
    },
    `gatsby-plugin-offline`,
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/pages/articles`
      }
    },
		{
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/pages/projects`
      }
    },
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1100,
							linkImagesToOriginal: false
						}
					},
          `gatsby-remark-autolink-headers`,
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`
				]
			}
		},
		`gatsby-plugin-sitemap`,
    `gatsby-plugin-remove-trailing-slashes`
  ]
}
