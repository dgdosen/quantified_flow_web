module.exports = {
  siteMetadata: {
    title: 'Quantifed Flow',
  },
  plugins: [
    // 'gatsby-plugin-offline',
    // 'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'quantifed flow',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui'
        // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
}
