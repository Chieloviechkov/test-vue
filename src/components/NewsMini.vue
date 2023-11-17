<template>
  <div class="container-two table-dark">
    <div v-for="(news, index) in newsItems" :key="index" :class="news.className">
      <router-link to="/news" style="text-decoration: none; color: inherit;">
        <h1 class="news cont-news">
          {{ news.title }}
          <p class="text-wrap">{{ news.description }}</p>
        </h1>
      </router-link>
    </div>
    <router-link to="/news" style="text-decoration: none; color: inherit;">
      <h1 class="news-bottom text-center">
        <span class="shadow">Ще новини...</span>
      </h1>
    </router-link>
  </div>
</template>


<script>
  import { news } from '@/components/config';

export default {
  name: 'NewsMini',
  data() {
    return {
      newsItems: [], 
    };
  },
  created() {
    fetch(news)
      .then(response => response.json())
      .then(data => {
      
        this.newsItems = data.map(item => ({
          title: item.news,
          description: item.miniNews, 
        }));
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
      });
  },
};
</script>

  
  <style scoped>
  .news{
    width: 20rem;
    padding: 1rem;
  }
  .text-wrap {
    white-space: normal;
    word-wrap: break-word;
    width: 18rem;
  }
  </style>
  