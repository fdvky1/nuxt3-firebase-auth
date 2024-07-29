// plugins/firebase.client.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { defineNuxtPlugin } from '#app';


export default defineNuxtPlugin(nuxtApp => {
  const {public: config} = useRuntimeConfig()
  
  const firebaseConfig = {
      apiKey: config.FIREBASE_API_KEY,
      authDomain: config.FIREBASE_AUTH_DOMAIN,
      projectId: config.FIREBASE_PROJECT_ID,
      appId: config.FIREBASE_APP_ID,
      measurementId: config.FIREBASE_MEASUREMENT_ID
  };
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  //   nuxtApp.provide('auth', auth);
  return {
    provide: {
        auth
    }
  }
});
