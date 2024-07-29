// server/api/verify-token.ts
import { defineEventHandler } from 'h3';
import { adminAuth } from '~/server/firebaseAdmin';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { idToken } = body;

  try {
    const decodedToken = await adminAuth.verifyIdToken(idToken);
    return { valid: true, uid: decodedToken.uid };
  } catch (error) {
    return { valid: false };
  }
});
