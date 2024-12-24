// main.ts
import { createApp } from 'vue';
import { registerPlugins } from '@/plugins';
import App from './App.vue';
import router from './router';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { createPinia } from 'pinia';
import './config/yup';

const app = createApp(App);
const pinia = createPinia();

// Asegúrate de que esto se llama solo una vez
registerPlugins(app);  
  
app.use(pinia);
app.use(router);
app.use( VueQueryPlugin);

app.mount('#app');
