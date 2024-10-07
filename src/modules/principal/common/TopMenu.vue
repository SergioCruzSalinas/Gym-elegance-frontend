<template>
    <v-app-bar color="black" class="menu-container">
      <v-btn><RouterLink class="text-menu" :to="{ name: 'inicio' }">Inicio</RouterLink></v-btn>
      <v-btn><RouterLink class="text-menu" :to="{ name: 'planes' }">planes</RouterLink></v-btn>
      <v-btn><RouterLink class="text-menu" :to="{ name: 'actividades' }">actividades</RouterLink></v-btn>
      <v-btn><RouterLink class="text-menu" :to="{ name: 'sucursales' }">sucursal</RouterLink></v-btn>
  
      <v-spacer></v-spacer>
      
  
      <v-btn><RouterLink class="text-menu" :to="{ name: 'register' }">registrate</RouterLink></v-btn>
      <v-btn><RouterLink class="text-menu" :to="{ name: 'login' }">iniciar sesion</RouterLink></v-btn>
    </v-app-bar>
  </template>
  
  <style scoped>
 .menu-container {
margin-top: 25px;

}

.v-app-bar {
  position: relative; /* Cambia a relative para permitir márgenes */
  width: 100px; /* Mantiene el ancho al 100% */
}
  
  
  .text-menu {
    color: white; /* Color del texto */
    text-decoration: none; /* Quita el subrayado */
    font-size: 17px;
  }
  
  .text-menu.router-link-active {
    color: white; /* Color cuando el enlace está activo */
  }
  
  .text-menu:hover {
    font-size: 20px;
  }
  </style>
  