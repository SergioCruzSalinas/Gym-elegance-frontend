<template>
  <v-app>
    <div class="fondo"> 
      <TopMenu></TopMenu>

      <v-main class="contenido">

      <routerView></routerView>
      
      </v-main>
    </div>
        
  </v-app>
</template>

<script setup>
import TopMenu from '../common/TopMenu.vue';

</script>


<style>
 body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
}
.fondo {
  background-image: url('/src/assets/img/gymFondo.jpg');
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  width: 100%;
  height: 100vh;
}

.fondo::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8); /* Fondo con opacidad del 50% */
  z-index: 1; /* Coloca la capa con opacidad detrás del contenido */
}

.contenido{
  position: relative;
  z-index: 2;
  margin-top: 15px;

}

</style>