module.exports = {
  siteMetadata: {
    title: `Gatsby-Starter`,
    description: `A good description that will show up in Google Search`,
    author: `@flexdinesh`,
    fullName: `Dinesh Pandiyan`,
    twitterHandle: `https://twitter.com/flexdinesh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // markdown to pages for blog
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog/`,
      },
    },
    // loading static data through GraphQL query
    `gatsby-transformer-javascript-frontmatter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // favicon generator
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `favicon`,
        short_name: `favicon`,
        start_url: `/`,
        background_color: `#5badf0`,
        theme_color: `#5badf0`,
        display: `minimal-ui`,
        icon: `src/images/moustache.png`, // This path is relative to the root of the site.
      },
    },
    /*{
    // google-font
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Ubuntu:400,700:latin'],
        },
      },
    },
    },*/
    `gatsby-plugin-sass`,
    /*
    // google-analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'your-tracking-code',
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
      },
    },*/
  ],
}
