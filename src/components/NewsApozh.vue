<template>
    <div class="achievements">
      <div class="left-title-slider">
        <div v-for="(achievement, index) in achievements" :key="index" class="slide-title table-dark mini-box-shadow" @click="changeSlide(index)"  @mouseover="changeSlide(index)">
          <h2 class="title-text">{{ achievement.title }}</h2>
        </div>
      </div>
      <div class="slide-content">
        <div v-for="(achievement, index) in achievements" :key="index" class="slide" v-show="currentIndex === index">
            <div class="slide" v-show="currentIndex === index">
  <div class="slide-overlay-news-two">
    <h2 class="title-in-slider">{{ achievement.title }}</h2>
    <p class="dark-fiolet-color">{{ achievement.description }}</p>
    
  </div>
  <img :src="achievement.photos[achievement.currentPhotoIndex]" alt="Достижение" class="img-news box-shadow">
</div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        achievements: [
          {
            title: "🥉 KSL SUMMER PLATINUM LEAGUE 2023",
            description: "В непростому сезоні наш клуб виборов третє місце",
            photos: [require("@/assets/slider2.png")], 
            currentPhotoIndex: 0
          },
          {
            title: "🥉 KSL SUMMER PLATINUM LEAGUE 2023",
            description: "В непростому сезоні наш клуб виборов третє місце",
            photos: [require("@/assets/slider2.png")], 
            currentPhotoIndex: 0
          },
          {
            title: "🥉 KSL SUMMER PLATINUM LEAGUE 2023",
            description: "В непростому сезоні наш клуб виборов третє місце",
            photos: [require("@/assets/slider2.png")], 
            currentPhotoIndex: 0
          },
          {
            title: "🥉 KSL SUMMER PLATINUM LEAGUE 2023",
            description: "В непростому сезоні наш клуб виборов третє місце",
            photos: [require("@/assets/slider2.png")], 
            currentPhotoIndex: 0
          },
          {
            title: "🥉 KSL SUMMER PLATINUM LEAGUE 2023",
            description: "В непростому сезоні наш клуб виборов третє місце",
            photos: [require("@/assets/slider2.png")], 
            currentPhotoIndex: 0
          },
          {
            title: "🥈 KSL SUPER LEAGUE 7×7 2022",
            description: "Описание второго достижения.",
            photos: [require("@/assets/slider4.jpg")], 
            currentPhotoIndex: 0
          },
          {
            title: "🥈 YAL CLOSED CUP 2022",
            description: "Описание второго достижения.",
            photos: [require("@/assets/slider4.jpg")], 
            currentPhotoIndex: 0
          },
          // Пока что заглушка
        ],
        currentIndex: 0, 
      };
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
    bottom: 2rem;
    height: 7rem;
    width: 96.5%;
    left: 0.85rem;
}
.img-news{
  width: 27rem;
  margin-left: 0.75rem;
}
  }
</style>
