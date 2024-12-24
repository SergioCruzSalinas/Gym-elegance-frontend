<template>

<div v-if="!subscribe">
          <h1>cargando informacion de la Inscripcion</h1>
        </div>

  <v-col v-else  cols="12" sm="6" class="d-flex justify-center">
    <v-card class="pa-4 mb-4 mr-md-10">
      <v-card-title class="d-flex align-center">
        <v-icon color="#1F3A93" class="mr-2">mdi-account-card-details</v-icon>
        <h2 class="text-h6 font-weight-bold mb-0">Mi Membresía</h2>
      </v-card-title>

      <v-divider></v-divider>

      <v-card-text>
        <v-row>
          <v-col cols="12" class="info-item">
            <v-icon class="mr-2">mdi-card-membership</v-icon>
            <span><strong>Nombre de la Membresía:</strong> {{ subscribe.id_membresia }}</span>
          </v-col>
          <v-col cols="12" class="info-item">
            <v-icon class="mr-2">mdi-calendar-start</v-icon>
            <span><strong>Fecha de Inicio:</strong> {{ subscribe.fecha_inicio }} </span>
          </v-col>
          <v-col cols="12" class="info-item">
            <v-icon class="mr-2">mdi-calendar-end</v-icon>
            <span><strong>Fecha de Expiración:</strong> {{ subscribe.fecha_expiracion}} </span>
          </v-col>
          <v-col cols="12" class="info-item">
            <v-icon class="mr-2">mdi-text-box-outline</v-icon>
            <span><strong>Descripción de la Membresía:</strong>{{ }} </span>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-col>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

import { Subscribe } from '../interfaces/subscribe.interface';
import { useSubscriptionsStore } from '../stores/subscribe.store';




const subscribe = ref<Subscribe|undefined>();

const subscribeStore = useSubscriptionsStore();



const loadSubscribeData = async () => {
  try {

    const subscribeData = await subscribeStore.loadSubscribe();

    if(subscribeData) {
      subscribe.value = subscribeData.subscribe.value
      console.log('infromacion de la inscripcion desde el componente', subscribe)
      return
    }

  
  } catch (error) {8
    console.error('Error cargando la suscripción:', error);
  }
};

onMounted(() => {
  loadSubscribeData();
});
</script>
