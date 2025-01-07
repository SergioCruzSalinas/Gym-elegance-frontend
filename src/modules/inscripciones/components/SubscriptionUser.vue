<template>

    <div v-if="isLoading">
              <h1>cargando informacion de la Inscripcion</h1>
            </div>
    
      <v-col v-if="subscription"  cols="12" sm="6" class="d-flex justify-center">
        <v-card class="pa-4 mb-4 mr-md-10">
          <v-card-title class="d-flex align-center">
            <v-icon color="#1F3A93" class="mr-2">mdi-account-card-details</v-icon>
            <h2 class="text-h6 font-weight-bold mb-0">Mi Membresía</h2>
          </v-card-title>
    
          <v-divider></v-divider>
    
          <v-card-text>
            <v-row>
              <v-col cols="12" class="info-item">
                <v-icon class="mr-2">mdi-card-membership</v-icon>
                <span><strong>Nombre de la Membresía:</strong> {{ subscription.id_membresia }}</span>
              </v-col>
              <v-col cols="12" class="info-item">
                <v-icon class="mr-2">mdi-calendar-start</v-icon>
                <span><strong>Fecha de Inicio:</strong> {{ subscription.fecha_inicio }} </span>
              </v-col>
              <v-col cols="12" class="info-item">
                <v-icon class="mr-2">mdi-calendar-end</v-icon>
                <span><strong>Fecha de Expiración:</strong> {{ subscription.fecha_expiracion}} </span>
              </v-col>
              <v-col cols="12" class="info-item">
                <v-icon class="mr-2">mdi-text-box-outline</v-icon>
                <span><strong>Descripción de la Membresía:</strong>{{ }} </span>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </template>
    
<script lang="ts" setup>
  import { ref, watchEffect } from 'vue';
  import { Subscribe } from '../interfaces/subscribe.interface';
  import { useQuery } from '@tanstack/vue-query';
  import { getSubscriptionByIdAction } from '../actions';
  import { useAuthStore } from '@/modules/auth/stores/auth.store';
    
    
    
    
  const subscription = ref<Subscribe|undefined>();

  const authStore = useAuthStore();
    
  
    
    
    const {data: subscriptionData, isLoading} = useQuery({
      queryKey: ['SubscriptionUser'],
      queryFn: () => getSubscriptionByIdAction(authStore.user?.id)
    });

    watchEffect(() => {
      if ( !subscriptionData.value || !subscriptionData.value.data) return;

       subscription.value = subscriptionData.value?.data;
       
    });

    console.log("informacion",subscription)
    console.log(subscriptionData)


</script>