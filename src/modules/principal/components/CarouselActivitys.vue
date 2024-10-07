<template>
  <v-container fluid>
    <v-row>
      <!-- Columna vacía para ocupar el espacio a la izquierda -->
      <v-col cols="12" md="8"></v-col>

      <!-- Columna del carrusel, alineado a la derecha -->
      <v-col cols="12" md="4" class="d-flex justify-end" style="margin-top: -350px; margin-left: -100px;">
        <v-carousel
          height="350"
          style="width: 600px;"
          show-arrows="hover"
          cycle
          hide-delimiter-background
          interval="3000"
        >
          <v-carousel-item
            v-for="(imagen, i) in imagenes"
            :key="i"
          >
            <v-img 
              :src="`${imagen}`"
              alt="carousel de actividades"
              class="carousel"
              contain
            ></v-img>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const imagenes = [
  "/src/assets/actividades/acondicionamiento.jpg",
  "/src/assets/actividades/box.jpg",
  "/src/assets/actividades/cardio.jpeg",
  "/src/assets/actividades/crossfit.jpg",
  "/src/assets/actividades/pesas.jpg",
  "/src/assets/actividades/pesas.png"
]
</script>

<style>
.v-carousel{
  opacity:0.7
}
.carousel{
  height: 100%;

}
</style>