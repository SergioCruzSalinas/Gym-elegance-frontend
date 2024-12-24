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
           
  
            <form >
              <div class="texto">Nombre o descripcion de la actividad</div>
              <v-text-field
               
                density="compact"
                variant="outlined"
                class="custom-text-field"
                base-color="black"
                bg-color="white"
                prepend-icon="mdi-pencil"
              ></v-text-field>
  
              <div class="texto">Instructor</div>
              <v-text-field
               
                density="compact"
                variant="outlined"
                class="custom-text-field"
                base-color="black"
                bg-color="white"
                prepend-icon="mdi-account"
              ></v-text-field>
              
              <div class="texto">Limite de personas</div>
              <v-text-field
              
                type="number"
                density="compact"
                variant="outlined"
                class="custom-text-field"
                base-color="black"
                bg-color="white"
                prepend-icon="mdi-account-multiple"
              ></v-text-field>
  
              <div class="texto">Fecha de la actividad</div>
              <v-text-field
              
                type="date"
                density="compact"
                variant="outlined"
                clearable
                base-color="black"
                bg-color="white"
                prepend-icon="mdi-calendar"
              ></v-text-field>
  
              <div class="texto">Hora que inicia la actividad</div>
              <v-text-field
               
                type="time"
                density="compact"
                variant="outlined"
                clearable
                base-color="black"
                bg-color="white"
                prepend-icon="mdi-clock"
              ></v-text-field>
  
              <div class="texto">Hora que finaliza la actividad</div>
              <v-text-field
                
                type="time"
                density="compact"
                variant="outlined"
                clearable
                base-color="black"
                bg-color="white"
                prepend-icon="mdi-clock-end"
              ></v-text-field>
  
              <v-btn
                type="submit"
                class="mb-8"
                color="black"
                size="large"
                variant="tonal"
                block
              >
                <div class="texto">Editar actividad</div>
              </v-btn>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script src="./actividad.ts" lang="ts"></script>
  
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
  