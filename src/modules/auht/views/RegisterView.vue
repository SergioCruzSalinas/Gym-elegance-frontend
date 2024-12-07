<template>
    <v-container fluid class="login-container">
      <v-row>
        <v-col cols="12" md="12" class="d-flex justify-center md:justify-center">
          <v-card
            class="pa-6 pa-md-12 pb-8 mr-md-32"
            style="background-color: black; opacity: 0.8; margin-top: 60px;"
            elevation="8"
            rounded="lg"
            width="500"
            max-width="800px"
          >
            <div v-if="mensaje" class="mensaje text-center"> {{ mensaje }}</div> <br>
  
            <form @submit.prevent="onRegister">
                <div class="texto">Ingresa tu nombre</div>
              <v-text-field
                v-model="myForm.nombreUsuario"
                density="compact"
                placeholder="Ingresa tu nombre "
                variant="outlined"
                class="custom-text-field"
                base-color="black"
                bg-color="white"
              ></v-text-field>

              <div class="texto">Cuenta</div>
              <v-text-field
                v-model="myForm.correoElectronico"
                density="compact"
                placeholder="Ingresa tu correo electrónico"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
                class="custom-text-field"
                base-color="black"
                bg-color="white"
              ></v-text-field>

              <div class="texto">Numero telefono:</div>
              <v-text-field
                v-model="myForm.telefono"
                density="compact"
                placeholder="Ingresa un numero de telefono"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
                class="custom-text-field"
                base-color="black"
                bg-color="white"
              ></v-text-field>
              
              <div class="texto">Contraseña</div>
              <v-text-field
                v-model="myForm.contrasenia"
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
                <div class="texto">Crear Cuenta</div>
              </v-btn>
  
              <div class="links">
                <router-link class="texto" :to="{ name: 'login' }">¿Ya eres usuario?</router-link>
              </div>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue';
  import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth.store';
  
  const visible = ref(false);
  const mensaje = ref('');
  const router = useRouter();

  const authStore = useAuthStore();

  const myForm = reactive({
    nombreUsuario: '',
    correoElectronico: '',
    telefono: '',
    contrasenia: '',
  })
  
  const onRegister = async () => {

    const { ok, message } = await authStore.register(myForm.nombreUsuario, myForm.correoElectronico, myForm.telefono, myForm.contrasenia);

    if(ok){
        router.replace({name:'login'});
        
        return;
    };

    mensaje.value= 'No se pudo registrar correctamente'


    router.push('/home');
  };
  </script>
  
  <style scoped>
  .mensaje {
    color: red;
  }
  .links {
    text-align: center;
  }
  .texto {
    color: white;
    font-size: 20px; 
  }
  </style>
  