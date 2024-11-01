<template>
    <h1>Membresias</h1>
    <v-row justify="center" class="mt-8" align="stretch">

      <CardMembresia v-for="n in 3"></CardMembresia>
    </v-row>

</template>

<script setup>
import CardMembresia from '../components/CardMembresia.vue';
</script>