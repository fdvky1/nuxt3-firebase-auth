<!-- layouts/default.vue -->
<template>
    <div>
        <header>
            <nav v-if="user">
                <span>{{ user.email }}</span>
                <button @click="logout">Logout</button>
            </nav>
        </header>
        <slot />
    </div>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/useAuth';
import { useNuxtApp } from '#app';
import { signOut } from 'firebase/auth';

const { user } = useAuth();

const { $auth } = useNuxtApp();

const logout = async () => {
    try {
        await signOut($auth);
        document.cookie = 'token=; Max-Age=0; path=/;';
        navigateTo('/login');
    } catch (error) {
        console.error('Logout failed:', error);
    }
};
</script>
  