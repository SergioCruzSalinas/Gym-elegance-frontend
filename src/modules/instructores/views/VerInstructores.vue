<template>
    <v-row justify="center" class="mt-8" align="stretch">
        <v-col cols="6" md="8" offset-md="2">
        <v-text-field
          class="center"
          v-model="search"
          label="Nombre del instructor"
          append-icon="mdi-magnify"
          solo
          clearable
        ></v-text-field>
        </v-col>

      <CardCoach v-for="n in 10"></CardCoach>
    </v-row>
</template>

<script setup>
import CardCoach from '../components/CardCoach.vue';

</script>