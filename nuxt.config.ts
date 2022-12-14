export default defineNuxtConfig({
  // @ts-ignore
  buildModules: ["@vueuse/nuxt", "@nuxtjs/strapi"],
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@pinia/nuxt",
    "nuxt-icon",
    "@nuxtjs/i18n",
    "~/modules/sitemap",
  ],
  strapi: {
    url: process.env.STRAPI_URL || "http://localhost:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
  },
  i18n: {
    locales: ["es", "en"],
    defaultLocale: "es",
    vueI18n: {
      legacy: false,
      locale: "es",
      messages: {
        es: {
          app_name: "JeBem Bienes Raices",
          app_description: "Sitio web para compra y venta de bienes raices",
          menu_home: "Inicio",
          menu_store: "Store",
          menu_blog: "Propiedades",
          menu_dashboard: "Dashboard",
          menu_swiper: "Swiper",
        },
        en: {
          app_name: "JeBem Bienes Raices",
          app_description: "Sitio web para compra y venta de bienes raices",
          menu_home: "Home",
          menu_store: "Store",
          menu_blog: "Properties",
          menu_dashboard: "Dashboard",
          menu_swiper: "Swiper",
        },
      },
    },
  },

  runtimeConfig: {
    public: {
      gaId: "",
    },
  },
  sitemap: {
    // xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    hostname: "https://jebembienesraices.com",
    // routes: ["/propiedades"],
  },
});
