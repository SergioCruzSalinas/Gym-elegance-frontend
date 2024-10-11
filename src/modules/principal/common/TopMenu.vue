<template>
    <v-app-bar color="black" class="menu-container" app>
      <!-- Botón para abrir el menú en pantallas pequeñas -->
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-sm-none"></v-app-bar-nav-icon>

      <!-- Menú para pantallas grandes -->
      <v-toolbar-items class="d-none d-sm-flex">
        <v-btn text><RouterLink class="text-menu" :to="{ name: 'inicio' }">Inicio</RouterLink></v-btn>
        <v-btn text><RouterLink class="text-menu" :to="{ name: 'planes' }">Planes</RouterLink></v-btn>
        <v-btn text><RouterLink class="text-menu" :to="{ name: 'actividades' }">Actividades</RouterLink></v-btn>
        <v-btn text><RouterLink class="text-menu" :to="{ name: 'sucursales' }">Sucursal</RouterLink></v-btn>
        <v-spacer></v-spacer>
        <v-btn text><RouterLink class="text-menu" :to="{ name: 'register' }">Regístrate</RouterLink></v-btn>
        <v-btn text><RouterLink class="text-menu" :to="{ name: 'login' }">Iniciar sesión</RouterLink></v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <!-- Drawer para pantallas pequeñas -->
    <v-navigation-drawer v-model="drawer" temporary class="d-sm-none">
      <v-list>
        <v-list-item @click="drawer = false">
          <RouterLink class="text-menu" :to="{ name: 'inicio' }">Inicio</RouterLink>
        </v-list-item>
        <v-list-item @click="drawer = false">
          <RouterLink class="text-menu" :to="{ name: 'planes' }">Planes</RouterLink>
        </v-list-item>
        <v-list-item @click="drawer = false">
          <RouterLink class="text-menu" :to="{ name: 'actividades' }">Actividades</RouterLink>
        </v-list-item>
        <v-list-item @click="drawer = false">
          <RouterLink class="text-menu" :to="{ name: 'sucursales' }">Sucursal</RouterLink>
        </v-list-item>
        <v-list-item @click="drawer = false">
          <RouterLink class="text-menu" :to="{ name: 'register' }">Regístrate</RouterLink>
        </v-list-item>
        <v-list-item @click="drawer = false">
          <RouterLink class="text-menu" :to="{ name: 'login' }">Iniciar sesión</RouterLink>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false, // Controla la visibilidad del drawer en móviles
    };
  },
};
</script>

<style scoped>
.menu-container {
  margin-top: 25px;
}

.text-menu {
  color: white;
  text-decoration: none;
  font-size: 17px;
}

.text-menu.router-link-active {
  color: white;
}

.text-menu:hover {
  font-size: 20px;
}

.v-app-bar {
  width: 100%;
}
</style>
