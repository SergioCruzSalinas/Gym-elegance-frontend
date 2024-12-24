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
          <div v-if="mensaje" class="mensaje text-center"> {{ mensaje }}</div> <br>

          <form @submit.prevent="createActivity">
            <div class="texto">Nombre o descripcion de la actividad</div>
            <v-text-field
              v-model="addActivity.descripcion"
              density="compact"
              placeholder="Nombre o descripcion de la pagina"
              variant="outlined"
              class="custom-text-field"
              color="white"
            ></v-text-field>

            <div class="texto">Instructor</div>
            <v-text-field
              v-model="addActivity.idInstructor"
              density="compact"
              placeholder="Instructor encargado"
              variant="outlined"
              class="custom-text-field"
              color="white"
            ></v-text-field>
            
            <div class="texto">Limite de personas</div>
            <v-text-field
              v-model="addActivity.cupo"
              type="number"
              density="compact"
              variant="outlined"
              class="custom-text-field"
              color="white"
              :error-messages="cupoError"
            ></v-text-field>

            <div class="texto">Fecha de la actividad</div>
            <v-text-field
              v-model="addActivity.fecha"
              type="date"
              density="compact"
              variant="outlined"
              clearable
              color="white"
            ></v-text-field>

            <div class="texto">Hora que inicia la actividad</div>
            <v-text-field
              v-model="addActivity.horaInicio"
              type="time"
              density="compact"
              variant="outlined"
              clearable
              color="white"
            ></v-text-field>

            <div class="texto">Hora que finaliza la actividad</div>
            <v-text-field
              v-model="addActivity.horaFin"
              type="time"
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
              <div class="texto">Crear actividad</div>
            </v-btn>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useActivitiesStore } from '../store/activites.store';
import { useRouter } from 'vue-router';

const mensaje=ref('')
const cupoError = ref('')

const addActivity = reactive({
  descripcion: '',
  idInstructor: '',
  cupo: undefined,
  fecha: '',
  horaInicio: '',
  horaFin: ''
});

const activitiesStore = useActivitiesStore();
const router = useRouter();

const createActivity = async () => {
  // Validación de 'cupo'
  const cupo = parseInt(addActivity.cupo, 10);

  if (isNaN(cupo) || cupo <= 0) {
    cupoError.value = 'Por favor, ingrese un número entero válido para el cupo.';
    return;
  }

  // Limpia los posibles mensajes de error
  cupoError.value = '';

  const ok = await activitiesStore.createActivity(
    addActivity.descripcion, 
    cupo, 
    addActivity.idInstructor, 
    addActivity.fecha, 
    addActivity.horaInicio, 
    addActivity.horaFin
  );

  console.log("valores de addActivity desde el componente", addActivity);
  console.log(typeof(cupo));

  if (ok) {
    return router.replace({ name: 'listaDeActividades' });
  }

  mensaje.value = 'No se pudo crear la actividad';
}

function formatFecha() {
  if (addActivity.fecha) {
    const date = new Date(addActivity.fecha);
    addActivity.fecha = date.toISOString().slice(0, 10);
  }
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
  color: white; 
}
.custom-text-field .v-input__control .v-field__placeholder {
  color: white; 
}
</style>
