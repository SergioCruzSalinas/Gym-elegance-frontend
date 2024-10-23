// stores/userStore.js
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  // Estado
  const userRole = ref(localStorage.getItem('tipoDeRol'));

  // Acción de login
  const login = (email:string , password:string) => {
    // Asigna el rol en localStorage
    localStorage.setItem('tipoDeRol', 'admin');
    // Sincroniza el estado del store
    userRole.value = 'admin';
    return true;
  };

  // Acción de logout
  const logout = () => {
    localStorage.removeItem('tipoDeRol');
    userRole.value = null; // Actualiza el estado del store a null
  };

  // Getters
  const isAdmin = computed(() => userRole.value === 'admin');
  const isUser = computed(() => userRole.value === 'user');

  // Retorno del store
  return {
    userRole,
    isAdmin,
    isUser,
    login,
    logout,
  };
});
