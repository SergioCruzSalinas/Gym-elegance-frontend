<template>
    <v-container fluid class="login-container">
      <v-row>
        <v-col cols="12" md="12" class="d-flex justify-center md:justify-center">
          <h1>Agregar nueva actividad</h1>
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
              <div class="texto">Nombre o id del usuario</div>
              <v-text-field
                v-model="formInscripcion.idUsuario"
                density="compact"
                placeholder="Nombre o id del usuario"
                variant="outlined"
                class="custom-text-field"
                color="white"
              ></v-text-field>
  
              <div class="texto">Membresia</div>
              <v-select
               v-model="formInscripcion.idMembresia"
               :items="membresias"
               :rules="[v => !!v || 'La membresia es requerida']"
               label="membresia"
               required
              ></v-select>
              
              <div class="texto">Fecha de la actividad</div>
              <v-text-field
                v-model="formInscripcion.fecha"
                type="date"
                density="compact"
                variant="outlined"
                clearable
                color="white"
              ></v-text-field>
  
              <v-btn
                type="submit"
                class="mb-8"
                color="black"
                size="large"
                variant="tonal"
                block
              >
                <div class="texto">Crear inscripcion</div>
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
  const membresias=ref([
        'plan 1',
        'plan 2',
        'plan 3',
        'plan 4',
      ])
  
  const formInscripcion = reactive({
   idUsuario:'',
   idMembresia:'',
   fecha:'',
  });
  
  function handleCreateActivity() {
  
    console.log('Creando actividad:', addActivity);
  }
  
  function formatFecha() {
    if (addActivity.fecha) {
      const date = new Date(addActivity.fecha);
      addActivity.fecha = date.toISOString().slice(0, 10)
    }
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
  
