<template>
    <v-container fluid class="login-container">
      <v-row>
        <v-col cols="12" md="12" class="d-flex justify-center md:justify-center">
            <h1>Agregar nueva actividad</h1>

        </v-col>
        <v-col cols="12" md="12" class="d-flex justify-center md:justify-center">
          <v-card
            class="pa-6 pa-md-12 pb-8 mr-md-32"
            style="background-color: black; opacity: 0.8; margin-top: 60px;"
            elevation="8"
            rounded="lg"
            width="500"
            max-width="800px"
          >
            <div v-if="mensaje" class="mensaje text-center"> {{ mensaje }}</div> <br>
  
            <form @submit.prevent="handleLogin">
                <div class="texto">Nombre o descripcion de la actividad</div>
              <v-text-field
                v-model="name"
                density="compact"
                placeholder="Nombre o descripcion de la pagina "
                variant="outlined"
                class="custom-text-field"
                base-color="black"
                bg-color="white"
              ></v-text-field>

              <div class="texto">Instuctor</div>
              <v-text-field
                v-model="email"
                density="compact"
                placeholder="Instructor encargado"
                variant="outlined"
                class="custom-text-field"
                base-color="black"
                bg-color="white"
              ></v-text-field>
              
              <div class="texto">Limite de personas</div>
              <v-text-field
               v-model="limitePersonas"
               type="number"
               density="compact"
               variant="outlined"
               class="custom-text-field"
               base-color="black"
               bg-color="white"
               ></v-text-field>

               <div class="texto">Fecha de la actividad</div>
               <v-text-field
                v-model="fecha"
                type="date"
                density="compact"
                variant="outlined"
                clearable
                base-color="black"
                bg-color="white"
               ></v-text-field>
  
              <v-btn
                type="submit"
                class="mb-8"
                color="black"
                size="large"
                variant="tonal"
                block
              >
                <div class="texto">Crear actividad</div>
              </v-btn>
  
              <div class="links">
                <router-link class="texto" :to="{ name: 'login' }">¿Ya eres usuario?</router-link>
              </div>
            </form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  
  <style scoped>
  .mensaje {
    color: red;
  }
  .links {
    text-align: center;
  }
  .texto {
    color: white;
    font-size: 20px; 
  }
  </style>
  