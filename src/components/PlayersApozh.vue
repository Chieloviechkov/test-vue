<template>
  <div class="player-cont">
    <div v-if="isLoading" class="loading-gif-container">
      <img src="https://i.gifer.com/7SUP.gif" alt="Загрузка данных" class="loading-gif">
    </div>
      <card-apozh-player v-for="player in players" :key="player.number" :player="player" />
  </div>
</template>

<script>
import CardApozhPlayer from '@/components/CardApozhPlayer.vue';
import defaultImage from '@/assets/none.png';
import { footballersLink } from '@/components/config';

export default {
  components: {
    CardApozhPlayer
  },
  data() {
    return {
      isLoading: true,
      players: []
    };
  },
  mounted() {
  fetch(footballersLink)
    .then(response => response.json())
    .then(data => {
      this.players = data.map(player => ({
     number: player.number !== null ? player.number.toString() : '',
     lastName: player.lastName,
     firstName: player.name,
     position: player.position,
     birthdate: player.dateOfBirth,
     image: player.imgUrl === '/assets/bd2744c0b61f9dbf60d1d14fe2bbbf59/football_photo_thumb.png'
       ? defaultImage
       : player.imgUrl
        }));
      this.isLoading = false; 
    })
    .catch(error => {
      console.error('Ошибка при получении данных:', error);
      this.isLoading = false;
    });
}
};
</script>
<style scoped>
.loading-gif-container{
  margin-left: 20rem;
}
</style>
