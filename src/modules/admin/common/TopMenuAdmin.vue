<template>
  <v-app-bar color="black" app>
    <!-- Botón para abrir el menú en pantallas pequeñas -->
    <!-- <v-app-bar-nav-icon @click="toggleDrawer" class="d-sm-none"></v-app-bar-nav-icon> -->

    <!-- Menú para pantallas grandes -->
    <v-toolbar-items class="d-none d-sm-flex w-100 align-center">

      <!-- Primer botón con menú desplegable -->
      <v-menu v-model="isDropdownInscripciones" offset-y @click:outside="closeMenus">
        <template v-slot:activator="{ props }">
          <v-btn text v-bind="props" @click="toggleMenu('inscripciones')">
            {{ menuInscripcionesText }} <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item 
            v-for="(item, index) in subMenuInscripciones" 
            :key="index" 
            @click="selectItem1(item.text, item.link)">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Segundo botón con menú desplegable -->
      <v-menu v-model="isDropdownActividades" offset-y @click:outside="closeMenus">
        <template v-slot:activator="{ props }">
          <v-btn text v-bind="props" @click="toggleMenu('actividades')">
            {{ menuActividadesText }} <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item 
            v-for="(item, index) in subMenuActividades" 
            :key="index" 
            @click="selectItem2(item.text, item.link)">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Tercer botón con menú desplegable -->
      <v-menu v-model="isDropdownInstructores" offset-y @click:outside="closeMenus">
        <template v-slot:activator="{ props }">
          <v-btn text v-bind="props" @click="toggleMenu('instructores')">
            {{ menuInstructoresText }} <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item 
            v-for="(item, index) in subMenuInstructores" 
            :key="index" 
            @click="selectItem3(item.text, item.link)">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Cuarto botón con menú desplegable -->
      <v-menu v-model="isDropdownMembresias" offset-y @click:outside="closeMenus">
        <template v-slot:activator="{ props }">
          <v-btn text v-bind="props" @click="toggleMenu('membresias')">
            {{ menuMembresiasText }} <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item 
            v-for="(item, index) in subMenuMembresias" 
            :key="index" 
            @click="selectItem4(item.text, item.link)">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Quinto botón con menú desplegable -->
      <v-menu v-model="isDropdownAdmins" offset-y @click:outside="closeMenus">
        <template v-slot:activator="{ props }">
          <v-btn text v-bind="props" @click="toggleMenu('admins')">
            {{ menuAdminsText }} <v-icon right>mdi-menu-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item 
            v-for="(item, index) in subMenuAdmins" 
            :key="index" 
            @click="selectItem5(item.text, item.link)">
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <div class="auth-btn">
    <v-btn text>
      <RouterLink class="text-menu" to="/">Menu principal</RouterLink>
    </v-btn>

    <v-btn text>
      <RouterLink @click="authStore.logout"  class="text-menu" :to="{ name: 'register' }">Cerrar sesion</RouterLink>
    </v-btn>
  </div>

    </v-toolbar-items>
  </v-app-bar>

</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { useAuthStore } from '@/modules/auht/stores/auth.store';

const authStore= useAuthStore();

export default {
  setup() {
    const router = useRouter();
    const isDropdownInscripciones = ref(false);
    const isDropdownActividades = ref(false);
    const isDropdownInstructores = ref(false);
    const isDropdownMembresias = ref(false);
    const isDropdownAdmins = ref(false);

    const menuInscripcionesText = ref('Inscripciones');
    const menuActividadesText = ref('Actividades');
    const menuInstructoresText = ref('Instructores');
    const menuMembresiasText = ref('Membresías');
    const menuAdminsText = ref('Admins');

    const subMenuInscripciones = ref([
      { text: 'Inscripciones', link: '/admin/inscripciones' },
      { text: 'Agregar inscripción', link: '/admin/inscripciones/agregar' },
    ]);

    const subMenuActividades = ref([
      { text: 'Actividades', link: '/admin/administrarActividades' },
      { text: 'Agregar actividad', link: '/admin/administrarActividades/agregar' },
      { text: 'Agenda de actividades', link: '/admin/administrar-actividades/agenda' },
      { text: 'Agregar cita para actividad', link: '/admin/administrar-actividades/agregar-cita' },
    ]);

    const subMenuInstructores = ref([
      { text: 'Instructores', link: '/admin/instructores' },
      { text: 'Agregar instructor', link: '/admin/instructores/agregar' },
    ]);

    const subMenuMembresias = ref([
      { text: 'Membresías', link: '/admin/membresias' },
      { text: 'Agregar membresía', link: '/admin/membresias/agregar' },
    ]);

    const subMenuAdmins = ref([
      { text: 'Administradores', link: '/admin/administradores' },
      { text: 'Agregar administrador', link: '/admin/agregar' },
    ]);

    const toggleMenu = (menu) => {
      // Cierra todos los menús
      isDropdownInscripciones.value = false;
      isDropdownActividades.value = false;
      isDropdownInstructores.value = false;
      isDropdownMembresias.value = false;
      isDropdownAdmins.value = false;

      // Abre el menú seleccionado
      if (menu === 'inscripciones') {
        isDropdownInscripciones.value = !isDropdownInscripciones.value;
      } else if (menu === 'actividades') {
        isDropdownActividades.value = !isDropdownActividades.value;
      } else if (menu === 'instructores') {
        isDropdownInstructores.value = !isDropdownInstructores.value;
      } else if (menu === 'membresias') {
        isDropdownMembresias.value = !isDropdownMembresias.value;
      } else if (menu === 'admins') {
        isDropdownAdmins.value = !isDropdownAdmins.value;
      }
    };

    const closeMenus = () => {
      isDropdownInscripciones.value = false;
      isDropdownActividades.value = false;
      isDropdownInstructores.value = false;
      isDropdownMembresias.value = false;
      isDropdownAdmins.value = false;
    };

    const selectItem1 = (item, link) => {
      console.log('Seleccionando item:', item, 'en enlace:', link);
      menuInscripcionesText.value = item;
      closeMenus();
      navigateTo(link);
    };

    const selectItem2 = (item, link) => {
      menuActividadesText.value = item;
      closeMenus();
      navigateTo(link);
    };

    const selectItem3 = (item, link) => {
      menuInstructoresText.value = item;
      closeMenus();
      navigateTo(link);
    };

    const selectItem4 = (item, link) => {
      menuMembresiasText.value = item;
      closeMenus();
      navigateTo(link);
    };

    const selectItem5 = (item, link) => {
      menuAdminsText.value = item;
      closeMenus();
      navigateTo(link);
    };

    const navigateTo = (link) => {
      router.replace({ path: link });
    };

    return {
      isDropdownInscripciones,
      isDropdownActividades,
      isDropdownInstructores,
      isDropdownMembresias,
      isDropdownAdmins,
      menuInscripcionesText,
      menuActividadesText,
      menuInstructoresText,
      menuMembresiasText,
      menuAdminsText,
      subMenuInscripciones,
      subMenuActividades,
      subMenuInstructores,
      subMenuMembresias,
      subMenuAdmins,
      toggleMenu,
      closeMenus,
      selectItem1,
      selectItem2,
      selectItem3,
      selectItem4,
      selectItem5,
      authStore,
    };
  },
};
</script>

<style>
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