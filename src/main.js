import 'jquery'; 
import 'popper.js'; 
import 'bootstrap'; 
import { createApp } from 'vue'; 
import App from './App.vue';
import router from './router'; 
import store from './store'; // Подключение хранилища Vuex


const app = createApp(App);
app.use(store);
app.use(router);
app.mount('#app');
