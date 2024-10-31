<template>
    <v-col cols="12" sm="6" md="4" lg="3" class="d-flex">
      <v-card hover color="white" max-width="400px" style="height: 280px;" class="mr-4">
        <v-card-item>
          <v-row>
            <v-col cols="12">
              <div class="card-activity">
                <h1>id instructor</h1>
              </div>
              <div class="card-activity">
                <h2>Nombre:</h2>
              </div>
              <div class="card-activity">
                <p>estatus:</p>
              </div>
              <div class="card-activity">
                <p>telefono:</p>
              </div>
              <div class="card-activity">
                <p>correo electronicio:</p>
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
    font-weight: bold;
}

.card-activity h2{
    font-size:20px;
}

.card-activity p{
    font-size: 12px;
}

</style>
  