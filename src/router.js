import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomeApozh.vue';
import StatisticApozh from './views/StatisticApozh.vue'; 
import NewsApozh from './views/NewsApozh.vue'; 
import PhotoApozh from './views/PhotoApozh.vue';
import PlayersApozh from './views/PlayersApozh.vue';
import AchievementApozh from './views/AchievementApozh.vue';
import PlayerStatistics from '@/components/PlayerStatistics.vue';

const routes = [
  {
    path: '/statistics',
    name: 'Statistic',
    component: StatisticApozh 
  },
  {
    path: '/news',
    name: 'News',
    component: NewsApozh 
  },
  {
    path: '/photo',
    name: 'Photo',
    component: PhotoApozh 
  },
  {
    path: '/players',
    name: 'Players',
    component: PlayersApozh
  },
  {
    path: '/achievements',
    name: 'Achievement',
    component: AchievementApozh
  },
  {
    path: '/player/:lastName/:firstName',
    name: 'PlayerStatistics',
    component: PlayerStatistics,
    props: true
  },
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/',
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
