<template>
    <v-container fluid class="login-container">
      <v-row>
        <v-col cols="12" md="12" class="d-flex justify-center md:justify-center">
          <h1>Crear cita para nueva actividad</h1>
        </v-col>
        <v-col cols="12" md="12" class="d-flex justify-center md:justify-center">
          <v-card
            class="pa-6 pa-md-12 pb-8 mr-md-32"
            style="background-color: black; opacity: 0.8; margin-top: 20px;"
            elevation="8"
            rounded="lg"
            width="500"
            max-width="800px"
          >
            <div v-if="mensaje" class="mensaje text-center"> {{ mensaje }}</div> <br>
  
            <form @submit.prevent="handleCreateActivity">

  
              <div class="texto">Folio de la actividad</div>
              <v-select
               v-model="idActividad"
               :items="actividades"
               :rules="[v => !!v || 'El folio es requerido']"
               label="folio actividad"
               color="#FFFFFF"
               required
              ></v-select>
              
              <v-btn
                type="submit"
                class="mb-8"
                color="black"
                size="large"
                variant="tonal"
                block
              >
                <div class="texto">Crear actividad</div>
              </v-btn>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';

  const select= ref(null)
  const idActividad= ref(null)

  const actividades=ref([
        '1',
        '2',
        '3',
        '4',
      ])
  
  function handleCreateActivity() {
  
    console.log('Creando actividad:', addActivity);
  }
  
  
  </script>
  
  <style scoped>
  .mensaje {
    color: red;
  }
  .texto {
    color: white;
    font-size: 20px;
  }
  .custom-text-field .v-input__control .v-field__input {
    color: white; /* Cambia el color del texto */
  }
  .custom-text-field .v-input__control .v-field__placeholder {
    color: white; /* Cambia el color del placeholder */
  }
  </style>
  
