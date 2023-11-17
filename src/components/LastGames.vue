<template>
  <div class="container-bottom-nav text-center">
    <div id="matches-container" class="matches">
      <li class="matches-apozh prigvozdka-three">МИНУЛІ ІГРИ:</li>
      <button @click="showPreviousMatches" id="prev-button" class="fiolet bg-none border-0 prigvozdka-one">
        <img src="@/assets/left-button-phiolet.png" class="width-btn" />
      </button>
      <div v-for="(match, index) in displayedMatches" :key="match.id" class="matches-item-one">
        <span v-if="index % 4 !== 0" class="font-weight-max border-score">|</span>
        <img :src="match.team1Logo" class="matches-logo" />
        <span :class="{'name-1': !team1Won(match), 'name-winner': team1Won(match)}">{{ match.team1 }}</span>
        <span class="name-score">{{ match.score }}</span>
        <span :class="{'name-winner': !team1Won(match), 'name-1': team1Won(match)}">{{ match.team2 }}</span>
        <img :src="match.team2Logo" class="matches-logo" />
      </div>
      <button @click="showNextMatches" id="next-button" class="fiolet bg-none border-0 prigvozdka-two">
        <img src="@/assets/right-button-phiolet.png" class="width-btn" />
      </button>
    </div>
  </div>
</template>
<script>
import { lastgames } from '@/components/config';

export default {
  name: 'LastGames',
  data() {
    return {
      windowWidth: window.innerWidth,
    isSmallScreen: window.innerWidth < 767,
    matches: [],
      currentMatchIndex: 0,
      matchesPerPage: 4,
    };
  },
  
  computed: {
    displayedMatches() {
    if (window.innerWidth < 767) {
      const startIndex = this.currentMatchIndex % this.matches.length;
      return this.matches.slice(startIndex, startIndex + 2);
    } else {
      const startIndex = this.currentMatchIndex % this.matches.length;
      return this.matches.slice(startIndex, startIndex + 3);
    }
  },
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch(lastgames);
        if (response.ok) {
          const data = await response.json();
          this.matches = data.map(match => ({
            team1: match.homeTeam.name,
            team1Logo: match.homeTeam.logoUrl,
            score: `${match.homeTeamGoals} : ${match.awayTeamGoals}`,
            team2: match.awayTeam.name,
            team2Logo: match.awayTeam.logoUrl,
          }));
        } else {
          console.error('Ошибка получения данных');
        }
      } catch (error) {
        console.error('Ошибка при запросе данных:', error);
      }
    },
    showPreviousMatches() {
  if (window.innerWidth < 767) {
    this.currentMatchIndex = (this.currentMatchIndex - 1 + this.matches.length) % this.matches.length;
  } else {
    this.currentMatchIndex = (this.currentMatchIndex - this.matchesPerPage + this.matches.length) % this.matches.length;
  }
},
    showNextMatches() {
  if (window.innerWidth < 767) {
    this.currentMatchIndex = (this.currentMatchIndex + 1) % this.matches.length;
  } else {
    this.currentMatchIndex = (this.currentMatchIndex + this.matchesPerPage) % this.matches.length;
  }
},
    team1Won(match) {
      const [team1Score, team2Score] = match.score.split(' : ').map(Number);
      return team1Score > team2Score;
    },
    handleResize() {
      const currentWidth = window.innerWidth;

      if (currentWidth < 767 && !this.isSmallScreen) {
        location.reload();
      } else if (currentWidth >= 767 && this.isSmallScreen) {
        location.reload();
      }

      this.windowWidth = currentWidth;
      this.isSmallScreen = currentWidth < 767;
    },
  },
  
  mounted() {
    this.fetchData();
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>
 
 <style scoped>
.width-btn{
  width: 1rem;
  height: 1rem;
}
</style>
 