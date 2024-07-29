<!-- pages/signup.vue -->
<template>
    <div>
      <h1>Sign Up</h1>
      <form @submit.prevent="signup">
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
</template>
  
<script setup lang="ts">
import { ref } from 'vue';
import { useNuxtApp } from '#app';
import { createUserWithEmailAndPassword, getIdToken } from 'firebase/auth';

const email = ref('');
const password = ref('');

const { $auth } = useNuxtApp();

const signup = async () => {
    try {
        const userCredential = await createUserWithEmailAndPassword($auth, email.value, password.value);
        const idToken = await getIdToken(userCredential.user);

        // Simpan token ke cookie
        document.cookie = `token=${idToken}; path=/;`;

        // Arahkan ke halaman utama setelah berhasil signup
        navigateTo('/');
    } catch (error) {
        console.error('Signup failed:', error);
    }
};
</script>
  