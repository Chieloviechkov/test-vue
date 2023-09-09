import 'jquery'; // Импортируйте jQuery, если он требуется
import 'popper.js'; // Импортируйте Popper.js, если он требуется
import 'bootstrap'; // Импортируйте Bootstrap JS, если он требуется
import { createApp } from 'vue'; // Импорт функции createApp
import App from './App.vue';
import router from './router'; // Импорт вашего файла роутера


const app = createApp(App);
app.use(router); // Использование роутера
app.mount('#app');
