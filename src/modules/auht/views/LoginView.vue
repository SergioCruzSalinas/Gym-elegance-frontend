<template>
    <v-container fluid class="login-container">
      <v-row>
        <v-col cols="12" md="10" class="d-flex justify-end md:justify-center">
          <v-card
            class="pa-6 pa-md-12 pb-8 mr-md-32"
            style="background-color: black; opacity: 0.8; margin-top: 60px;"
            elevation="8"
            rounded="lg"
            width="500"
            max-width="800px"
          >
            <div v-if="mensaje" class="mensaje text-center"> {{ mensaje }}</div> <br>
  
            <form @submit.prevent="handleLogin">
              <div class="texto">Cuenta</div>
              <v-text-field
                v-model="email"
                density="compact"
                placeholder="Ingresa tu correo electrónico"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
                class="custom-text-field"
                base-color="black"
                bg-color="white"
              ></v-text-field>
              
              <div class="texto">Contraseña</div>
              <v-text-field
                v-model="password"
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
                <div class="texto">Iniciar Sesión</div>
              </v-btn>
  
              <div class="links">
                <router-link class="texto">¿Olvidaste tu contraseña?</router-link><br><br>
                <router-link :to="{name:'register'}"  class="texto">Regístrate aquí</router-link>
              </div>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  
  const email = ref('');
  const password = ref('');
  const visible = ref(false);
  const mensaje = ref('');
  const router = useRouter();
  
  const handleLogin = () => {
    if (!email.value || !password.value) {
      mensaje.value = 'Ingrese el correo y la contraseña de manera correcta';
      return;
    }
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
  