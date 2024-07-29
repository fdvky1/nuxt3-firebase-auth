// composables/useAuth.ts
import { ref, onMounted } from 'vue';
// import { useNuxtApp } from '#app';
import { onAuthStateChanged, type User } from 'firebase/auth';

export const useAuth = () => {
  const user = ref<User|null>(null);

  const { $auth } = useNuxtApp();

  onMounted(() => {
    onAuthStateChanged($auth, (firebaseUser) => {
      user.value = firebaseUser;
    });
  });

  return { user };
};
