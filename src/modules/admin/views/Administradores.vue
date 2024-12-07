<template>
  <h1 class="text-center">Planes y precios en Gym Elegance</h1>
    <v-row justify="center" class="mt-8 ml-16" align="stretch">
      <CardAdmin v-for="n in 2"></CardAdmin>
    </v-row>
</template>

<script setup>
import CardAdmin from '../components/CardAdmin.vue';

</script>