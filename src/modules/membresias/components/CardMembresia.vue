<template>
  <v-col cols="12" sm="6" md="4" lg="3" class="d-flex">
    <v-card hover color="#0764BB" max-width="400px" style="height: 400px;" class="mr-4 membership-card">
      <v-card-item class="pa-4">
        <v-row>
          <v-col cols="12" class="text-center">
            <div class="card-activity">
              <h1>Tipo de Membresía</h1>
            </div>
            <div class="card-activity">
              <h2>Descripción breve de la membresía</h2>
            </div>
            <div class="card-activity">
              <p><strong>Duración:</strong> 3 meses</p>
            </div>
            <div class="card-activity">
              <p><strong>Días de Acceso:</strong> Lunes a Viernes</p>
            </div>
            <div class="card-activity">
              <p class="price">Precio: $299 MXN</p>
            </div>
          </v-col>
        </v-row>
      </v-card-item>

      <v-card-actions class="justify-center">
        <v-btn color="#ACDBF3" variant="elevated" class="action-button">
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

.card-activity {
    margin-bottom: 15px;
}

.card-activity h1 {
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    color: #FFFFFF;
}

.card-activity h2 {
    font-size: 20px;
    text-align: center;
    color: #D3E3FC;
}

.card-activity p {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #FFFFFF;
}

.price {
    font-size: 20px;
    color: #FFD700;
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
