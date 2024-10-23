/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'


// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import router from './router'
import { createPinia } from 'pinia'

const app = createApp(App);
const pinia=createPinia();

registerPlugins(app)

app.use(pinia)
app.use(router)

app.mount('#app')
