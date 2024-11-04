<template>
    <v-container fluid class="login-container">
      <v-row>
        <v-col cols="12" md="12" class="d-flex justify-center md:justify-center">
          <h1>Agregar nuevo Administrador</h1>
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
  
            <form @submit.prevent="regitrarCoach">
              <div class="texto">Nombre del nuevo admin</div>
              <v-text-field
                v-model="formCoach.nombreUsuario"
                density="compact"
                placeholder="Nombre o descripcion de la pagina"
                variant="outlined"
                class="custom-text-field"
                base-color="black"
                bg-color="white"
              ></v-text-field>
  
              <div class="texto">correo electronico</div>
              <v-text-field
                v-model="formCoach.email"
                density="compact"
                placeholder="Ingresa tu correo electrónico"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
                class="custom-text-field"
                base-color="black"
                bg-color="white"
              ></v-text-field>
              
              <div class="texto">Numero de telefono</div>
              <v-text-field
                v-model="formCoach.telefono"
                density="compact"
                placeholder="Numero de telefono"
                variant="outlined"
                class="custom-text-field"
                base-color="black"
                bg-color="white"
              ></v-text-field>

              <div class="texto">Contraseña</div>
              <v-text-field
                v-model="formCoach.contrasenia"
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Ingresa tu contraseña"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                class="custom-text-field"
                base-color="black"
                bg-color="white"
                @click:append-inner="visible = !visible"
              ></v-text-field>
  
              <v-btn
                type="submit"
                class="mb-8"
                color="black"
                size="large"
                variant="tonal"
                block
              >
                <div class="texto">Registrar admin</div>
              </v-btn>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const visible = ref(false);
  const mensaje = ref('')

  const formCoach=reactive({
    nombreUsuario:'',
    email:'',
    telefono:'',
    contrasenia:''
  })
 
  
  const regitrarCoach = () => {
    console.log('usuario registrado')
  
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
  