// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      FIREBASE_API_KEY: process.env.FIREBASE_API_KEY!,
      FIREBASE_AUTH_DOMAIN: process.env.FIREBASE_AUTH_DOMAIN!,
      FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID!,
      FIREBASE_APP_ID: process.env.FIREBASE_APP_ID!,
      FIREBASE_MEASUREMENT_ID: process.env.FIREBASE_MEASUREMENT_ID!
    },
    private: {
      FIREBASE_SERVICE_ACCOUNT: process.env.FIREBASE_ADMIN_SERVICE_ACCOUNT!
    }
  }
})
