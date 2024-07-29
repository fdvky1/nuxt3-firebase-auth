<!-- pages/login.vue -->
<template>
    <div>
      <h1>Login</h1>
      <form @submit.prevent="login">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { useNuxtApp } from '#app';
  import { signInWithEmailAndPassword, getIdToken } from 'firebase/auth';
  
  const email = ref('');
  const password = ref('');
  
  const { $auth } = useNuxtApp();
  
  const login = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword($auth, email.value, password.value);
      const idToken = await getIdToken(userCredential.user);
  
      // Simpan token ke cookie
      document.cookie = `token=${idToken}; path=/;`;
  
      // Arahkan ke halaman utama setelah berhasil login
      navigateTo('/');
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  </script>
  