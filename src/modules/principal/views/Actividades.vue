<template>
    <v-container justify="center" class="mt-16">
        <div class="actividades">
            <v-col cols="12" sm="6" md="4" lg="3">
            <h1>Actividades</h1>
            <ul>
                <li v-for="(actividad, index) in actividades" :key="index">{{ actividad }}</li>
            </ul>
        </v-col>
        </div>
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
h1{
    font-size:60px;
}

.actividades{
    z-index: -3;
}
li{
    font-size: 25px;
    list-style-type: none;
    font-weight: bold;
}
</style>