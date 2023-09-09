<template>
  <div class="photo-body">
  <div class="photo-cont">
    <slider
      v-for="(slideGroup, groupIndex) in slideGroups"
      :key="groupIndex"
      :slides="slideGroup"
      :hover-text="hoverTexts[groupIndex]"
    ></slider>
    
  </div>
</div>
</template>
<script>
import Slider from "@/components/SliderInPhoto.vue";

export default {
  components: {
    Slider,
  },
  data() {
    return {
      slideGroups: [
        [
          {url: require("@/assets/slider2.png") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider6.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
        ],
        [
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider6.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
        ],
        [
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
        ],
        [
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
        ],
        [
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
          {url: require("@/assets/slider4.jpg") },
        ],
        
      ],
      hoverTexts: [
      "Описание фотографий, с какого матча они",
      "Описание фотографий, с какого матча они",
      "Описание фотографий, с какого матча они",
      "Привет",
      "hello"
      //Сейчас это всего лишь заглушка. Данные будут приниматься с моего будующего бекенда
    ],
    }
  },
  methods: {
    openFullscreen(imageUrl) {
      this.isFullscreen = true;
      this.fullscreenImageUrl = imageUrl;
    },

    closeFullscreen() {
      this.isFullscreen = false;
      this.fullscreenImageUrl = null;
    },
  },
};
</script>