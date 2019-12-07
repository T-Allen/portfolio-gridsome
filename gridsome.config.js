module.exports = {
  siteName: 'Tariku Allen',
  siteDescription: 'Tariku Allen\'s portfolio.',
  icon: {
    favicon: {
      src: './src/favicon.png'
    }
  },
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        host: 'cdn.contentful.com',
        environment: 'master',
        typeName: 'Contentful',
        routes: {
          'Project': '/projects/:title'
        }
      }
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        purgeConfig: {
          whitelist: ['svg-inline--fa'],
          whitelistPatterns: [/shiki/, /fa-$/]
        },
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
      }
    }
  ],
}
