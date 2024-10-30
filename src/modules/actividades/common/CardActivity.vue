<template>
    <v-col cols="12" sm="6" md="4" lg="3" class="d-flex">
      <v-card hover color="white" max-width="400px" style="height: 280px;" class="mr-4">
        <v-card-item>
          <v-row>
            <!-- Columna de la imagen -->
            <v-col cols="4" class="d-flex align-center justify-center mt-8">
              <img src="/src/assets/img/iconActivity.png" width="100px" height="100%" alt="imagen del plan">
            </v-col>
  
            <!-- Columna del contenido -->
            <v-col cols="8">
              <div class="card-activity">
                <h1>Descripcion de la actividad</h1>
              </div>
              <div class="card-activity">
                <h2>Fecha:</h2>
              </div>
              <div class="card-activity">
                <p>Hora de inicio:</p>
              </div>
              <div class="card-activity">
                <p>Limite de personas:</p>
              </div>
            </v-col>
          </v-row>
        </v-card-item>

        <v-card-actions>
        <v-btn
        color="#1F3A93" 
        variant="elevated"
        class="ml-12"
        >
          Editar
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn 
         color="#B0B0B0" 
         variant="elevated"
         class="mr-12"
        >
          Cambiar estatus
        </v-btn>

      </v-card-actions>
      </v-card>
    </v-col>
</template>

<style>
.card-activity{
    margin-bottom:15px;
}

.card-activity h1 {
    font-size: 25px;
    text-align: center;
    font-weight: bold;
}

.card-activity h2{
    font-size:20px;
    text-align: center;
}

.card-activity p{
    font-size: 12px;
    font-weight: bold;
    text-align: center;
}

</style>
  