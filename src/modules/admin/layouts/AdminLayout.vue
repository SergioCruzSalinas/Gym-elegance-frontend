<template>
    <div class="fondo"> 
      <TopMenuAdmin class="top-menu"/>


      <v-main class="contenido">
        <RouterView></RouterView>
      </v-main>
    </div>
  </template>

  <script setup>
  import TopMenuAdmin from '../common/TopMenuAdmin.vue';

  </script>
  
  <style>
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }
  
  .fondo {
    position: relative;
    background-image: url('/src/assets/img/gymFondo.jpg');
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
    width: 100%;
    min-height: 100vh; /* Permite que crezca según el contenido */
  }
  
  .fondo::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
  }
  
  .top-menu {
    z-index: 3;
    position: relative;
  }
  
  .contenido {
    position: relative;
    z-index: 2;
    margin-top: 15px;
    padding-bottom: 20px; /* Espacio adicional al final si es necesario */
  }
  </style>
  