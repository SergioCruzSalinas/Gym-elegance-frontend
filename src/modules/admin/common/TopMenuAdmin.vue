<template>
  <v-app-bar color="black" app>
    <!-- Botón para abrir el menú en pantallas pequeñas -->
    <v-app-bar-nav-icon @click="toggleDrawer" class="d-sm-none"></v-app-bar-nav-icon>

    <!-- Menú para pantallas grandes -->
    <v-toolbar-items class="d-none d-sm-flex w-100 align-center" v-if="!isSmallScreen">
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
        <v-list v-if="openMenuIndex === index">
          <v-list-item v-for="(item, subIndex) in menu.subItems" :key="subIndex" @click="selectItem(menu, item)">
            <RouterLink class="text-menu" :to="item.link">
              <v-list-item-title>{{ item.text }}</v-list-item-title>
            </RouterLink>
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

  <v-navigation-drawer v-model="isDrawerOpen" temporary class="d-sm-none small-drawer" v-if="isSmallScreen">
    <v-list dense>
      <v-list-item>
        <v-menu 
          v-for="(menu, index) in menus" 
          :key="index" 
          :model-value="openMenuIndex === index" 
          offset-y 
          @click:outside="closeMenus">
          <template v-slot:activator="{ props }">
            <v-btn class="drawer-btn" v-bind="props" @click="toggleMenu(index)">
              {{ menu.text }} <v-icon right>mdi-menu-down</v-icon>
            </v-btn>
          </template>
          <v-list v-if="openMenuIndex === index">
            <v-list-item v-for="(item, subIndex) in menu.subItems" :key="subIndex" @click="selectItem(menu, item)">
              <RouterLink class="text-menu" :to="item.link">
                <v-list-item-title>{{ item.text }}</v-list-item-title>
              </RouterLink>
            </v-list-item>
          </v-list>   
        </v-menu>          
      </v-list-item>

      
      <v-btn class="drawer-btn" :to="{ name: 'inicio' }">
        Menú principal
      </v-btn>

       
    <v-btn text @click="authStore.logout()" class="drawer-btn">
      Cerrar sesión
    </v-btn>
    </v-list>
 
  </v-navigation-drawer>
</template>

<script setup>
import { useAuthStore } from '@/modules/auth/stores/auth.store';
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';


const isDrawerOpen = ref(false);
const openMenuIndex = ref(null);
const isSmallScreen = ref(window.innerWidth < 600);

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
]);

const toggleMenu = (index) => {
  openMenuIndex.value = openMenuIndex.value === index ? null : index;
};

const closeMenus = () => {
  openMenuIndex.value = null;
};

const selectItem = (menu, item) => {
  closeMenus();
  router.replace({ path: item.link });
};

const toggleDrawer = () => {
  isDrawerOpen.value = !isDrawerOpen.value;
};

const handleResize = () => {
  isSmallScreen.value = window.innerWidth < 600;
};

onMounted(() => {
  window.addEventListener('resize', handleResize);
});
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
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

/* Estilos para el drawer en pantallas pequeñas */
.small-drawer .drawer-btn {
  width: 100%;
  justify-content: start;
  padding: 10px 20px;
  margin-bottom: 10px;
}

.drawer-btn {
  color: white;
  font-size: 16px;
  text-transform: capitalize;
  background-color: #333;
  border-radius: 5px;
}

.drawer-btn:hover {
  background-color: #555;
}
</style>
