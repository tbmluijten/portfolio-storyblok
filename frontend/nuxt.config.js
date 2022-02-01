const axios = require('axios')
export default {
  // Target: https://go.nuxtjs.dev/config-target
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "livewall-nuxt-boilerplate",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/normalize.css", "@/assets/scss/_defaults.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/vue-composition.js", mode: "all" },
    { src: "~/plugins/vue-richtext.js", mode: "all" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/dotenv" // https://github.com/nuxt-community/dotenv-module#readme
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    "@nuxtjs/style-resources",
    // https://www.storyblok.com/tp/nuxt-js-multilanguage-website-tutorial
    [
      "storyblok-nuxt",
      {
        accessToken: process.env.STORYBLOK_TOKEN,
        cacheProvider: "memory"
      }
    ]
  ],

  styleResources: {
    scss: [
      "@/assets/scss/_fonts.scss",
      "@/assets/scss/_variables.scss",
      "@/assets/scss/_mixins.scss"
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {

    routes: function(callback) {
      const token = `QlTNClnPm8udHodWOpWDvwtt`;
      const version = "draft";
      let cache_version = 0;

      let toIgnore = ["home"];

      // other routes that are not in Storyblok with their slug.
      let routes = ["/"]; // adds / directly

      // Load space and receive latest cache version key to improve performance
      axios
        .get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`)
        .then(space_res => {
          // timestamp of latest publish
          cache_version = space_res.data.space.version;

          // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
          axios
            .get(
              `https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`
            )
            .then(res => {
              Object.keys(res.data.links).forEach(key => {
                if (!toIgnore.includes(res.data.links[key].slug)) {
                  routes.push("/" + res.data.links[key].slug);
                }
              });

              callback(null, routes);
            });
        });
    }
  }

  // https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-servermiddleware
  // serverMiddleware: [
  //   // Server-side security headers
  //   "~/middleware/security-headers.js",
  // ],
};
