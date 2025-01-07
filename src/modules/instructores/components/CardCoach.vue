<template>
  <v-col cols="12" sm="6" md="4" lg="3" class="d-flex">
    <v-card hover color="#333333" max-width="400px" class="card-container mr-4">
      <v-card-item>
        <v-row>
          <v-col cols="12">
            <div class="card-coach">
              <v-icon color="#FFD700" class="mr-2">mdi-account-badge</v-icon>
              <h1 style="color: #FFD700;">{{ coach.id }}</h1>
            </div>
            <v-divider></v-divider>
            <div class="card-coach">
              <v-icon  class="mr-2">mdi-account</v-icon>
              <h2>Nombre: {{ coach.nombre }}</h2>
            </div>
            <v-divider></v-divider>
            <div class="card-coach">
              <v-icon  class="mr-2">mdi-check-circle</v-icon>
              <p>Estatus: {{coach.estatus}}</p>
            </div>
            <v-divider></v-divider>
            <div class="card-coach">
              <v-icon  class="mr-2">mdi-phone</v-icon>
              <p>Teléfono: {{ coach.telefono }}</p>
            </div>
            <v-divider></v-divider>
            <div class="card-coach">
              <v-icon  class="mr-2">mdi-email</v-icon>
              <p>Correo Electrónico: {{coach.correo_electronico}}</p>
            </div>
          </v-col>
        </v-row>
      </v-card-item>

      <v-card-actions>
        <RouterLink :to="`/admin/instructores/lista-instructores/${coach.id}`" style="text-decoration:none">
          <v-btn color="#1F3A93" variant="elevated" class="action-button">
           Editar
          </v-btn>
        </RouterLink>
        <v-spacer></v-spacer>
        <v-btn color="#B0B0B0" variant="elevated" class="action-button">
          Cambiar Estatus
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts" setup>
import { User } from '@/modules/auth/interfaces';


interface Props{
  coach: User;
} 

defineProps<Props>();

</script>

<style>

.card-container {
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15); /* Sombra suave */
  padding: 16px;
}

.card-coach {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.card-coach h1 {
  font-size: 22px;
  font-weight: bold;
  color: #E0E0E0;
}

.card-coach h2 {
  font-size: 18px;
  color: #E0E0E0;
}

.card-coach p {
  font-size: 14px;
  color: #E0E0E0;
}


.action-button {
  transition: background-color 0.3s ease;
  font-weight: bold;
  color: #FFD700;
}

.action-button:hover {
  background-color: #1F4C93; 
}
</style>
