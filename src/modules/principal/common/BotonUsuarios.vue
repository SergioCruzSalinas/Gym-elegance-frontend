<template>
  <v-toolbar-items class="top-menu" > <!-- Añade aquí la clase top-menu -->
    <v-btn text>
      <RouterLink class="text-menu" :to="{ name: 'inicio'}"> Mis Actividades</RouterLink>

    </v-btn>
    <!-- Botones de perfil y cerrar sesión -->
    <v-btn text>
      <RouterLink class="text-menu" :to="{ name: 'inicio' }">Perfil</RouterLink>
    </v-btn>

    <v-btn text @click="authStore.logout()" class="text-menu">
      Cerrar sesión
    </v-btn>
  </v-toolbar-items>

</template>

<script setup>
import { useAuthStore } from '@/modules/auht/stores/auth.store';



const authStore = useAuthStore();

</script>

<style scoped>

.top-menu {
  z-index: 3;
  position: relative;
  overflow: visible; /* Permite que el contenido se desborde si es necesario */
}


.text-menu {
  color: white;
  text-decoration: none;
  font-size: 20px;
}

.text-menu.router-link-active {
  color: white;
}

.text-menu:hover {
  font-size: 25px;
}

</style>
