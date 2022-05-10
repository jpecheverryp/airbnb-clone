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
  }
}