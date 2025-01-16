<template>
    <v-row class="mt-2 ml-16" justify="center">

    <div v-if="isLoading" class="loading-message d-flex justify-center align-center" style="height: 200px; width: 100%;">
       <v-progress-circular indeterminate color="yellow" size="50" width="5"></v-progress-circular>
       <span class="ml-4">Cargando actividades...</span>
    </div>

    <CardActivity v-else v-for="activity in activitiesCoach" :key="activity.id" :activity="activity"   ></CardActivity>
    
    </v-row> 

</template>

<script setup>
import { useQuery } from '@tanstack/vue-query';
import { activitiesIdCoachAction } from '../actions';
import { useAuthStore } from '@/modules/auth/stores/auth.store';
import CardActivity from './CardActivity.vue';
import { ref, watchEffect } from 'vue';


const authStore = useAuthStore()

const activitiesCoach = ref([])

const { data: activities, isLoading } = useQuery({
    queryKey: ["activitiesCoach"],
    queryFn: () => activitiesIdCoachAction(authStore.user.id)
});

watchEffect(() => {
    if (activities.value) {
        activitiesCoach.value = activities.value.data || [];
    }
});
</script>