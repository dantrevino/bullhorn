import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-graphql-client', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
  'graphql-client': {
    clients: {
      default: {
        schema: './schema.graphql',
        host: 'https://usdc.api.test.deeplake.fi/graphql',
        headers: {
          'Authorization': '<foo>',
        }
      }
    }
  },  
  colorMode: {
    preference: 'light', // default theme
    dataValue: 'theme', // activate data-theme in <html> tag
    classSuffix: '',
  },  
})
