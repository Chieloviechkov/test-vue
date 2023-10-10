<template>
  <div class="image-container" @click="redirectToPlayerStatistics">
    <img class="player-photo" :src="player.image" :alt="player.firstName">
    <div class="black-overlay">
      <h3 class="name-player">{{ player.lastName }}<p>{{ player.firstName }}</p></h3>
      <h1 class="custom-color player-number">{{ player.number }}</h1>
      <p>{{ player.position }}</p>
      <p id="birthdate">{{ formatDate(player.birthdate) }}<span id="age"> ({{ calculateAge(player.birthdate) }})</span></p>
    </div>
</div>
</template>

<script>
export default {
  props: {
    player: Object
  },
  methods: {
    calculateAge(birthdate) {
      const birthYear = new Date(birthdate).getFullYear();
      const currentYear = new Date().getFullYear();
      return currentYear - birthYear;
    },
    formatDate(dateArray) {
      const [year, month, day] = dateArray;
      const formattedDay = day < 10 ? `0${day}` : day;
      const formattedMonth = month < 10 ? `0${month}` : month;
      return `${formattedDay}.${formattedMonth}.${year}`;
    },
    redirectToPlayerStatistics() {
      this.$router.push({ name: 'PlayerStatistics', params: { lastName: this.player.lastName, firstName: this.player.firstName } });
    },
  }
}
</script>

<style scoped>
</style>
