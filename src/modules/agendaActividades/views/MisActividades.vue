<template>
    <h1 class="text-center">Mis actividades</h1>
    <v-row justify="center" class="mt-8" align="stretch">

      <CardMyActivityUser v-for="n in 3"></CardMyActivityUser>
    </v-row>
</template>

<script setup>
import CardMyActivityUser from '../components/CardMyActivityUser.vue';

</script>

<style scoped>
h1{
    font-weight: bold;
    font-size:45px;
    font-family: 'Times New Roman', Times, serif
}

</style>