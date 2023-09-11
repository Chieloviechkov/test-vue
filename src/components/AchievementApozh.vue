<template>
  <div class="achievements">
    <div class="left-title-slider">
      <div>
        <WeatherKyiv class="ml-8 mt-3"></WeatherKyiv>
      </div>

      <div
        v-for="(achievement, index) in achievements"
        :key="index"
        class="slide-title table-dark mini-box-shadow"
        @click="changeSlide(index)"
        @mouseover="changeSlide(index)"
      >
        <h2 class="title-text">{{ achievement.title }}</h2>
      </div>
    </div>
    <div class="slide-content">
      <div
        v-for="(achievement, index) in achievements"
        :key="index"
        class="slide"
        v-show="currentIndex === index"
      >
        <div class="slide" v-show="currentIndex === index">
          <div class="slide-overlay">
            <h2 class="title-in-slider">{{ achievement.title }}</h2>
            <p class="dark-fiolet-color">{{ achievement.description }}</p>
            <div class="slider-buttons" v-if="index > 0">
              <button
                @click="prevPhoto(achievement)"
                class="prev-button"
              >
                <img
                  src="@/assets/left-button.png"
                  class="slider-button"
                />
              </button>
              <button
                @click="nextPhoto(achievement)"
                class="next-button"
              >
                <img
                  src="@/assets/right-button.png"
                  class="slider-button"
                />
              </button>
            </div>
          </div>
          <div class="img-container">
            <img
              :src="achievement.photos[achievement.currentPhotoIndex]"
              alt="Достижение"
              class="img-achievements box-shadow"
            />
          </div>
        </div>
      </div>
    </div>
    <MainTable class="main-table box-shadow br-1 ml-5"></MainTable>
  </div>
</template>
  
  <script>
  import  WeatherKyiv  from "@/components/WeatherKyiv.vue";
  import  MainTable  from "@/components/ToMainTable.vue";

  export default {
    components: {
        WeatherKyiv,
        MainTable,
      },
    data() {
      return {
        achievements: [
          {
            title: "🥈 YAL CLOSED CUP 2022",
            description: "Описание второго достижения.",
            photos: [require("@/assets/img-66052.png")], 
            currentPhotoIndex: 0
          },
          {
            title: "🥈 KSL SUPER LEAGUE 7×7 2022",
            description: "Описание второго достижения.",
            photos: [require("@/assets/img-22663.png"),require("@/assets/img-2267.png"),require("@/assets/img-2272.png"),require("@/assets/img-2261.png"),require("@/assets/SWL.jpg"),], 
            currentPhotoIndex: 0
          },
          {
            title: "🥉 KSL SUMMER PLATINUM LEAGUE 2023",
            description: "В непростому турнірі наш клуб виборов третє місце",
            photos: [require("@/assets/IMG_65942.png"),require("@/assets/IMG_6604.png"),require("@/assets/IMG_6603.png"),require("@/assets/IMG_5831.png"),require("@/assets/IMG_5823.png")], 
            currentPhotoIndex: 0
          },
        ],
        currentIndex: -0, 
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
.ml-8{
margin-left: 8rem;
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
}
.achievements .slide-title:hover {
    width: 96%;
}
.achievements .slide-title{
  margin-left: 0rem;
  width: 95%;
}
.achievements .slide-overlay{
    bottom: -80%;
    height: 7rem;
    width: 96.5%;
    left: 1.26rem;
}
.achievements .slider-button{
    width: 3rem;
}
.achievements .img-achievements{
  width: 27rem;
  margin-bottom: 5rem;
  margin-left: 0.5rem;
}
.achievements .next-button{
    right: -1rem;
    bottom: 15rem;
}
.achievements .prev-button{
    left: -1rem;
    bottom: 15rem;
}

}
</style>
  

