<template>
  <v-card title="Inscripciones" flat>
    <v-card-text>
      <v-text-field
        v-model="search"
        label="Buscar"
        prepend-inner-icon="mdi-magnify"
        variant="outlined"
        hide-details
        single-line
      ></v-text-field>
    </v-card-text>

    <div v-if="isLoading">
      <h1>Cargando información...</h1>
    </div> 

    <v-data-table
      v-else
      :headers="headers"
      :items="subscriptionsData"
    >
      <template v-slot:item.id="{ item }">
        <RouterLink class="link" :to="`/admin/inscripciones/lista/${item.id}`">{{ item.id }}</RouterLink>
      </template>
    </v-data-table>
  </v-card>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useQuery } from '@tanstack/vue-query';
import { getSubscriptionsAction } from '../actions';

const search = ref('');

const headers = ref([
  { key: 'id', title: 'ID' },
  { key: 'id_usuario', title: 'Usuario' },
  { key: 'id_membresia', title: 'Membresía' },
  { key: 'fecha_inicio', title: 'Fecha Inicio' },
  { key: 'fecha_expiracion', title: 'Fecha Expiración' },
  { key: 'estatus', title: 'Estatus' },
]);

const { data: subscriptions, isLoading, error } = useQuery({
  queryKey: ['subscriptions'],
  queryFn: getSubscriptionsAction,
});

const subscriptionsData = computed(() => subscriptions.value ? subscriptions.value.data : []);

if (error.value) {
  console.error("Error fetching subscriptions:", error.value);
}

</script>

<style>
.link {
  color: #FFD700;
  text-decoration: underline;
  cursor: pointer;
  font-weight: bold;
  text-decoration: none;
}

.link:hover {
  color: rgb(190, 176, 96);
}
</style>
