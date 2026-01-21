
export default defineNuxtConfig({
  app:{
    head: {
      title:"Hadrien Briand",
    htmlAttrs: {
      lang: 'fr'
    }
  }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },


  modules: [ 
    '@nuxt/a11y',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    'nuxt-viewport',
    '@nuxtjs/color-mode',
    'nuxt-echarts'
    
  ]
})