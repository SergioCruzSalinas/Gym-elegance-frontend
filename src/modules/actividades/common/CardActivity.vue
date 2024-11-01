<template>
  <v-col cols="12" sm="6" md="4" lg="3" class="d-flex">
    <v-card hover color="#333333" max-width="400px" style="height: 280px;" class="mr-16 membership-card">
      <v-card-item>
        <v-row>
          <!-- Columna de la imagen -->
          <v-col cols="4" class="d-flex align-center justify-center mt-16">
            <img src="/src/assets/img/iconActivity.png" width="80px" height="80px" alt="imagen del plan">
          </v-col>

          <!-- Columna del contenido -->
          <v-col cols="8">
            <div class="card-activity">
              <h1>Descripción de la Actividad</h1>
            </div>
            <div class="card-activity">
              <h2>Fecha:</h2>
              <p>DD/MM/AAAA</p>
            </div>
            <div class="card-activity">
              <h2>Hora de Inicio:</h2>
              <p>00:00 AM/PM</p>
            </div>
            <div class="card-activity">
              <h2>Límite de Personas:</h2>
              <p>XX personas</p>
            </div>
          </v-col>
        </v-row>
      </v-card-item>

      <v-card-actions class="justify-center">
        <v-btn color="#1F3A93" variant="elevated" class="action-button">
          Editar
        </v-btn>
        <v-btn color="#B0B0B0" variant="elevated" class="action-button">
          Cambiar Estatus
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<style>
.membership-card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.membership-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.card-activity {
    margin-bottom: 12px;
    color: #FFFFFF;
}

.card-activity h1 {
    font-size: 20px;
    text-align: left;
    font-weight: bold;
    color: #FFD700;
}

.card-activity h2 {
    font-size: 16px;
    text-align: left;
    color: #E0E0E0;
    margin-bottom: 4px;
}

.card-activity p {
    font-size: 14px;
    font-weight: normal;
    text-align: left;
    color: #FFFFFF;
    margin: 0;
}

.action-button {
    font-weight: bold;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    color: #FFFFFF;
}

.action-button:hover {
    background-color: #3A539B;
}
</style>
