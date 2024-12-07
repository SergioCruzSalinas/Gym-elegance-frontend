<template>
  <v-col cols="12" sm="6" md="4" lg="4" class="d-flex">
    <v-card hover color="#333333" class="mr-16 membership-card" width="100%">
      <v-card-item>
        <v-row no-gutters>
          <!-- Columna de la imagen -->
          <v-col cols="4" class="d-flex align-center justify-center mt-16">
            <img src="/src/assets/img/iconActivity.png" width="80px" height="80px" alt="imagen del plan" class="activity-icon">
          </v-col>

          <!-- Columna del contenido -->
          <v-col cols="8" class="d-flex flex-column">
            <div class="card-activity">
              <h1><v-icon left>mdi-information</v-icon>{{activity.descripcion}}</h1>
            </div>
            <div class="card-activity">
              <h2><v-icon left>mdi-file-document</v-icon>Número de Folio: {{activity.id}}</h2>
            </div>
            <div class="card-activity">
              <h2><v-icon left>mdi-calendar</v-icon>Fecha:</h2>
              <p>{{ formatDate(activity.fecha) }}</p>
            </div>
            <div class="card-activity">
              <h2><v-icon left>mdi-clock</v-icon>Hora de Inicio:</h2>
              <p>{{activity.hora_inicio}}</p>
            </div>
            <div class="card-activity">
              <h2><v-icon left>mdi-clock</v-icon>Hora de fin:</h2>
              <p>{{activity.hora_fin}}</p>
            </div>
            <div class="card-activity">
              <h2><v-icon left>mdi-account-multiple</v-icon>Límite de Personas:</h2>
              <p>{{ activity.cupo }} personas</p>
            </div>
          </v-col>
        </v-row>
      </v-card-item>

      <!-- Botones de acción, solo visibles para administradores -->
      <v-card-actions v-if="authStore.isAdmin" class="justify-end-center d-flex flex-column">
        <v-btn color="#1F3A93" variant="elevated" class="action-button mb-2" block>
          <v-icon left>mdi-pencil</v-icon>Editar
        </v-btn>
        <v-btn color="#B0B0B0" variant="elevated" class="action-button" block>
          <v-icon left>mdi-refresh</v-icon>Cambiar Estatus
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/modules/auht/stores/auth.store';
import { Activity } from '../interfaces/activity.interface';

const authStore = useAuthStore();

interface Props {
  activity: Activity;
}

defineProps<Props>();

const formatDate = (dateTime: string) => {
  const date = new Date(dateTime); 
  const year = date.getFullYear(); 
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
  const day = date.getDate().toString().padStart(2, '0'); 

  return `${year}-${month}-${day}`; 
}
</script>

<style scoped>
.membership-card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    width: 100%;
    height: auto;
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
    font-size: 18px;
    text-align: left;
    font-weight: bold;
    color: #FFD700;
}

.card-activity h2 {
    font-size: 14px;
    text-align: left;
    color: #E0E0E0;
    margin-bottom: 4px;
}

.card-activity p {
    font-size: 14px;
    font-weight: normal;
    text-align: left;
    color: #FFFFFF;
    margin: 0;
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

/* Estilos responsivos */
@media (max-width: 768px) {
  .membership-card {
    padding: 20px;
    width: 100%;
    height: auto;
    transform: scale(1.1); /* Aumenta ligeramente el tamaño */
  }

  .card-activity h1 {
    font-size: 20px;
  }

  .card-activity h2 {
    font-size: 16px;
  }

  .card-activity p {
    font-size: 16px;
  }

  .activity-icon {
    width: 100px;
    height: 100px;
  }
}

@media (max-width: 1024px) {
  .membership-card {
    margin: 16px;
    padding: 20px;
  }

  .activity-icon {
    width: 90px;
    height: 90px;
  }
}
</style>
