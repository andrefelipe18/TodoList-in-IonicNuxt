// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/ionic", "@pinia/nuxt"],

  tailwindcss: {
    config: {
      plugins: [require("daisyui")],

      daisyui: {
        themes: ["cyberpunk"],
      },
    },
  },

  pinia: {
    storesDirs: ["./store/**"],
  },
});

