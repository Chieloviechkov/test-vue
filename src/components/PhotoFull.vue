<template>
    <div>
      <div class="photo-viewer" @click="closeFullscreen">
        <img src="@/assets/left-button.png" class="slide-button left-button-full" @click.stop="prevSlide" />
        <img :src="currentImageUrl" alt="Fullscreen Photo" @click.stop />
        <img src="@/assets/right-button.png" class="slide-button right-button-full" @click.stop="nextSlide" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      imageUrl: String,
      slides: Array,
      currentIndex: Number,
    },
    data() {
      return {
        localCurrentIndex: this.currentIndex,
      };
    },
    computed: {
      currentImageUrl() {
        return this.slides[this.localCurrentIndex]?.url || '';
      },
    },
    methods: {
      prevSlide() {
        if (this.localCurrentIndex > 0) {
          this.localCurrentIndex -= 1;
        } else {
          this.localCurrentIndex = this.slides.length - 1;
        }
      },
  
      nextSlide() {
        if (this.localCurrentIndex < this.slides.length - 1) {
          this.localCurrentIndex += 1;
        } else {
          this.localCurrentIndex = 0;
        }
      },
  
      closeFullscreen() {
        this.$emit('closeFullscreen');
      },
    },
  };
  </script>
  