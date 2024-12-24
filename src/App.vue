
<template>
  <v-app>

    <div v-if="authStore.isChecking">
      <h1>En Espera...</h1>
    </div>


    <RouterView v-else></RouterView>
    <VueQueryDevtools/>
  </v-app>
</template>

<script lang="ts" setup>
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { useAuthStore } from './modules/auth/stores/auth.store';
import { AuthStatus } from './modules/auth/interfaces';
import { useRoute, useRouter } from 'vue-router';

const authStore = useAuthStore();

const router = useRouter();
const route = useRoute();

authStore.$subscribe((_, state) => {
  if( state.authStatus === AuthStatus.Checking){
    authStore.checkAuthStaus();
    return;
  }

  if( route.path.includes('/auth') && state.authStatus === AuthStatus.Unauthenticated ) {
    router.replace({ name: 'perfil'});
    return

  }
},
{
  immediate: true,

},
)

</script>