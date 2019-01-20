module.exports = {
  siteMetadata: {
    title: `Sacha Schmid`,
    description: `Sacha Schmid is a front-end developer from Switzerland, designing and building websites and applications.`,
		url: `https://sacha.me`
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
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
		`gatsby-plugin-sitemap`
  ]
}
