<template>
  <v-col cols="12" sm="10" md="6" lg="5" class="d-flex justify-center">
    <v-card class="pa-4 mb-4 membership-card">
      <v-card-item class="pa-4">
        <v-row>
          <v-col cols="12" class="text-center">
            <!-- Tipo de Membresía -->
            <div class="card-membresia">
              <v-icon color="#FFD700" class="mr-2">mdi-membership</v-icon>
              <h1 class="text-h6 font-weight-bold mb-0">{{ membership.tipo }}</h1>
            </div>
            <v-divider></v-divider>

            <div class="card-membresia description-section">
              <v-icon color="#FFD700" class="mr-2">mdi-information</v-icon>
              <p class="description">{{ membership.descripcion }}</p>
            </div>
            <v-divider></v-divider>

            <div class="card-membresia">
              <v-icon color="#FFD700" class="mr-2">mdi-timer</v-icon>
              <template v-if="membership.mes_duracion > 0">
                <p><strong>Duración:</strong> {{ membership.mes_duracion }} mes<span v-if="membership.mes_duracion > 1">es</span></p>
              </template>
              <template v-if="membership.dias_duracion > 0">
                <p><strong>Duración:</strong> {{ membership.dias_duracion }} día<span v-if="membership.dias_duracion > 1">s</span></p>
              </template>
            </div>
            <v-divider></v-divider>

            <div class="card-membresia">
              <v-icon color="#FFD700" class="mr-2">mdi-calendar-check</v-icon>
              <p><strong>Días de Acceso:</strong> Lunes a Domingos</p>
            </div>
            <v-divider></v-divider>

            <div class="card-membresia">
              <v-icon color="#FFD700" class="mr-2">mdi-currency-usd</v-icon>
              <p class="price">Precio: ${{ membership.precio }} MXN</p>
            </div>
          </v-col>
        </v-row>
      </v-card-item>

      <v-card-actions v-if="authStore.isAdmin" class="justify-center">
        <router-link :to="`/admin/membresias/lista-membresias/${membership.id}`" style="text-decoration: none">
          <v-btn color="#FFD700" variant="elevated" class="action-button">
            Editar
          </v-btn>
        </router-link>

        <v-btn color="#FFD700" variant="outlined" class="action-button">
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

interface Props {
  membership: Membership;
}

defineProps<Props>();
</script>

<style>
.membership-card {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 8px;
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
  font-weight: bold;
  color: #FFD700;
  margin-left: 8px;
}

.card-membresia p {
  font-size: 14px;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
}

.price {
  font-size: 20px;
  color: #FFD700;
  font-weight: bold;
  text-align: center;
}

.description-section {
  text-align: center;
  margin: 10px 0;
}

.description {
  font-size: 16px;
  line-height: 1.5;
  color: #FFFFFF;
  white-space: pre-wrap;
}

.action-button {
  font-weight: bold;
  text-transform: uppercase;
  color: #28272C;
  background-color: #FFD700;
  transition: background-color 0.3s ease;
}

.action-button:hover {
  background-color: #FFD700;
  opacity: 0.9;
}
</style>
