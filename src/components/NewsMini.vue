<template>
    <div class="container-two table-dark">
      <div v-for="(news, index) in newsItems" :key="index" :class="news.className">
        <h1 class="news">
          <img v-if="news.imgSrc" :src="news.imgSrc" class="news-img" alt="" />
          {{ news.title }}
          <p>{{ news.description }}</p>
        </h1>
      </div>
      <h1 class="news-bottom text-center">
        <span class="shadow">Ще новини...</span>
      </h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'NewsMini',
    data() {
      return {
        newsItems: [
          {
            title: "Kyiv Summer League 2023",
            description: "Бронзові нагороди за третє місце.",
            className: "cont-news",
            imgSrc: require('@/assets/ksl.png'),
          },
          {
            title: "🏆СВІТЛИЙ РУСЛАН",
            description: "Кращий асистент KSL Silver Coast League 2022/23.",
            className: "cont-news",
          },
          {
            title: "🏆КОВАЛЬЧУК МИХАЙЛО",
            description: "Кращий бомбардир KSL Silver Coast League 2022/23.",
            className: "cont-news",
          },
          {
            title: "⚽ТУРНІРНА ТАБЛИЦЯ ЧЕМПІОНАТУ",
            description: "Прийшов час підбивати підсумки.",
            className: "cont-news",
          },
          {
            title: "⚽СТАТИСТИКА ГРАВЦІВ НАШОЇ КОМАНДИ",
            description: "У турнірі Silver Coast League 8x8.",
            className: "cont-news",
          },
          {
            title: "РОМАН РОМАНКО ПОКИДАЄ КОМАНДУ",
            description: "Доведеться попрощатися з захисником.",
            className: "cont-news",
            imgSrc: require('@/assets/MainLogo.png'),
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  </style>
  