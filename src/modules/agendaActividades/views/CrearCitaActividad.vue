<template>
  <v-container fluid class="login-container">
    <v-row>
      <v-col cols="12" md="12" class="d-flex justify-center md:justify-center">
        <h1>Crear cita para nueva actividad</h1>
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

          <form @submit.prevent="addActivityAppointment">


            <div class="texto">Folio de la actividad</div>
            <v-select
             v-model="selectActivity"
             :items="activities"
             :rules="[v => !!v || 'El folio es requerido']"
             label="folio actividad"
             color="#FFFFFF"
             required
            ></v-select>
            
            <v-btn
              type="submit"
              class="mb-8"
              color="black"
              size="large"
              variant="tonal"
              block
            >
              <div class="texto">Agregar actividad</div>
            </v-btn>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useActivitiesStore } from "@/modules/actividades/store/activites.store";
import { onMounted } from "vue";
import { computed, ref } from "vue";
import { useGymAppointment } from "../store/GymAppointment.store";
import { useAuthStore } from "@/modules/auth/stores/auth.store";
import { useRouter } from "vue-router";


const mensaje = ref("");
const selectActivity = ref("");
const activities = ref([]) 


const activitiesStore = useActivitiesStore();
const gymAppointmentStore = useGymAppointment();
const authStore = useAuthStore();
const router = useRouter();

const idUsuario = authStore.user.id


const getactivities = async() => {
  try {
    const loadActivites = await activitiesStore.getActivities();

    if(loadActivites){
      
      activities.value = loadActivites.activities.value.map(activity => activity.id)

      return {
         activities
      }
      
    }
  } catch (error) {
    console.log(error)
    
  }

}

const addActivityAppointment = async() => {

  const idActividad = selectActivity.value.toString();



  console.log(typeof(idActividad))
  
    const createAppointment = await gymAppointmentStore.registerActivityAppointment(idUsuario, idActividad)

    if(createAppointment){
      return router.replace({name:'listaActividadesUsuario'})
    }

    mensaje.value = "No se pudo crear la cita"

}



onMounted(() => {
  getactivities();
});

</script>

<style scoped>
.mensaje {
  color: red;
}
.texto {
  color: white;
  font-size: 20px;
}
</style>
