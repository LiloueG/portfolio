import { apiEndpoint, repositoryName } from "./slicemachine.config.json";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/prismic"],

  css: ["/public/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  prismic: {
    endpoint: apiEndpoint || repositoryName,
  },

  app: {
    head: {
      title: "Portfolio de Liloue Guyot - Webdesign et Création Numérique",
      meta: [
        {
          name: "description",
          content:
            "Bienvenue sur mon portfolio ! Je suis Liloue Guyot, designer graphique spécialisée en webdesign et création numérique. Découvrez mes projets, ma passion pour l'illustration et mes compétences en design interactif.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ]
    },
  },
});
