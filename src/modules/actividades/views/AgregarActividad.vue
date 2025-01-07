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

          <form @submit="onSubmit"  >
            
            <div class="input-group">
              <div class="texto">Nombre o descripcion de la actividad</div>
              <CustomInput
              v-model="descripcion"
              v-bind="descripcionAttrs"
              :error="errors.descripcion"
              icon="mdi-text-box"
            />
            </div>

            <div class="input-group">
              <div class="texto">Instructor</div>
              <CustomInput
              v-model="id_instructor"
              v-bind="id_instructorAttrs"
              :error="errors.id_instructor"
              icon="mdi-text-box"
            />
            </div>
            
            <div class="input-group">
              <div class="texto">Limite de personas</div>
              <CustomInput
              v-model.number="cupo"
              v-bind="cupoAttrs"
              :error="errors.cupo"
              icon="mdi-text-box"
              />
            </div>            
            
            <div class="input-group">
             <div class="texto">Fecha de la actividad</div>
             <CustomInput
              v-model="fecha"
              v-bind="fechaAttrs"
              :error="errors.fecha"
              icon="mdi-text-box"
             />
            </div>

            <div class="input-group">
             <div class="texto">Hora que inicia la actividad</div>
             <CustomInput
              v-model="hora_inicio"
              v-bind="hora_inicioAttrs"
              :error="errors.hora_inicio"
              icon="mdi-text-box"
             />
            </div>

            <div class="input-group">   
            <div class="texto">Hora que finaliza la actividad</div>
            <CustomInput
              v-model="hora_fin"
              v-bind="hora_finAttrs"
              :error="errors.hora_fin"
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
              <div class="texto">Editar actividad</div>
            </v-btn>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./activity.ts" lang="ts"></script>

<style scoped>

.texto {
  color: white;
  font-size: 20px;
}

.input-group {
  margin-bottom: 25px;
}

</style>
