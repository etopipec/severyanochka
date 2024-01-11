import 'vue3-carousel/dist/carousel.css'
import '@/app/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from '@/app/App.vue';
import router from '@/app/router';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
