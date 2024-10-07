<template>
    <v-container justify="center" class="mt-5">
        <v-col cols="12" sm="6" md="4" lg="3">
            <h1>Actividades</h1>
            <ul>
                <li v-for="(actividad, index) in actividades" :key="index">{{ actividad }}</li>
            </ul>
        </v-col>
    </v-container>
    <CarouselActivitys></CarouselActivitys>
</template>


<script setup>
import CarouselActivitys from '../components/CarouselActivitys.vue';
    const actividades=[
        "Gym",
        "Defensa personal",
        "Crossfit",
        "Calistenia",
        "Zumba",
        "Pilates",
    ];
</script>

<style>
li{
    font-size: 25px;
    list-style-type: none;
}
</style>