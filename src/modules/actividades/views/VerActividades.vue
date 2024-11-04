<template>
    <v-row justify="center" class="mt-8" align="stretch">
        <v-col cols="6" md="8" offset-md="2">
        <v-text-field
          class="center"
          v-model="search"
          label="Actividad que desea buscar"
          append-icon="mdi-magnify"
          solo
          clearable
        ></v-text-field>
        </v-col>

      <CardActivity v-for="n in 10"></CardActivity>
    </v-row>
</template>

<script setup>
import CardActivity from '../components/CardActivity.vue';

</script>