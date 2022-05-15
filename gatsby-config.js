module.exports = {
  siteMetadata: {
    title: "Juan Moisés Torrijos",
    siteurl: "https://moitorrijos.com",
    siteUrl: "https://moitorrijos.com",
    description:
      "Sitio Web de Juan Moisés Torrijos, diseñador y desarrollador web.",
    message:
      "Hola, mi nombre es Juan Moisés Torrijos, soy diseñador y desarrollador  de sitios y aplicaciones para la web, en la Ciudad de Panamá 🇵🇦.",
  },
  plugins: ["gatsby-plugin-sass", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "UA-165424620-1"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'MoiTorrijos',
      short_name: 'Moi',
      start_url: '/',
      background_color: '#1B33B3',
      theme_color: '#D00000',
      icon: 'src/assets/icon.png',
      display: `standalone`,
    }
  }, "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }]
};