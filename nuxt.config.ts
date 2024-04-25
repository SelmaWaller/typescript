import VitePluginSassDts from "vite-plugin-sass-dts";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    // ...
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  router: {
    options: {
      scrollBehaviorType: "smooth",
    },
  },
  app: {
    head: {
      title: "Masterclass",
      meta: [
        {
          name: "description",
          content: "TS, Nuxt 3, Pinia & Sass Masterclass",
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
    },
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
  },
  devServer: {
    port: 8080,
  },
  vite: {
    plugins: [
      VitePluginSassDts({
        /* options */
      }),
    ],
  },
  css: ["~/assets/css/main.scss"],
});
