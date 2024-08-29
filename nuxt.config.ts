// Todo: this is comment
import * as path from 'path';

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    "nuxt-primevue",
    '@nuxt/devtools',
    '@nuxt/image',
    'nuxt-time',
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    options: { unstyled: true },
    importPT: { from: path.resolve(__dirname, './presets/masum/') },
    components: {
      exclude: ['Editor', 'Chart']
    }
  },
  image: {
    format: ['webp'],
    domains: ['http://localhost:8080'],
  },
});