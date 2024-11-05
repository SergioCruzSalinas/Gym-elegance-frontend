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

    <v-spacer></v-spacer> <!-- Espaciador para mover los elementos a la izquierda -->

    <div v-if="authStore.isAdmin" class="auth-btn">
      <v-btn text>
        <RouterLink class="text-menu" :to="{ name: 'admin' }">Administrador</RouterLink>
      </v-btn>
      <v-btn text>
        <RouterLink @click="authStore.logout" class="text-menu" :to="{ name: 'register' }">Cerrar sesión</RouterLink>
      </v-btn>
    </div>

    <div v-else-if="authStore.isUser" class="auth-btn">
      <v-row no-gutters class="d-flex align-center">
        <!-- Botón de usuarios -->
        <v-col>
          <BotonUsuarios></BotonUsuarios>
        </v-col>

        <!-- Perfil -->
        <v-col>
          <v-list-item @click="closeDrawer">
            <RouterLink class="text-menu" :to="{ name: 'perfil' }">Perfil</RouterLink>
          </v-list-item>
        </v-col>

        <!-- Cerrar sesión -->
        <v-col>
          <v-btn text @click="authStore.logout()" class="text-menu">
            Cerrar sesión
          </v-btn>
        </v-col>
      </v-row>
    </div>

    <div v-else-if="authStore.isInstructor" class="auth-btn">
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


  <!-- Menú lateral para pantallas pequeñas -->
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

      <template v-if="authStore.isAdmin">
        <v-list-item @click="closeDrawer">
          <RouterLink class="text-menu" :to="{ name: 'admin' }">Administrador</RouterLink>
        </v-list-item>
        <v-list-item @click="closeDrawer">
          <RouterLink class="text-menu" @click="authStore.logout" :to="{ name: 'register' }">Cerrar sesión</RouterLink>
        </v-list-item>
      </template>

      <div v-else-if="authStore.isUser">

        <v-list-item @click="closeDrawer">
         <RouterLink class="text-menu" :to="{ name: 'perfil' }">Perfil</RouterLink>
        </v-list-item>

        <v-btn text @click="authStore.logout()" class="text-menu">
         Cerrar sesión
        </v-btn>

        <v-list-item @click="closeDrawer">
          <BotonUsuarios></BotonUsuarios>
        </v-list-item>
      </div>

      <template v-else>
        <v-list-item @click="closeDrawer">
          <RouterLink class="text-menu" :to="{ name: 'login' }">Iniciar sesión</RouterLink>
        </v-list-item>
        <v-list-item @click="closeDrawer">
          <RouterLink class="text-menu" :to="{ name: 'register' }">Regístrate</RouterLink>
        </v-list-item>
      </template>
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
  margin-right: 15px; /* Espacio entre botones */
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
