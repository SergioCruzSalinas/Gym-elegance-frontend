<template>
  <v-col cols="12" sm="6" md="4" lg="3" class="d-flex">
    <v-card hover color="black" max-width="400px" style="height: 400px;" class="mr-4 membership-card">
      <v-card-item class="pa-4">
        <v-row>
          <v-col cols="12" class="text-center">
            <div class="card-admin">
              <v-icon color="#4FC3F7" class="mr-2">mdi-account-badge</v-icon>
              <h1>Id del Administrador</h1>
            </div>
            <div class="card-admin">
              <v-icon color="#4FC3F7" class="mr-2">mdi-account</v-icon>
              <h2>Nombre del Administrador</h2>
            </div>
            <div class="card-admin">
              <v-icon color="#4FC3F7" class="mr-2">mdi-email</v-icon>
              <p>Correo Electrónico</p>
            </div>
            <div class="card-admin">
              <v-icon color="#4FC3F7" class="mr-2">mdi-phone</v-icon>
              <p>Número de Teléfono</p>
            </div>
            <div class="card-admin">
              <v-icon color="#4FC3F7" class="mr-2">mdi-check-circle</v-icon>
              <p class="price">Estatus</p>
            </div>
          </v-col>
        </v-row>
      </v-card-item>

      <v-card-actions class="justify-center">
        <v-btn color="#0764BB" variant="elevated" class="action-button">
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.membership-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-admin {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
}

.card-admin h1 {
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    color: #FFFFFF;
}

.card-admin h2 {
    font-size: 20px;
    text-align: center;
    color: #FFFFFF;
}

.card-admin p {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #FFFFFF;
}

.price {
    font-size: 20px;
    color: #0e0afa;
    font-weight: bold;
}

.action-button {
    font-weight: bold;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
}

.action-button:hover {
    background-color: #94C9F0;
}
</style>
