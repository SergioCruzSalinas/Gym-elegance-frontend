<template>
  <v-container fluid class="login-container">
    <v-row>
      <v-col cols="12" md="12" class="d-flex justify-center md:justify-center">
        <h1>membresia: {{values.id}}</h1>
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
          <form @submit="onSubmit">
            <div class="input-group">
              <div class="texto">Nombre</div>
              <CustomInput
                v-model="tipo"
                v-bind="tipoAttrs"
                :error="errors.tipo"
                icon="mdi-account"
              />
            </div>

            <div class="input-group">
              <div class="texto">Descripcion del plan</div>
              <CustomInput
                v-model="descripcion"
                v-bind="descripcionAttrs"
                :error="errors.descripcion"
                icon="mdi-text-box"
              />
            </div>

            <div class="input-group">
              <div class="texto">Dias de duracion</div>
              <CustomInput
                v-model="dias_duracion"
                v-bind="dias_duracionAttrs"
                :error="errors.dias_duracion"
                icon="mdi-calendar"
              />
            </div>

            <div class="input-group">
              <div class="texto">Meses de duracion</div>
              <CustomInput
                v-model="mes_duracion"
                v-bind="mes_duracionAttrs"
                :error="errors.mes_duracion"
                icon="mdi-calendar-month"
              />
            </div>

            <div class="input-group">
              <div class="texto">Precio</div>
              <CustomInput
                v-model="precio"
                v-bind="precioAttrs"
                :error="errors.precio"
                icon="mdi-currency-usd"
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
              <div class="texto">Editar membresia</div>
            </v-btn>
          </form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./Membresia.ts" lang="ts"></script>

<style scoped>

.input-group {
  margin-bottom: 25px;
}


.texto {
  color: white;
  font-size: 18px;
  margin-bottom: 8px;
}
</style>
