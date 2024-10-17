<template>
  <v-app-bar color="black" app>
    <!-- Botón para abrir el menú en pantallas pequeñas -->
    <v-app-bar-nav-icon @click="toggleDrawer" class="d-sm-none"></v-app-bar-nav-icon>

    <!-- Menú para pantallas grandes -->
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

      <div class="auth-btn">
      <v-btn text>
        <RouterLink class="text-menu" :to="{ name: 'login' }">Iniciar sesión</RouterLink>
      </v-btn>

      <v-btn text>
        <RouterLink class="text-menu" :to="{ name: 'register' }">Registrate</RouterLink>
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
        <RouterLink class="text-menu" :to="{ name: 'register' }">Registrate</RouterLink>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';

const drawer = ref(false);

const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

const closeDrawer = () => {
  drawer.value = false;
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
