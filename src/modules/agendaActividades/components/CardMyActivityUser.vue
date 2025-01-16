<template>
    <v-col cols="12" sm="5"  class="d-flex justify-center">
      <v-card hover color="#333333"   class="pa-4 mb-4 ml-md-10">
        <v-card-item>
          <v-row>
            <v-col cols="4" class="d-flex align-center justify-center pt-4">
              <img src="/src/assets/img/iconActivity.png" width="700px" height="80px" alt="imagen del plan">
            </v-col>
  
            <v-col cols="8">
              <div class="card-activity">
                <h1><v-icon left>mdi-calendar</v-icon>{{ gymAppointment.descripcion  }}</h1>
              </div>
              <div class="card-activity">
                <h2><v-icon left>mdi-calendar-clock</v-icon>Fecha:</h2>
                <p>{{ gymAppointment.fecha  }}</p>
              </div>
              <div class="card-activity">
                <h2><v-icon left>mdi-clock</v-icon>Hora de Inicio:</h2>
                <p>{{ gymAppointment.hora_inicio}}</p>
              </div>
              <div class="card-activity">
                <h2><v-icon left>mdi-check-circle</v-icon>Asistencia:</h2>
                <p> {{ gymAppointment.asistencia }}</p>
              </div>
            </v-col>
          </v-row>
        </v-card-item>
  
        <v-card-actions v-if="authStore.isAdmin" class="justify-space-between">
          <v-btn color="#1E90FF" variant="elevated" class="action-button" width="48%">
            Editar
          </v-btn>
          <v-btn color="#A9A9A9" variant="elevated" class="action-button" width="48%">
            Cambiar Estatus
          </v-btn>
        </v-card-actions>

        <v-card-actions v-else-if="authStore.isInstructor">
          <v-btn color="#1E90FF" variant="elevated" class="action-button" width="100%">
            Asistencia
          </v-btn>
        </v-card-actions>

        <v-card-actions v-else-if="authStore.isUser">
          <v-btn color="#1E90FF" variant="elevated" class="action-button" width="100%">
            Editar
          </v-btn>
        </v-card-actions>

      </v-card>
    </v-col>
  </template>

<script lang="ts" setup>
import { useAuthStore } from '@/modules/auth/stores/auth.store';
import { GymAppointment } from '../interfaces/gymAppointment.interface';

const authStore = useAuthStore();

interface PropsGymAppointment{
  gymAppointment: GymAppointment;
}

defineProps<PropsGymAppointment>();

</script>
  
  <style>
  .membership-card {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .membership-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
  
  .card-activity {
      margin-bottom: 12px;
      color: #FFFFFF; 
  }
  
  .card-activity h1 {
      font-size: 20px;
      text-align: left;
      font-weight: bold;
      color: #FFD700;
  }
  
  .card-activity h2 {
      font-size: 16px;
      text-align: left;
      color: #E0E0E0; 
      margin-bottom: 4px;
  }
  
  .card-activity p {
      font-size: 14px;
      font-weight: normal;
      text-align: left;
      color: #FFFFFF; 
  }
  
  .action-button {
      font-weight: bold;
      text-transform: uppercase;
      transition: background-color 0.3s ease;
      color: #FFFFFF; 
  }
  
  .action-button:hover {
      background-color: #3A539B; 
  }
  </style>
  