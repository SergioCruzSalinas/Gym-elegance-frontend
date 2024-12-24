<template>
  <v-row class="mt-16" justify="center">
    <v-col cols="12" sm="12" md="12" lg="12" xl="12" class="d-flex justify-center">
      <v-card class="pa-8 mb-8">
        <v-card-title class="d-flex align-center">
          <h1 class="text-h5 font-weight-bold mb-0">Cambiar contraseña</h1>
        </v-card-title>

        <v-divider></v-divider>

        <div v-if="mensaje" class="mensaje text-center">{{ mensaje }}</div>
        <br />

        <form @submit.prevent="changePassword">
          <div class="texto">Nueva contraseña</div>
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
            color="#FFD700"
            size="large"
            variant="elevated"
            block
          >
            <div class="textBtn">Cambiar contraseña</div>
          </v-btn>
        </form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import { ref } from 'vue';

const mensaje = ref('');
const contrasenia = ref('');
const visible = ref(false);

// Función para manejar el cambio de contraseña
function changePassword() {
  // Aquí puedes agregar la lógica para cambiar la contraseña
  console.log('Contraseña cambiada:', contrasenia.value);
  mensaje.value = 'Contraseña cambiada correctamente';
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

.textBtn {
  color: black;
  font-weight: bolder;
  font-size: 20px;
}

.custom-text-field .v-input__control .v-field__input {
  color: white; /* Cambia el color del texto */
}

.custom-text-field .v-input__control .v-field__placeholder {
  color: white; /* Cambia el color del placeholder */
}
</style>
