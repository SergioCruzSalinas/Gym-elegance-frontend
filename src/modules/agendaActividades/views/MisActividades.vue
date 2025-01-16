<template>
    <h1 class="text-center">Mis actividades</h1>
    <v-row cols="12" justify="center" class="mt-8 ml-8" >
     

    <div v-if="authStore.isUser">
      <div v-if="isLoading" class="loading-message d-flex justify-center align-center" style="height: 200px; width: 100%;">
       <v-progress-circular indeterminate color="yellow" size="50" width="5"></v-progress-circular>
       <span class="ml-4">Cargando actividades...</span>
      </div>

      <CardMyActivityUser v-else v-for="gymAppointment in gymAppointments.data" :key="gymAppointment.id" :gymAppointment="gymAppointment" />

    </div>

  

    <div v-if = "authStore.isInstructor">
          
      <ActivitiesCoach/>

    </div>
  
    </v-row>
</template>

<script setup>
import { useQuery } from '@tanstack/vue-query';
import CardMyActivityUser from '../components/CardMyActivityUser.vue';
import { getGymAppointmentAction } from '../actions';
import ActivitiesCoach from '../../actividades/components/ActivitiesCoach.vue';
import { useAuthStore } from '@/modules/auth/stores/auth.store';


const authStore = useAuthStore();

const { data: gymAppointments, isLoading } = useQuery({
  queryKey: ['GymAppointments', { page : 1 }],
  queryFn: getGymAppointmentAction,
})


</script>

<style scoped>
h1{
    font-weight: bold;
    font-size:45px;
    font-family: 'Times New Roman', Times, serif
}

</style>