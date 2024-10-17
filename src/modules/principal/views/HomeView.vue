<template>
  <v-container>
    <v-row no-gutters class=" flex mt-md-10">

      <v-col cols="12" md="8" class="mt-md-8">
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

      <v-col cols="12" md="11" class="d-flex justify-end mt-4 mt-md-n16 mr-n16">
        <v-btn
          type="submit"
          class="mb-8"
          color="#28272C"
          large>
          ¿Eres nuevo? Pide tu visita. <br>Click aquí
        </v-btn>
      </v-col>

      <v-col cols="12" md="12" class="mt-4 mt-md-16">
        <h2>El gymnasio cuenta con:</h2><br>
        <div class="caracteristicas-gym">
          <ul>
          <li >Equipamiento de Entrenamiento para diferentes tipo de ejercicios(cardio,pesas, hipertrofia, etc.)</li>
          <li>Baños, duchas y vestuarios.</li>
          <li>Zonas de entrenamiento (estiramientos, caalentamientos, areas libre, etc.)</li>
          <li>Iluminacion adecuada, calefaccion, sistema de sonido de calidad.</li>
          <li>Entrenadores profesionales uno a uno para diferentes objetivos, clases grupales.</li>
          <li>Cafeterias, internet gratuito, estacionamiento gratuito</li>
        </ul>
        </div><br><br>
        <h2>Disfruta de nuestras actividades</h2>
      </v-col>

      <v-col cols="12" md="12" class=" d-flex justify-center  mt-4 mt-md-16">
        <section class="galeria">
          <img src="/src/assets/actividades/acondicionamiento.jpg" alt="actividades">
          <img src="/src/assets/actividades/box.jpg" alt="actividades">
          <img src="/src/assets/actividades/cardio.jpeg" alt="actividades">
          <img src="/src/assets/actividades/crossfit.jpg" alt="actividades">
          <img src="/src/assets/actividades/pesas.jpg" alt="actividades">
        </section>
      </v-col>

      <v-col cols="12" md="12" class="d-flex justify-center  mt-4 mt-md-16">
        <v-btn
        type="submit"
          class="mb-8"
          color="blue"
          width="70%">
          <RouterLink :to="{name:'register'}" style="color: white; font-size: 17px; text-decoration: none;">REGISTRATE AQUI</RouterLink>
        </v-btn>
      </v-col>

      <v-col cols="12" md="12" class="mt-4 mt-md-16">
        <h2>Contamos con diferentes basicos y visitas desde:</h2>
      </v-col>

      <v-col cols="12" md="12" class=" d-flex justify-center  mt-4 mt-md-16">
        <v-row justify="center" class="mt-1" align="stretch">
        <CardPlanes v-for="n in 2"></CardPlanes>
      </v-row>
      </v-col>

      <v-col cols="12" md="12" class=" d-flex justify-center  mt-4 mt-md-16">
        <v-btn
        type="submit"
          class="mb-8"
          color="blue"
          width="70%">
          <RouterLink :to="{name:'register'}" style="color: white; font-size: 17px; text-decoration: none;">PIDE TU VISITA AQUI</RouterLink>
        </v-btn>
      </v-col>

      <v-col cols="12" md="12" class=" d-flex justify-center  mt-4 mt-md-16">
       <h2>Siguenos en nuestras redes sociales</h2>
      </v-col>

      <v-col cols="12" md="12" class=" d-flex justify-center  mt-4 mt-md-16">
       <Facebook></Facebook>
       <Tiktok></Tiktok>
       <Instagram></Instagram>
      </v-col>


    </v-row>
  </v-container>
</template>

<script setup>
import CardPlanes from '../components/CardPlanes.vue';
import Facebook from '@/assets/svg/redesSociales/Facebook.vue';
import Tiktok from '@/assets/svg/redesSociales/Tiktok.vue';
import Instagram from '@/assets/svg/redesSociales/Instagram.vue';
</script>

<style scoped>
h1 {
  font-size: 48px; 
}


@media (min-width: 960px) {
  h1 {
    font-size: 80px;
  }
}
h2{
  font-size: 30px;
  font-weight: bold;
}

.caracteristicas-gym ul{
  list-style-type: none;
  color: white;
  text-decoration: none;
  font-size: 19px;
}
.galeria{
  display: flex;
  width: 100%;
  height: 500px;

}

.galeria img{
  width: 0px;
  flex-grow: 1;
  object-fit: cover;
  opacity: 0.8;
  transition: .5s ease;
}

.galeria img:hover{
  cursor: crosshair;
  width: 40%;
  opacity: 1;
  filter: contrast(120%);
}
</style>
