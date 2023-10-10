<template>
    <div class="text-center text-light">
        <div v-if="isLoading">
      <img :src="gifUrl" alt="Загрузка данных" class="loading-gif">
        </div>
      <div v-else>
        <h1 v-if="player">Статистика гравця: {{ player.name }} {{ player.lastName }}</h1>
        <div v-if="player" class="player">
            <img v-if="player.imgUrl && player.imgUrl !== '/assets/bd2744c0b61f9dbf60d1d14fe2bbbf59/football_photo_thumb.png'" :src="player.imgUrl" alt="Фотография игрока" class="img_player box-shadow">
<img v-else :src="defaultImage" alt="Изображение по умолчанию" class="img_player box-shadow">

          <div class="ml-25pers">
          <p v-if="player.number !== undefined" class="font-size-3r">Номер: <span class="fiolet-color">{{ player.number }}</span></p>
          <p v-if="player.position" class="font-size-3r">Позиція: <span class="fiolet-color">{{ player.position }}</span></p>
          <p v-if="player.games !== undefined" class="font-size-3r">Кількість матчів: <span class="fiolet-color"> {{ player.games }}</span></p>
          <p v-if="player.goals !== undefined" class="font-size-3r">Забиті голи: <span class="fiolet-color">{{ player.goals }}</span></p>
          <p v-if="player.assists !== undefined" class="font-size-3r">Гольові передачі: <span class="fiolet-color">{{ player.assists }}</span></p>
          <p v-if="player.yellowCards !== undefined" class="font-size-3r">Жовті картки: <span class="fiolet-color">{{ player.yellowCards }}</span></p>
          <p v-if="player.redCards !== undefined" class="font-size-3r">Червоні картки: <span class="fiolet-color">{{ player.redCards }}</span></p>
          <p v-if="player.missedGoals !== undefined" class="font-size-3r">Пропущенні голи: <span class="fiolet-color">{{ player.missedGoals }}</span></p>
        </div>
        
        </div>
        <div v-else>
          <p>Игрок не найден.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import defaultImage from '@/assets/none.png'; 
  export default {
    components: {
      },
    data() {
      return {
        isLoading: true,
        player: null,
        gifUrl: 'https://i.gifer.com/7SUP.gif',
        defaultImage: defaultImage,
      };
    },
  
    async created() {
      const lastName = this.$route.params.lastName;
      const firstName = this.$route.params.firstName;
      try {
        const foundPlayer = await this.findPlayerByName(lastName, firstName);
        this.player = foundPlayer;
        this.isLoading = false;
        console.log(this.player);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
        this.isLoading = false;
      }
    },
    methods: {
      calculateAge(birthdate) {
        const birthYear = new Date(birthdate).getFullYear();
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
      },
      async findPlayerByName(lastName, firstName) {
        try {
          const response = await fetch('http://localhost:8889/footballers/all');
          const players = await response.json();
          const foundPlayer = players.find(player => player.lastName === lastName && player.name === firstName);
          console.log(foundPlayer);
          return foundPlayer;
        } catch (error) {
          console.error('Ошибка при получении данных:', error);
          throw error;
        }
      }
    }
  }


  </script>
<style scoped>
    .img_player{
        border-radius: 1rem;
        height: 22rem;
    }
    .font-size-3r{
      font-size: 1.3rem;
    }
    
  .img_player {
    border-radius: 1rem;
  }
  .player{
    display: flex;
    text-align: left;
    margin-left: 29%;
    margin-top: 1.5rem;
    margin-bottom: 3.15rem;
  }
  .ml-25pers{
    margin-left: 5%;
  }
</style>