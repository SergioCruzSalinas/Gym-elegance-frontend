<template>
    <v-row justify="center" class="mt-8" align="stretch">
        <v-col cols="12" md="12" offset-md="2">
        <h1>Administradores</h1>
        </v-col>

      <CardAdmin v-for="n in 2"></CardAdmin>
    </v-row>
</template>

<script setup>
import CardAdmin from '../components/CardAdmin.vue';

</script>