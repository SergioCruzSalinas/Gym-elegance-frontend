<template>
  <v-container>
    <v-row>
      <!-- Columna para el formulario de login, en pantallas pequeñas se ajusta para ocupar toda la fila -->
      <v-col cols="12" md="12" class="d-flex justify-center mt-16">
        <v-card
          class="pa-6 pa-md-12"
          style="background-color: black; opacity: 0.8;"
          elevation="8"
          rounded="lg"
          width="100%"
          max-width="500px"
        >
          <div v-if="mensaje" class="mensaje text-center"> {{ mensaje }}</div>
          <form @submit.prevent="onLogin">
            <div class="texto">Cuenta</div>
            <v-text-field
              v-model="correoElectronico"
              ref="emailInputRef"
              density="compact"
              placeholder="Ingresa tu correo electrónico"
              prepend-inner-icon="mdi-email-outline"
              variant="outlined"
              class="custom-text-field"
              base-color="black"
              bg-color="white"
              autocomplete="email" 
            ></v-text-field>
            
            <div class="texto">Contraseña</div>
            <v-text-field
              v-model="contrasenia"
              ref="passwordInputRef"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
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
              <router-link :to="{ name: 'register' }" class="texto">¿Olvidaste tu contraseña?</router-link><br><br>
              <router-link :to="{ name: 'register' }" class="texto">Regístrate aquí</router-link>
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
import { useAuthStore } from '../stores/auth.store';
import { tupleTypeAnnotation } from '@babel/types';

const correoElectronico = ref('');
const contrasenia = ref('');
const visible = ref(false);
const mensaje = ref('')
const emailInputRef = ref<HTMLInputElement|null>(null);
const passwordInputRef = ref<HTMLInputElement|null>(null);
const router = useRouter();

const authStore = useAuthStore();

const onLogin = async () => {

  if (!correoElectronico.value) {
  mensaje.value = 'Por favor ingresa tu correo electrónico';
  emailInputRef.value?.focus();
  return;
}

if (!contrasenia.value) {
  mensaje.value = 'Por favor ingresa tu contraseña';
  passwordInputRef.value?.focus();
  return;
}

  const ok = await authStore.login(correoElectronico.value, contrasenia.value);

  if(ok){
    return router.replace({ name: 'inicio'});
  }

  mensaje.value= 'Ingrese la contraseña y el correo de manera correcta'
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
