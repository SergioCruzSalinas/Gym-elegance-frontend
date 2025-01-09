<template>
  <v-row class="mt-16" justify="center">
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

    <CardActivity v-else v-for="activity in filteredActivities" :key="activity.id" :activity="activity"></CardActivity>

  </v-row>
</template>

<script  setup>
import CardActivity from '../components/CardActivity.vue';
import { getActivitiesAction } from '../actions';
import { computed, ref } from 'vue';
import { useQuery } from '@tanstack/vue-query';

const search = ref('')


const { data: activities, isLoading } = useQuery({
  queryKey: ['activities', { page: 1 }],
  queryFn: getActivitiesAction,
});

const filteredActivities = computed(() => {
  if (!activities.value) return [];
  return activities.value.data.filter(activity => 
  activity.descripcion.toLowerCase().includes(search.value.toLowerCase())
  );
});

</script>
