<template>
    <v-container fluid class="login-container">
      <v-row>
        <v-col cols="12" md="12" class="d-flex justify-center md:justify-center">
          <h1>Agregar nuevo instructor</h1>
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
  
            <form @submit = "onSubmit">
              <div class="texto">Nombre del Instructor</div><br>
              <CustomInput
              v-model = "nombre" 
              v-bind = "nombreAttrs"
              :error = "errors.nombre" 
              icon = "mdi-account"

              />

              <div class="texto">Numero telefonico</div><br>
              <CustomInput
              v-model = "telefono" 
              v-bind = "telefonoAttrs"
              :error = "errors.telefono" 
              icon = "mdi-phone"
              />
              
              <div class="texto">Correo electronico</div><br>
              <CustomInput
              v-model = "correo_electronico" 
              v-bind = "correo_electronicoAttrs"
              :error = "errors.correo_electronico" 
              icon = "mdi-email"
              />
             

              <div class="texto">Contraseña</div>
              <v-text-field
              v-model="contrasenia"
              :icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              placeholder="Ingresa tu contraseña"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              class="custom-text-field"
              base-color="black"
              bg-color="white"
              autocomplete="current-password" 
              @click:append-inner="visible = !visible"
              />
  
              <v-btn
                type="submit"
                class="mb-8"
                color="black"
                size="large"
                variant="tonal"
                block
              >
                <div class="texto">Registrar instructor</div>
              </v-btn>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script src="./CreateCoach.ts" lang="ts"></script>
  
  
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
  