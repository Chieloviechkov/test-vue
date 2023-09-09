import { createRouter, createWebHistory } from 'vue-router'; // Импорт функций
import HomePage from './views/HomeApozh.vue';
import StatisticApozh from './views/StatisticApozh.vue'; // Импортируйте компоненt
import NewsApozh from './views/NewsApozh.vue'; // Импортируйте компоненt
import PhotoApozh from './views/PhotoApozh.vue';
import PlayersApozh from './views/PlayersApozh.vue';
import AchievementApozh from './views/AchievementApozh.vue';


const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/statistics',
    name: 'Statistic',
    component: StatisticApozh // Используйте импортированный компонент
  },
  
  {
    path: '/news',
    name: 'News',
    component: NewsApozh // Используйте импортированный компонент
  },
  {
    path: '/photo',
    name: 'Photo',
    component: PhotoApozh // Используйте импортированный компонент
  },
  {
    path: '/players',
    name: 'Players',
    component: PlayersApozh // Используйте импортированный компонент
  },
  {
    path: '/achievements',
    name: 'Achievement',
    component: AchievementApozh // Используйте импортированный компонент
  },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
