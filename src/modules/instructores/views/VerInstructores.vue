<template>
    <v-row justify="center" class="mt-8 ml-16" align="stretch">
        <v-col cols="6" md="8" offset-md="2">
        <v-text-field
          class="center"
          label="Nombre del instructor"
          append-icon="mdi-magnify"
          solo
          clearable
        ></v-text-field>
        </v-col>

      <div v-if="isLoading" class="loading-message d-flex justify-center align-center" style="height: 200px; width: 100%;">
        <v-progress-circular indeterminate color="yellow" size="50" width="5"></v-progress-circular>
        <span class="ml-4">Cargando instructores...</span>
      </div>

      <CardCoach v-else v-for="coach in coaches.data" :key="coach.id" :coach="coach"></CardCoach>
    </v-row>
</template>

<script setup>
import { useQuery } from '@tanstack/vue-query';
import CardCoach from '../components/CardCoach.vue';
import { getCoachesAction } from '../actions';

const { data: coaches, isLoading  } = useQuery({
  queryKey:['coaches', { page: 1 }],
  queryFn: getCoachesAction,
})

</script>