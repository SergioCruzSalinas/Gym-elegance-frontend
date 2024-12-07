<template>
    <h1 class="text-center">Planes y precios en Gym Elegance</h1>
    <v-row justify="center" class="mt-8" align="stretch">

    <div v-if="isLoading" class="loading-message d-flex justify-center align-center" style="height: 200px; width: 100%;">
      <v-progress-circular indeterminate color="yellow" size="50" width="5"></v-progress-circular>
      <span class="ml-4">Cargando membresias...</span>
    </div>

      <CardMembresia v-else v-for="membership in memberships.data" :key="membership.id" :membership="membership" ></CardMembresia>
    </v-row>

</template>

<script setup>
import { useQuery } from '@tanstack/vue-query';
import CardMembresia from '../components/CardMembresia.vue';
import { getMembershipsAction } from '../actions';


const { data: memberships, isLoading } = useQuery({
  queryKey: ['memberships', { page: 1 }],
  queryFn: getMembershipsAction,
});




</script>