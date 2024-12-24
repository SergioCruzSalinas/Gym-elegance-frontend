<template>
  <v-app-bar color="black" app>
    <v-app-bar-nav-icon @click="toggleDrawer" class="d-sm-none"></v-app-bar-nav-icon>
    <img src="/src/assets/img/IconoWeb.png" width="95px" height="95px" alt="icono de imagen" />

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

      <v-spacer></v-spacer>

      <div v-if="authStore.isAdmin" class="auth-btn">
        <v-btn text>
          <RouterLink class="text-menu" :to="{ name: 'perfil' }">Perfil</RouterLink>
        </v-btn>
        <v-btn text>
          <RouterLink class="text-menu" :to="{ name: 'admin' }">Administrador</RouterLink>
        </v-btn>
        <v-btn text @click="authStore.logout" class="text-menu">
          Cerrar sesión
        </v-btn>
      </div>

      <div v-else-if="authStore.isUser" class="auth-btn">
        <BotonUsuarios></BotonUsuarios>
      </div>

      <div v-else-if="authStore.isInstructor" class="auth-btn">
        <BotonCoach :isDrawer="false"></BotonCoach>
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

      <div v-if="authStore.isAdmin">
        <v-list-item @click="closeDrawer">
          <RouterLink class="text-menu" :to="{ name: 'perfil' }">Perfil</RouterLink>
        </v-list-item>
        <v-list-item @click="closeDrawer">
          <RouterLink class="text-menu" :to="{ name: 'admin' }">Administrador</RouterLink>
        </v-list-item>
        <v-list-item @click="authStore.logout(); closeDrawer()">
          <span class="text-menu">Cerrar sesión</span>
        </v-list-item>
      </div>

      <div v-else-if="authStore.isUser">
        <BotonUsuarios class="text-menu"></BotonUsuarios>
      </div>

      <div v-else-if="authStore.isInstructor">
        <BotonCoach :isDrawer="true" />
      </div>

      <div v-else>
        <v-list-item @click="closeDrawer">
          <RouterLink class="text-menu" :to="{ name: 'login' }">Iniciar sesión</RouterLink>
        </v-list-item>
        <v-list-item @click="closeDrawer">
          <RouterLink class="text-menu" :to="{ name: 'register' }">Regístrate</RouterLink>
        </v-list-item>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue';
import BotonCoach from './BotonCoach.vue';
import BotonUsuarios from './BotonUsuarios.vue';
import { useAuthStore } from '@/modules/auth/stores/auth.store';

const authStore = useAuthStore();
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
  font-size: 18px;
  margin-right: 8px;
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

.auth-btn {
  margin-left: auto;
}
</style>
