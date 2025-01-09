<template>
  <v-container fluid class="login-container">
    <v-row>
      <v-col cols="12" md="12" class="d-flex justify-center md:justify-center">
        <h1>Nueva inscripción</h1>
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

          <form @submit="onSubmit"  >
            

            <div class="input-group">
              <div class="texto">Usuario: </div>
              <CustomInput
              v-model="id_usuario"
              v-bind="id_usuarioAttrs"
              :error="errors.id_usuario"
              icon="mdi-text-box"
            />
            </div>
            
            <div class="input-group">
              <div class="texto">Membresia: </div>
              <v-select
               v-model.number="id_membresia"
               v-bind="id_membresia"
               :items="memberships"
               :rules="[v => !!v || 'La membresia es requerida']"
               label="membresia"
              ></v-select>
            </div> 

            <div class="input-group">
             <div class="texto">Fecha de la inscripcion</div>
             <CustomInput
              v-model="fecha_inicio"
              v-bind="fecha_inicioAttrs"
              :error="errors.fecha_inicio"
              type="date"
              icon="mdi-text-box"
             />
            </div>

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



<script src="./Subscription.ts" lang="ts"></script>

<style scoped>

.texto {
  color: white;
  font-size: 20px;
}

.input-group {
  margin-bottom: 25px;
}

</style>
