<template>
  <div>
    <v-toolbar-items > <!-- Añade aquí la clase top-menu -->
    <v-menu v-model="isDropdownAgendaActividades" offset-y @click:outside="closeMenu">
      <template class="text-menu" v-slot:activator="{props}">
        <v-btn class="text-menu"  text v-bind="props" @click="toggleMenu('Mis Actividades')">
          {{ menuAgendaActividadesText }}<v-icon right>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
        class="text-menu"
        v-for="(item, index) in subMenuAgendaActividades"
        :key="index"
        @click="selectItem(item.text, item.link)"
        >
        <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>

    </v-menu>
    <!-- Botones de perfil y cerrar sesión -->
    <v-btn text>
      <RouterLink class="text-menu" :to="{ name: 'inicio' }">Perfil</RouterLink>
    </v-btn>

    <v-btn text @click="authStore.logout()" class="text-menu">
      Cerrar sesión
    </v-btn>
  </v-toolbar-items>
  </div>

</template>

<script setup>
import { useAuthStore } from '@/modules/auht/stores/auth.store';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter()

const isDropdownAgendaActividades = ref(false);
const menuAgendaActividadesText = ref('Mis Actividades');
const subMenuAgendaActividades = ref([
  {text:'Actividades', link:'/agenda-actividades/mis-actividades' },
  {text:'Crear cita', link:'/agenda-actividades/crear-cita' },
])

const toggleMenu = (menu)=>{
  isDropdownAgendaActividades.value = false;

  if(menu == 'Mis Actividades'){
   isDropdownAgendaActividades.value = !isDropdownAgendaActividades.value
  }
}

const closeMenu = () => {
  isDropdownAgendaActividades.value = false; 

}

const navigateTo = (link) => {
      router.replace({ path: link });
    };


const selectItem = (item, link) => {
  menuAgendaActividadesText.value = item;
  closeMenu();
  navigateTo(link);
}



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

</style>
