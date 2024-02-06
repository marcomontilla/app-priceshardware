import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // make sure this path points to your router file

createApp(App).use(router).mount('#app');