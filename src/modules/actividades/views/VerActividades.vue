<template>
  <v-row justify="center" class="mt-8 ml-16" align="stretch">
    <v-col cols="12" md="12" offset-md="2">
      <v-text-field
        class="center"
        v-model="search"
        label="Actividad que desea buscar"
        append-icon="mdi-magnify"
        solo
        clearable
      ></v-text-field>
    </v-col>

    <div v-if="isLoading" class="loading-message d-flex justify-center align-center" style="height: 200px; width: 100%;">
      <v-progress-circular indeterminate color="yellow" size="50" width="5"></v-progress-circular>
      <span class="ml-4">Cargando actividades...</span>
    </div>

    <CardActivity v-else v-for="activity in activities.data" :key="activity.id" :activity="activity"></CardActivity>

  </v-row>
</template>

<script lang="ts" setup>
import CardActivity from '../components/CardActivity.vue';
import { getActivitiesAction } from '../actions';
import { ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';

const search = ref('')


const { data: activities, isLoading } = useQuery({
  queryKey: ['activities', { page: 1 }],
  queryFn: getActivitiesAction,
});

</script>
