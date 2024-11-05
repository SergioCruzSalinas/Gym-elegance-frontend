<template>
  <v-app-bar color="black" app>
    <!-- Botón para abrir el menú en pantallas pequeñas -->
    <v-app-bar-nav-icon @click="toggleDrawer" class="d-sm-none"></v-app-bar-nav-icon>

    <!-- Menú para pantallas grandes -->
    <v-toolbar-items class="d-none d-sm-flex w-100 align-center">
      <v-menu 
        v-for="(menu, index) in menus" 
        :key="index" 
        :model-value="openMenuIndex === index" 
        offset-y 
        @click:outside="closeMenus">
        <template v-slot:activator="{ props }">
          <v-btn v-bind="props" @click="toggleMenu(index)">
            {{ menu.text }} <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, subIndex) in menu.subItems" :key="subIndex" @click="selectItem(menu, item)">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="auth-btn">
        <v-btn text>
          <RouterLink class="text-menu" :to="{ name: 'inicio' }">Menú principal</RouterLink>
        </v-btn>
        <v-btn text @click="authStore.logout()" class="text-menu">
          Cerrar sesión
        </v-btn>
      </div>
    </v-toolbar-items>
    
  </v-app-bar>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/modules/auht/stores/auth.store';

const isDrawerOpen = ref(false);
const openMenuIndex = ref(null); // Variable para controlar el índice del menú abierto

const authStore = useAuthStore();
const router = useRouter();

const menus = ref([
  {
    text: 'Inscripciones',
    subItems: [
      { text: 'Inscripciones', link: '/admin/inscripciones' },
      { text: 'Agregar inscripción', link: '/admin/inscripciones/registrar' },
    ]
  },
  {
    text: 'Actividades',
    subItems: [
      { text: 'Actividades', link: '/admin/administrarActividades' },
      { text: 'Agregar actividad', link: '/admin/administrarActividades/agregar' },
    ]
  },
  {
    text: 'Instructores',
    subItems: [
      { text: 'Instructores', link: '/admin/instructores' },
      { text: 'Agregar instructor', link: '/admin/instructores/agregar' },
    ]
  },
  {
    text: 'Membresías',
    subItems: [
      { text: 'Membresías', link: '/admin/membresias' },
      { text: 'Agregar membresía', link: '/admin/membresias/agregar' },
    ]
  },
  {
    text: 'Admins',
    subItems: [
      { text: 'Administradores', link: '/admin/administradores' },
      { text: 'Agregar administrador', link: '/admin/agregar' },
    ]
  }
]);

const toggleMenu = (index) => {
  // Si el índice del menú abierto es el mismo, cerramos el menú
  openMenuIndex.value = openMenuIndex.value === index ? null : index;
};

const closeMenus = () => {
  openMenuIndex.value = null;
};

const selectItem = (menu, item) => {
  closeMenus();
  router.replace({ path: item.link });
};

// Método para alternar el estado del drawer
const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};


</script>

<style scoped>
.text-menu {
  color: white;
  text-decoration: none;
  font-size: 17px;
}

.text-menu.router-link-active {
  color: white;
}

.text-menu:hover {
  font-size: 25px;
}

.auth-btn {
  margin-left: auto;
}
</style>
