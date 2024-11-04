<template>
  <v-container>
    <v-row no-gutters class=" flex mt-md-10">

      <v-col cols="12" md="8" class="mt-md-8">
        <h1 class="text-center text-md-left bienvenida-titulo">Bienvenido a Gym Elegance</h1>
        <div v-if="authStore.isAdmin">
          <h1>Esta sección solo es visible para administradores.</h1>
          </div>
      </v-col>

      <v-col cols="12" md="8" class="mt-4 mt-md-16">
        <p class="gym-description">
          En GYM ELEGANCE, nuestra misión es ayudarte a alcanzar tu mejor versión física y mental. 
          Somos más que un gimnasio; somos un espacio donde cada uno de tus objetivos es tomado en 
          serio y apoyado por un equipo de profesionales altamente capacitados. Aquí encontrarás todo 
          lo que necesitas para un entrenamiento completo y efectivo.
        </p>
      </v-col>

      <v-col cols="12" md="11" class="d-flex justify-end mt-4 mt-md-n16 mr-n16">
          <v-btn type="submit" class="visit-button" large>
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

      <v-col cols="12" md="12" class="d-flex justify-center mt-4 mt-md-16">
          <v-btn class="register-button" width="70%">
            <RouterLink :to="{name:'register'}" class="register-link">REGÍSTRATE AQUÍ</RouterLink>
          </v-btn>
      </v-col>

      <v-col cols="12" md="12" class="mt-4 mt-md-16">
        <h2>Contamos con diferentes basicos y visitas desde:</h2>
      </v-col>

      <v-col cols="12" md="12" class=" d-flex justify-center  mt-4 mt-md-16">
        <v-row justify="center" class="mt-1" align="stretch">
        <CardMembresia v-for="n in 2"></CardMembresia>
      </v-row>
      </v-col>

      <v-col cols="12" md="12" class="d-flex justify-center mt-4 mt-md-16">
          <v-btn class="visit-request-button" width="70%">
            <RouterLink :to="{name:'register'}" class="register-link">PIDE TU VISITA AQUÍ</RouterLink>
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
import CardMembresia from '@/modules/membresias/components/CardMembresia.vue';
import Facebook from '@/assets/svg/redesSociales/Facebook.vue';
import Tiktok from '@/assets/svg/redesSociales/Tiktok.vue';
import Instagram from '@/assets/svg/redesSociales/Instagram.vue';
import { useAuthStore } from '@/modules/auht/stores/auth.store';

const authStore= useAuthStore()

</script>


<style scoped>

.bienvenida-titulo {
    font-size: 48px;
    color: #FFD700;
    text-align: center;
  }
  
  @media (min-width: 960px) {
    .bienvenida-titulo {
      font-size: 80px;
      text-align: left;
    }
  }
  
  .gym-description {
    font-size: 20px;
    color: #FFFFFF;
    line-height: 1.6;
  }

.caracteristicas-gym ul{
  list-style-type: none;
  color: white;
  font-size: 18px;
  padding-left: 0;
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

.visit-button, .register-button, .visit-request-button {
    font-weight: bold;
    color: white;
    background-color: #28272C;
    text-transform: uppercase;
    font-size: 16px;
  }
  
  .visit-button:hover, .register-button:hover, .visit-request-button:hover {
    background-color: #1C1B20;
  }
  
  .register-link {
    color: white;
    font-size: 17px;
    text-decoration: none;
  }
</style>
