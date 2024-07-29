// server/firebaseAdmin.ts
import { initializeApp, getApps, getApp, App } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import admin from "firebase-admin";
const { private: config } = useRuntimeConfig();

let app: App;
if (!getApps().length) {
  app = initializeApp({
    credential: admin.credential.cert(JSON.parse(config.FIREBASE_SERVICE_ACCOUNT!))
  });
} else {
  app = getApp();
}

export const adminAuth = getAuth(app);
