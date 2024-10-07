<template>
    <v-container>
        <v-row justify="center" class="mt-16" align="stretch">
            
            <CardPlanes v-for="n in 3"></CardPlanes>
            

        </v-row>
    </v-container>
</template>

<script setup>
import CardPlanes from '../components/CardPlanes.vue';
</script>
