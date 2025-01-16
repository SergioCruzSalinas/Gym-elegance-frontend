<template>
  <v-row class="mt-16" justify="center">
    <v-col cols="12" class="d-flex justify-center">
      <v-card class="pa-8 mb-8">
        <v-card-title class="d-flex align-center">
          <h1 class="text-h5 font-weight-bold mb-0">Cambiar contraseña</h1>
        </v-card-title>

        <v-divider></v-divider>

        <div v-if="mensaje" class="mensaje text-center">{{ mensaje }}</div>
        <br />

        <form @submit.prevent="changePassword">
          <div>
            <p class="texto">Introduzca la contraseña actual:</p>
            <v-text-field
              v-model="contrasenia"
              ref="currentPasswordRef"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              placeholder="Ingresa tu contraseña actual"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              class="custom-text-field"
              autocomplete="current-password"
              @click:append-inner="toggleVisibility"
            ></v-text-field>
          </div>

          <div>
            <p class="texto">Nueva contraseña:</p>
            <v-text-field
              v-model="contraseniaNueva"
              ref="newPasswordRef"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              placeholder="Ingresa tu nueva contraseña"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              class="custom-text-field"
              autocomplete="new-password"
              @click:append-inner="toggleVisibility"
            ></v-text-field>
          </div>

          <v-btn
            type="submit"
            class="mb-8"
            color="yellow"
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
import { ref } from "vue";
import { changePasswordAction } from "../actions";

const mensaje = ref("");
const contrasenia = ref("");
const contraseniaNueva = ref("");
const visible = ref(false);

const toggleVisibility = () => {
  visible.value = !visible.value;
};

const changePassword = async () => {
  // Validar que ambos campos estén llenos
  if (!contrasenia.value || !contraseniaNueva.value) {
    mensaje.value = "Ambos campos son obligatorios.";
    return;
  }

  try {
    // Llamar a la acción para cambiar la contraseña
    const ok = await changePasswordAction(contrasenia.value, contraseniaNueva.value);

    if (ok) {
      mensaje.value = "Contraseña cambiada con éxito.";
      // Limpiar los campos después del éxito
      contrasenia.value = "";
      contraseniaNueva.value = "";
    } else {
      mensaje.value = "No se pudo actualizar la contraseña.";
    }
  } catch (error) {
    console.error(error);
    mensaje.value = "Hubo un error al intentar cambiar la contraseña.";
  }
};
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

.custom-text-field {
  --v-theme-on-background: white; /* Cambiar color del texto */
  --v-theme-background: black; /* Cambiar color de fondo */
}
</style>
