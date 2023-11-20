// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      title: 'Snapmaker | The Best 3-in-1 3D Printer Manufacturer',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
      link: [
        { rel: 'stylesheet', href: '/css/bulma-font-awesome-4.2.0.min.css' },        
        { rel: "preload", as: "font", href: "https://ditfjx9w4x3vl.cloudfront.net/assets/font-family/iconfont-1.1.woff2?t=1663753830524", type: "font/woff2", crossorigin: "anonymous" },
        { rel: "preload", as: "font", href: "https://ditfjx9w4x3vl.cloudfront.net/assets/font-family/iconfont-1.1.woff?t=1663753830524", type: "font/woff", crossorigin: "anonymous" },
        { rel: "preload", as: "font", href: "https://ditfjx9w4x3vl.cloudfront.net/assets/font-family/iconfont-1.1.ttf?t=1663753830524", type: "font/ttf", crossorigin: "anonymous" },

        { rel: 'stylesheet', as: "font", href: "https://fonts.googleapis.com/css?family=Roboto"},

      ],
      script: [
        { src: 'https://consent.cookiebot.com/uc.js', 'data-cbid': "3de02247-a480-4db5-a30c-2e9fff8f30d8", "data-blockingmode":"auto", type: "text/javascript", defer: true, id: "Cookiebot"}
      ]
    }
  },
  modules: ['@nuxtjs/i18n','@pinia/nuxt', '@nuxt/image',],
  css: [
    '@/resources/scss/theme/index.scss',
    '@/resources/scss/snapmaker.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/resources/scss/variable.scss";@import "@/resources/scss/theme/variables.scss";',
        },
      },
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  // @ts-ignore
  // https://pinia.vuejs.org/ssr/nuxt.html
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  image: {

  },
  runtimeConfig: {
    window: {}
  }
})
