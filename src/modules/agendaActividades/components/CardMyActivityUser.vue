<template>
    <v-col cols="12" sm="6" md="4" lg="3" class="d-flex justify-center">
      <v-card hover color="#333333" width="100%" max-width="400px" class="mr-16 membership-card">
        <v-card-item>
          <v-row>
            <!-- Columna de la imagen -->
            <v-col cols="4" class="d-flex align-center justify-center pt-4">
              <img src="/src/assets/img/iconActivity.png" width="80px" height="80px" alt="imagen del plan">
            </v-col>
  
            <!-- Columna del contenido -->
            <v-col cols="8">
              <div class="card-activity">
                <h1><v-icon left>mdi-calendar</v-icon>Mi actividad</h1>
              </div>
              <div class="card-activity">
                <h2><v-icon left>mdi-calendar-clock</v-icon>Fecha:</h2>
                <p>DD/MM/AAAA</p>
              </div>
              <div class="card-activity">
                <h2><v-icon left>mdi-clock</v-icon>Hora de Inicio:</h2>
                <p>00:00 AM/PM</p>
              </div>
              <div class="card-activity">
                <h2><v-icon left>mdi-check-circle</v-icon>Asistencia:</h2>
                <p>Pendiente</p>
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

<script setup>
import { useAuthStore } from '@/modules/auht/stores/auth.store';

const authStore = useAuthStore();

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
      color: #FFFFFF; /* Color para texto de descripción */
  }
  
  .card-activity h1 {
      font-size: 20px;
      text-align: left;
      font-weight: bold;
      color: #FFD700; /* Color dorado para el título */
  }
  
  .card-activity h2 {
      font-size: 16px;
      text-align: left;
      color: #E0E0E0; /* Gris claro para los subtítulos */
      margin-bottom: 4px;
  }
  
  .card-activity p {
      font-size: 14px;
      font-weight: normal;
      text-align: left;
      color: #FFFFFF; /* Color blanco para el texto */
      margin: 0;
  }
  
  .action-button {
      font-weight: bold;
      text-transform: uppercase;
      transition: background-color 0.3s ease;
      color: #FFFFFF; /* Color blanco para texto de botones */
  }
  
  .action-button:hover {
      background-color: #3A539B; /* Color más oscuro al pasar el ratón */
  }
  </style>
  