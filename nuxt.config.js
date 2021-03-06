export default {
  components: true,
  head: {
    titleTemplate: "Airbnb-Clone - %s",
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      style: ['my-style']
    },
    meta: [{
      charset: 'utf8'
    }]
  },
  router: {
    prefetchLinks: false
  },
  plugins: [
    '~/plugins/maps.client',
    '~/plugins/dataApi'
  ],
  buildModules: [
    '@nuxtjs/dotenv',
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/sass/app.scss'],
  build: {
    extractCSS: true,
    loaders: {
      limit: 0,
    }
  }
}
