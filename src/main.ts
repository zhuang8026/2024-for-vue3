import { createApp } from 'vue';
import { router } from './router';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import ElementPlus from 'element-plus';
import { createPinia } from 'pinia';

import './style.css';

const app = createApp(App);
app.use(ElementPlus);
app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
