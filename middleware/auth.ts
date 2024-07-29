// middleware/auth.ts
import { defineNuxtRouteMiddleware, navigateTo, useRequestHeaders } from '#app';
import axios from 'axios';
import cookie from 'cookie';

export default defineNuxtRouteMiddleware(async (to, from) => {
  if (!import.meta.server) return;

  const headers = useRequestHeaders(['cookie']);
  const cookies = cookie.parse(headers.cookie || '');
  const idToken = cookies.token;

  if (!idToken) {
    return navigateTo('/login');
  }

  try {
    const response = await axios.post('http://localhost:3000/api/verify-token', { idToken });

    if (!response.data.valid) {
      throw new Error(response.data.error);
    }
  } catch (error) {
    return navigateTo('/login');
  }
});
