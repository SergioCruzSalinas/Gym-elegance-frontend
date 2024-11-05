<template>
  <v-row class="mt-16" justify="center">
    <!-- Sección de Información Personal -->
    <v-col cols="12" sm="6" class="d-flex justify-center">
      <v-card class="pa-4 mb-4 ml-md-10">
        <v-card-title class="d-flex align-center">
          <v-icon  class="mr-2">mdi-account</v-icon>
          <h1 class="text-h6 font-weight-bold mb-0">Información Personal</h1>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          <v-row>
            <v-col cols="12" class="info-item">
              <v-icon class="mr-2">mdi-identifier</v-icon>
              <span><strong>ID del Usuario:</strong> xxxxx</span>
            </v-col>
            <v-col cols="12" class="info-item">
              <v-icon  class="mr-2">mdi-account-circle</v-icon>
              <span><strong>Nombre del Usuario:</strong> xxxxx</span>
            </v-col>
            <v-col cols="12" class="info-item">
              <v-icon  class="mr-2">mdi-email-outline</v-icon>
              <span><strong>Correo Electrónico:</strong> xxxxxxxx</span>
            </v-col>
            <v-col cols="12" class="info-item">
              <v-icon class="mr-2">mdi-phone</v-icon>
              <span><strong>Número de Teléfono:</strong> xxxxxxxxxx</span>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions class="justify-end">
          <v-btn  class="circular-btn" @click="editarPerfil">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn class="circular-btn" @click="cambiarContrasena">
            <v-icon>mdi-lock-reset</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>

    <!-- Sección de Membresía -->
    <v-col v-if="authStore.isUser" cols="12" sm="6" class="d-flex justify-center">
      <v-card  class="pa-4 mb-4 mr-md-10">
        <v-card-title class="d-flex align-center">
          <v-icon color="#1F3A93" class="mr-2">mdi-account-card-details</v-icon>
          <h2 class="text-h6 font-weight-bold mb-0">Mi Membresía</h2>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          <v-row>
            <v-col cols="12" class="info-item">
              <v-icon  class="mr-2">mdi-card-membership</v-icon>
              <span><strong>Nombre de la Membresía:</strong> xxxxxxxx</span>
            </v-col>
            <v-col cols="12" class="info-item">
              <v-icon class="mr-2">mdi-calendar-start</v-icon>
              <span><strong>Fecha de Inicio:</strong> xxxxxxxx</span>
            </v-col>
            <v-col cols="12" class="info-item">
              <v-icon  class="mr-2">mdi-calendar-end</v-icon>
              <span><strong>Fecha de Expiración:</strong> xxxxxxxx</span>
            </v-col>
            <v-col cols="12" class="info-item">
              <v-icon class="mr-2">mdi-text-box-outline</v-icon>
              <span><strong>Descripción de la Membresía:</strong> xxxxxxxx</span>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>

    <v-col v-if="authStore.isInstructor" cols="12" sm="6" class="d-flex justify-center">
      <v-card  class="pa-4 mb-4 mr-md-10">
        <v-card-title class="d-flex align-center">
          <v-icon class="mr-2">mdi-account-card-details</v-icon>
          <h2 class="text-h6 font-weight-bold mb-0">Próxima actividad</h2>
        </v-card-title>

        <v-divider></v-divider>

        <v-card-text>
          <v-row>
            <v-col cols="12" class="info-item">
              <v-icon  class="mr-2">mdi-card-membership</v-icon>
              <span><strong>Nombre de la actividad:</strong> xxxxxxxx</span>
            </v-col>
            <v-col cols="12" class="info-item">
              <v-icon  class="mr-2">mdi-calendar-start</v-icon>
              <span><strong>Fecha de Inicio:</strong> xxxxxxxx</span>
            </v-col>
            <v-col cols="12" class="info-item">
              <v-icon class="mr-2">mdi-calendar-end</v-icon>
              <span><strong>Hora en la que finaliza la actividad:</strong> xxxxxxxx</span>
            </v-col>
            <v-col cols="12" class="info-item">
              <v-icon  class="mr-2">mdi-text-box-outline</v-icon>
              <span><strong>Participantes:</strong> xxxxxxxx</span>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

</template>

<script setup>
import { useAuthStore } from '@/modules/auht/stores/auth.store';

const authStore = useAuthStore();

function editarPerfil() {
  console.log("editar perfil");
}

function cambiarContrasena() {
  console.log("cambiar contraseña");
}
</script>

<style scoped>


.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}


.info-item  h2 {
    font-size: 16px;
    text-align: left;
    color: #FFD700;
    margin-bottom: 4px;
}

.info-item  p {
    font-size: 14px;
    font-weight: normal;
    text-align: left;
    color: #FFD700;
    margin: 0;
}

.circular-btn {
  background-color: #FFD700;
  color: #333333;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
