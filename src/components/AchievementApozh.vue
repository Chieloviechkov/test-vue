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
        <h2 class="title-text">{{ achievement.achievements }}</h2>
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
            <h2 class="title-in-slider">{{ achievement.achievements }}</h2>
            <p class="dark-fiolet-color">{{ achievement.miniAchievements }}</p>
            <div class="slider-buttons" v-if="achievement.photos.length > 1">
              <button @click="prevPhoto(achievement)" class="prev-button">
                <img src="@/assets/left-button.png" class="slider-button" />
              </button>
              <button @click="nextPhoto(achievement)" class="next-button">
                <img src="@/assets/right-button.png" class="slider-button" />
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
    <PlatinumLeague class="main-table box-shadow br-1 ml-5"></PlatinumLeague>
  </div>
</template>

<script>
import WeatherKyiv from "@/components/WeatherKyiv.vue";
import PlatinumLeague from "@/components/PlatinumLeague.vue";

export default {
  components: {
    WeatherKyiv,
    PlatinumLeague,
  },
  data() {
    return {
      achievements: [],
      currentIndex: 0,
    };
  },
  created() {
    fetch('http://localhost:8889/achievements')
      .then(response => response.json())
      .then(data => {
        this.achievements = data.map(achievement => {
          return {
            ...achievement,
            photos: achievement.photoUrls,
            currentPhotoIndex: 0,
          };
        });
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

@media (max-width: 767px) {
  .main-table {
    display: none;
  }
  .ml-8 {
    margin-left: 0;
  }
  .achievements {
    flex-direction: column;
    margin: 0;
  }
  .achievements .slide-title:hover {
    width: 96%;
  }
  .achievements .slide-title {
    margin-left: 0rem;
    width: 95%;
  }
  .achievements .slide-overlay {
    bottom: -80%;
    height: 7rem;
    width: 96.5%;
    left: 0.75rem;
  }
  .achievements .slider-button {
    width: 3rem;
  }
  .achievements .img-achievements {
    width: 27rem;
    margin-bottom: 5rem;
    margin-left: 0.5rem;
  }
  .achievements .next-button {
    right: -1rem;
    bottom: 15rem;
  }
  .achievements .prev-button {
    left: -1rem;
    bottom: 15rem;
  }
}
</style>
