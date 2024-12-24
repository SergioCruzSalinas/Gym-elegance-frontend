<template>
  <v-col cols="12" sm="6" md="4" lg="3" class="d-flex">
    <v-card hover color="#0764BB" max-width="400px" style="height: 400px;" class="mr-4 membership-card">
      <v-card-item class="pa-4">
        <v-row>
          <v-col cols="12" class="text-center">
           
            <div class="card-membresia">
              <v-icon color="#4FC3F7" class="mr-2">mdi-membership</v-icon>
              <h1>{{ membership.tipo }}</h1>
            </div>
            <v-divider></v-divider>

            <div class="card-membresia">
              <v-icon color="#4FC3F7" class="mr-2">mdi-information</v-icon>
              <h2>{{ membership.descripcion }}</h2>
            </div>
            <v-divider></v-divider>

            <div class="card-membresia">
              <v-icon color="#4FC3F7" class="mr-2">mdi-timer</v-icon>
              <p><strong>Duración:</strong> {{ membership.mes_duracion }} meses</p>
              <p><strong>Duración:</strong> {{ membership.dias_duracion }} dia</p>
            </div>
            <v-divider></v-divider>

            <div class="card-membresia">
              <v-icon color="#4FC3F7" class="mr-2">mdi-calendar-check</v-icon>
              <p><strong>Días de Acceso:</strong> Lunes a Domingos</p>
            </div>
            <v-divider></v-divider>

            <div class="card-membresia">
              <v-icon color="#4FC3F7" class="mr-2">mdi-currency-usd</v-icon>
              <p class="price">Precio: ${{ membership.precio }} MXN</p>
            </div>
          </v-col>
        </v-row>
      </v-card-item>

      <v-card-actions v-if="authStore.isAdmin"    class="justify-center">
        <router-link :to="`/admin/membresias/lista-membresias/${membership.id}`" style="text-decoration: none">
          <v-btn color="#ACDBF3" variant="elevated" class="action-button">
            Editar
          </v-btn>
        </router-link>

        <v-btn color="#B0B0B0" variant="elevated" class="action-button">
          Cambiar Estatus
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/modules/auth/stores/auth.store';
import { Membership } from '../interfaces/membership.interface';

const authStore = useAuthStore();

interface Props{
  membership: Membership;
}

defineProps<Props>();
</script>

<style>
.membership-card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.membership-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-membresia {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
}

.card-membresia h1 {
    font-size: 25px;
    text-align: center;
    font-weight: bold;
    color: #FFFFFF;
    margin-left: 8px; 
}

.card-membresia h2 {
    font-size: 20px;
    text-align: center;
    color: #D3E3FC;
    margin-left: 8px;
}

.card-membresia p {
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    color: #FFFFFF;
    margin-left: 8px;
}

.price {
    font-size: 20px;
    color: #4FC3F7;
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
