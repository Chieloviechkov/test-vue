<template>
  <div class="photo-body">
    <div class="photo-cont">
      <div v-if="isLoading">
        <img :src="gifUrl" alt="Загрузка данных" class="loading-gif">
      </div>
        <div v-for="(match, matchIndex) in matches" :key="matchIndex">
          <slider :slides="match.photos" :hover-text="match.title"></slider>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/SliderInPhoto.vue";
import { photosLink } from '@/components/config';

export default {
  components: {
    Slider,
  },
  data() {
    return {
      isLoading: true,
      matches: [],
      gifUrl: 'https://i.gifer.com/7SUP.gif',
    };
  },
  async created() {
    try {
      const response = await fetch(photosLink);
      const data = await response.json();
      const matches = {};
      data.forEach(item => {
        if (!matches[item.title]) {
          matches[item.title] = [];
        }
        matches[item.title].push({
          url: item.imageUrl,
          description: item.title,
        });
      });
      this.matches = Object.keys(matches).map(title => ({
        title: title,
        photos: matches[title],
      }));
      this.isLoading = false;
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
      this.isLoading = false;
    }
  },
};
</script>

<style scoped>
.loading-gif{
  margin-left: 28rem;
}
</style>
