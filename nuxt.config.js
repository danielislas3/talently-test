export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'talently-test',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      {
        src: "https://kit.fontawesome.com/d0f3a0a8a2.js",
        async: true,
        crossorigin: "anonymous"
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      { rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@assets/css/main.css',
    '@assets/css/auth.css',
    '@assets/css/curso.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [

    // '@nuxjs/axios',
    '@nuxtjs/auth'

  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}