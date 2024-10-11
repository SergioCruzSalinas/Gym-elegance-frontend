<template>
  <v-container>
    <v-row no-gutters>

      <v-col cols="12" md="8">
        <h1 class="text-center text-md-left">Bienvenido a Gym Elegance</h1>
      </v-col>

      <v-col cols="12" md="8" class="mt-4 mt-md-16">
        <p>
          En GYM ELEGANCE, nuestra misión es ayudarte a alcanzar tu mejor versión física y mental. 
          Somos más que un gimnasio; somos un espacio donde cada uno de tus objetivos es tomado en 
          serio y apoyado por un equipo de profesionales altamente capacitados. Aquí encontrarás todo 
          lo que necesitas para un entrenamiento completo y efectivo.
        </p>
      </v-col>

      <v-col cols="12" md="4" class="d-flex justify-center mt-4 mt-md-n16">
        <v-btn
          type="submit"
          class="mb-8"
          color="#28272C"
          large>
          ¿Eres nuevo? Pide tu visita. <br>Click aquí
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
h1 {
  font-size: 48px; 
}


@media (min-width: 960px) {
  h1 {
    font-size: 80px;
  }
}
</style>
