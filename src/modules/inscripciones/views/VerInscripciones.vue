<template>
  <v-card title="Inscripciones" flat>
    <v-card-text>
      <v-text-field
        v-model="search"
        label="Buscar"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </v-card-text>

    <div v-if="isLoading">
      <h1>Cargando información...</h1>
    </div> 

    <v-data-table
      v-else
      :headers="headers"
      :items="subscriptionsData"
    ></v-data-table>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { getSubscriptionsAction } from '../actions';

// Estado de la búsqueda (aunque no se usará)
const search = ref('');

// Definición de las cabeceras para la tabla
const headers = ref([
  { align: 'start', key: 'name', sortable: false, title: 'Folio' },
  { key: 'idUsuario', title: 'Usuario' },
  { key: 'idMembresia', title: 'Membresía' },
  { key: 'fechaInicio', title: 'Fecha Inicio' },
  { key: 'fechaFin', title: 'Fecha Fin' },
  { key: 'estatus', title: 'Estatus' },
]);

// Realización de la consulta usando useQuery
const { data: subscriptions, isLoading } = useQuery({
  queryKey: ['subscriptions'],
  queryFn: getSubscriptionsAction,
});

// Computed para acceder a las suscripciones cuando estén disponibles
const subscriptionsData = subscriptions.value ? subscriptions.value.data : [];

// Consola para verificar los datos
console.log("informacion de subscriptionsData desde el componente", subscriptionsData.value);
</script>
