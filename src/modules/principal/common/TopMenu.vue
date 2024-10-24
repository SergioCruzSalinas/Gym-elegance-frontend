<template>
  <v-app-bar color="black" app>

    <v-app-bar-nav-icon @click="toggleDrawer" class="d-sm-none"></v-app-bar-nav-icon>

    <img src="/src/assets/img/IconoWeb.png" width="95px" height="95px" alt="icono de imagen">

    <v-toolbar-items class="d-none d-sm-flex w-100 align-center">
      <v-btn text>
        <RouterLink class="text-menu" :to="{ name: 'inicio' }">Inicio</RouterLink>
      </v-btn>
      <v-btn text>
        <RouterLink class="text-menu" :to="{ name: 'planes' }">Planes</RouterLink>
      </v-btn>
      <v-btn text>
        <RouterLink class="text-menu" :to="{ name: 'actividades' }">Actividades</RouterLink>
      </v-btn>
      <v-btn text>
        <RouterLink class="text-menu" :to="{ name: 'sucursales' }">Sucursal</RouterLink>
      </v-btn>

      <div v-if="authStore.isAdmin" class="auth-btn">
        <v-btn text>
          <RouterLink class="text-menu" :to="{ name: 'admin' }">Administrador</RouterLink>
        </v-btn>
        <v-btn text>
          <RouterLink @click="authStore.logout" class="text-menu" :to="{ name: 'register' }">Cerrar sesión</RouterLink>
        </v-btn>
      </div>

      <div v-else-if="authStore.isUser" class="auth-btn">
        <BotonUsuarios></BotonUsuarios>
      </div>

      <div v-else class="auth-btn">
        <v-btn text>
          <RouterLink class="text-menu" :to="{ name: 'login' }">Iniciar sesión</RouterLink>
        </v-btn>
        <v-btn text>
          <RouterLink class="text-menu" :to="{ name: 'register' }">Regístrate</RouterLink>
        </v-btn>
      </div>
    </v-toolbar-items>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary class="d-sm-none">
    <v-list>
      <v-list-item @click="closeDrawer">
        <RouterLink class="text-menu" :to="{ name: 'inicio' }">Inicio</RouterLink>
      </v-list-item>
      <v-list-item @click="closeDrawer">
        <RouterLink class="text-menu" :to="{ name: 'planes' }">Planes</RouterLink>
      </v-list-item>
      <v-list-item @click="closeDrawer">
        <RouterLink class="text-menu" :to="{ name: 'actividades' }">Actividades</RouterLink>
      </v-list-item>
      <v-list-item @click="closeDrawer">
        <RouterLink class="text-menu" :to="{ name: 'sucursales' }">Sucursal</RouterLink>
      </v-list-item>
      <v-list-item @click="closeDrawer">
        <RouterLink class="text-menu" :to="{ name: 'login' }">Iniciar sesión</RouterLink>
      </v-list-item>
      <v-list-item @click="closeDrawer">
        <RouterLink class="text-menu" :to="{ name: 'register' }">Regístrate</RouterLink>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/modules/auht/stores/auth.store';
import BotonUsuarios from './BotonUsuarios.vue';

const authStore = useAuthStore();
const drawer = ref(false); // Estado del menú lateral

const toggleDrawer = () => {
  drawer.value = !drawer.value; // Cambia el estado del menú
};

const closeDrawer = () => {
  drawer.value = false; // Cierra el menú
};
</script>

<style scoped>
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

.v-app-bar {
  width: 100%;
}

.auth-btn {
  margin-left: auto;
}
</style>
