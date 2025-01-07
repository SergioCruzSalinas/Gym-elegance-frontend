<template>
    <v-container fluid class="login-container">
      <v-row>
        <v-col cols="12" md="12" class="d-flex justify-center md:justify-center">
          <h1>Instructor</h1>
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
            <form @submit = "onSubmit" >

              <div class="texto">Nombre del Instructor</div>
              <CustomInput
              v-model = "nombre" 
              v-bind = "nombreAttrs"
              :error = "errors.nombre" 
              icon = "mdi-account"
              /><br>

              <div class="texto">Numero telefonico</div>
              <CustomInput
              v-model = "telefono" 
              v-bind = "telefonoAttrs"
              :error = "errors.telefono" 
              icon = "mdi-phone"
              /><br>
              
              <div class="texto">Correo electronico</div><br>
              <CustomInput
              v-model = "correo_electronico" 
              v-bind = "correo_electronicoAttrs"
              :error = "errors.correo_Electronico" 
              icon = "mdi-email"
              />
            
  
              
  
              <v-btn
                type="submit"
                class="mb-8"
                color="black"
                size="large"
                variant="tonal"
                block
              >
                <div class="texto">Editar membresia</div>
              </v-btn>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script src="./Coach.ts" lang="ts"></script>
  
  <style scoped>
  
  .input-group {
    margin-bottom: 25px;
  }
  
  
  .texto {
    color: white;
    font-size: 18px;
    margin-bottom: 8px;
  }
  </style>