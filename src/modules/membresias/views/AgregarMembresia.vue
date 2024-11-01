<template>
    <v-container fluid class="login-container">
      <v-row>
        <v-col cols="12" md="12" class="d-flex justify-center md:justify-center">
          <h1>Agregar nueva membresia</h1>
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
  
            <form @submit.prevent="crearMembresia()">
              <div class="texto">Nombre</div>
              <v-text-field
                v-model="formMembresia.tipo"
                density="compact"
                placeholder="Nombre o id del usuario"
                variant="outlined"
                class="custom-text-field"
                color="white"
              ></v-text-field>

              <div class="texto">Descripcion del plan</div>
              <v-text-field
                v-model="formMembresia.descripcion"
                density="compact"
                placeholder="Nombre o id del usuario"
                variant="outlined"
                class="custom-text-field"
                color="white"
              ></v-text-field>
  
              <div class="texto">Dias de duracion</div>
              <v-text-field
                v-model="formMembresia.DiasDuracion"
                type="number"
                density="compact"
                placeholder="Nombre o id del usuario"
                variant="outlined"
                class="custom-text-field"
                color="white"
              ></v-text-field>

              <div class="texto">meses de duracion</div>
              <v-text-field
                v-model="formMembresia.mesDuracion"
                type="number"
                density="compact"
                placeholder="Nombre o id del usuario"
                variant="outlined"
                class="custom-text-field"
                color="white"
              ></v-text-field>

              <div class="texto">Precio</div>
              <v-text-field
                v-model="formMembresia.precio"
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
                <div class="texto">Crear membresia</div>
              </v-btn>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';

  const mensaje = ref('');
  
  const formMembresia = reactive({
   tipo:'',
   descripcion:'',
   mesDuracion:'',
   DiasDuracion:'',
   precio:'',
  });
  
  function crearMembresia() {
  
    console.log('Creando membresia:', formMembresia);
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
  
