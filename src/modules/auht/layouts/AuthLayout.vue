<template>
    <div class="fondo d-flex align-start">
      <v-container>
        <v-row>
          <v-col cols="12" md="6" class="d-flex justify-start" style="margin-left: 25px;">
            <div class="ImagenLogo">
              <h1>GYM ELEGANCE</h1>
            </div>
          </v-col>
  
          <v-col cols="12" md="6" class="d-flex justify-start" style="margin-left: 150px; margin-top: 100px; font-size: 35px; font-weight: bold;"> 
            
              <p>"Tu constancia,<br> nuestro compromiso"</p>
           
          </v-col>
        </v-row>
      </v-container>
      
  
      <div class="router-view-wrapper">
        <RouterView></RouterView>
      </div>
    </div>
  </template>
  
  <style scoped>
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
  
  h1, p {
    position: relative; /* Para asegurar que el texto esté por encima del fondo */
    z-index: 2; /* Asegúrate de que el texto esté por encima del fondo */
    color: white; /* Color del texto */
  }
  
  h1 {
    font-weight: bold;
    font-size: 40px;
  }
  
  p {
    text-align: left;
  }

  .router-view-wrapper {
  position: relative;
  z-index: 2; /* Asegura que el RouterView esté por encima del fondo */
  width: 100%;
  height: 100%;
}
  </style>
  