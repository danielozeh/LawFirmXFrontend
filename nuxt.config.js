const env = require('dotenv').config();

const webpack = require("webpack");

module.exports = {

  env: env.parsed,

  axios: {
    baseURL: env.API_URL
  },

  head: {
    titleTemplate: '%s - LAWFIRMX',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    script: [
      {src: "/vendor/global/global.min.js", body: true, async: true },
      {src: "/vendor/bootstrap-select/dist/js/bootstrap-select.min.js", body: true, async: true, defer: true},
      {src: "js/dashboard/dashboard-1.js", body: true, async: true, defer: true},
      {src: "/js/custom.min.js", body: true, async: true, defer: true },
      {src: "/js/deznav-init.js", body: true, async: true, defer: true },

    ],

    link : [
        {rel: 'icon', type:"image/png", sizes: "16x16", href:"/images/favicon.png"},
        
        {rel: "stylesheet", href:"/vendor/bootstrap-select/dist/css/bootstrap-select.min.css"},

        {rel: "stylesheet", href:"/vendor/animate/animate.min.css"},
        {rel: "stylesheet", href:"/vendor/aos/css/aos.min.css"},
        {rel: "stylesheet", href:"/vendor/perfect-scrollbar/css/perfect-scrollbar.css"},
        {rel: "stylesheet", href:"/vendor/metismenu/css/metisMenu.min.css"},
	      {rel: "stylesheet", href:"/css/style.css"},

    ]
  },

  server: {
      port: 8080,
      host: '0.0.0.0',
  },

  modules: [
      '@nuxtjs/axios',
      'nuxt-lazy-load',
      'vue-sweetalert2/nuxt'
  ],

  // auth: {

  //   redirect: {
  //     login: '/login',
  //     logout: false,
  //     callback: false,
  //     home: false
  //   },

  //   localStorage: false,
  //   cookie: {
  //       options: {
  //           expires: 7
  //       }
  //   },

  //   strategies: {
  //       local: {
  //           endpoints: {
  //               login: { url: '/admin/access/login', method: 'post', propertyName: 'message' },
  //               logout: false,
  //               user: { url: '/admin/access/dashboard', method: 'get', propertyName: false }
  //           },
  //           tokenRequired: true,
  //           tokenType: 'Bearer',
  //           tokenName: 'Authorization',
  //       }
  //   }
  // },

  plugins: [
    {src: '~/plugins/vue-placeholders.js'},
    { src: '~/plugins/jquery.js', ssr: false },
    { src: '~/plugins/vue-tables-2.js', ssr: false },
    { src: '~/plugins/vue-notification.js', ssr: false },
    { src: '~/plugins/bootstrap.js', ssr: false },
  ],

  build: {
    /*
     ** Run ESLint on save
     */
    vendor: ["jquery", "bootstrap"],
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery"
        })
    ],
    babel:{
      plugins: [
        ["@babel/plugin-proposal-class-properties", { "loose": true }],
        ["@babel/plugin-proposal-private-methods", { "loose": true }],
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }]
      ]
    } 

  }


}



