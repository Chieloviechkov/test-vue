<template>
  <div class="achievements">
    <div class="left-title-slider">
      <div>
        <WeatherKyiv class="ml-8 mt-3"></WeatherKyiv>
      </div>
      <div v-for="(achievement, index) in achievements" :key="index" class="slide-title table-dark mini-box-shadow" @click="changeSlide(index)" @mouseover="changeSlide(index)">
        <h2 class="title-text">{{ achievement.news }}</h2>
      </div>
    </div>
    <div class="slide-content">
      <div v-for="(achievement, index) in achievements" :key="index" class="slide" v-show="currentIndex === index">
        <div class="slide" v-show="currentIndex === index">
          <div class="slide-overlay-news-two">
            <h2 class="title-in-slider">{{ achievement.news }}</h2>
            <p class="dark-fiolet-color">{{ achievement.miniNews }}</p>
          </div>
          <img :src="achievement.photoUrl" alt="Достижение" class="img-news box-shadow"> 
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  import WeatherKyiv from "@/components/WeatherKyiv.vue";
  import { news } from '@/components/config';

  export default {
    components: {
    WeatherKyiv,
  },
    data() {
      return {
        achievements: [],
        currentIndex: 0, 
      };
    },
    created() {
    fetch(news)
      .then(response => response.json())
      .then(data => {
        this.achievements = data;
      })
      .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
      });
  },
    methods: {
      changeSlide(index) {
        this.currentIndex = index; 
      },
    
    prevPhoto(achievement) {
    
    achievement.currentPhotoIndex = (achievement.currentPhotoIndex - 1 + achievement.photos.length) % achievement.photos.length;
  },

  nextPhoto(achievement) {
   
    achievement.currentPhotoIndex = (achievement.currentPhotoIndex + 1) % achievement.photos.length;
  },
},
  };
  </script>
  <style scoped>
 .ml-8 {
  margin-left: 8rem;
  }
  .img-news{
    height: 33rem;
  }
  .slide-overlay-news-two{
    margin-bottom: -1rem;
  }
  @media (max-width: 767px) {
  .main-table{
    display: none;
  }
  .ml-8{
    margin-left: 0;
  }
  .achievements{
    flex-direction: column;
    margin: 0;
    margin-bottom: 1rem;
  }
.achievements .slide-title:hover {
    width: 96%;
}
.achievements .slide-title{
  margin-left: 0rem;
  width: 95%;
}
.achievements .slide-overlay-news-two{
    bottom: 0.9rem;
    height: 7rem;
    width: 100%;
    left: 0.38rem;
}
.img-news{
  width: 28rem;
  height: 20rem;
  margin-left: 0.75rem;
  margin-bottom: 2rem;
}
  }
</style>
