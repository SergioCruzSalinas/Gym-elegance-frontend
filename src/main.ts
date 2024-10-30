// main.ts
import { createApp } from 'vue';
import { registerPlugins } from '@/plugins';
import App from './App.vue';

import { createPinia } from 'pinia';

const app = createApp(App);
const pinia = createPinia();

// Asegúrate de que esto se llama solo una vez
registerPlugins(app);  

app.use(pinia);


app.mount('#app');
