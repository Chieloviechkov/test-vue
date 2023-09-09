<template>
    <div>
      <div
        class="slide-group"
        @mousedown="startDrag"
        @mousemove="drag"
        @mouseup="endDrag"
        @mouseleave="endDrag"
      >
        <div class="carousel-photo box-shadow">
          <div class="slides-photo" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div
              v-for="(slide, index) in slides"
              :key="index"
              class="slide-photo"
              :style="{ backgroundImage: `url(${slide.url})` }"
              @click="openFullscreen(index)"
            >
              <img src="@/assets/left-button.png" class="slide-button left-button" @click.stop="prevSlide" />
              <img src="@/assets/right-button.png" class="slide-button right-button" @click.stop="nextSlide" />
              <div class="hover-text" :class="{ 'd-none': currentIndex > 0 }">{{ hoverText }}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isFullscreen">
        <PhotoFull :image-url="slides[fullscreenIndex]?.url" :slides="slides" :current-index="currentIndex" @closeFullscreen="closeFullscreen" @prevSlide="prevSlide" @nextSlide="nextSlide" />

      </div>
    </div>
  </template>
  
  <script>
  import PhotoFull from "@/components/PhotoFull.vue";
  export default {
    components: {
    PhotoFull,
  },
    props: {
      slides: Array,
      hoverText: String,
    },
    data() {
      return {
        currentIndex: 0,
        isDragging: false,
        startPosX: 0,
        startTranslateX: 0,
        isFullscreen: false,
        fullscreenIndex: null,
      };
    },
    methods: {
      startDrag(event) {
        this.isDragging = true;
        this.startPosX = event.clientX;
        this.startTranslateX = this.currentIndex * -100;
        event.preventDefault();
        event.stopPropagation();
      },
      drag(event) {
        if (this.isDragging) {
          const distance = event.clientX - this.startPosX;
          const sensitivityCoefficient = 1.5;
          this.currentIndex = Math.min(
            Math.max(
              Math.round((this.startTranslateX + distance * sensitivityCoefficient) / -100),
              0
            ),
            this.slides.length - 1
          );
        }
      },
      endDrag() {
        this.isDragging = false;
        this.startTranslateX = -this.currentIndex * 100;
      },
      prevSlide() {
  if (!this.isDragging) {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
},
nextSlide() {
  if (!this.isDragging) {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }
},
      openFullscreen(index) {
  this.isFullscreen = true;
  this.fullscreenIndex = index;
  this.currentIndex = index;
},
      closeFullscreen() {
        this.isFullscreen = false;
        this.fullscreenIndex = null;
      },
    },
  };
  </script>
 
  