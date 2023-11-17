<template>
    <div>
      <div v-for="(matches, index) in dividedMatches" :key="index">
        <GamesApozhCenter :matches="matches" />
      </div>
    </div>
  </template>
  
  <script>
  import GamesApozhCenter from "@/components/GamesApozhCenter.vue";
  import { lastgames } from '@/components/config';

  export default {
    components: {
      GamesApozhCenter
    },
    data() {
      return {
        matches: []
      };
    },
    computed: {
      dividedMatches() {
        const result = [];
        for (let i = 0; i < this.matches.length; i += 4) {
          result.push(this.matches.slice(i, i + 4));
        }
        return result;
      }
    },
    mounted() {
fetch(lastgames)
  .then(response => response.json())
  .then(data => {
    this.matches = data.slice(2).map(match => ({
      leftTeamLogo: match.homeTeam.logoUrl,
      leftTeamName: match.homeTeam.name,
      leftTeamScore: match.homeTeamGoals,
      rightTeamScore: match.awayTeamGoals,
      rightTeamName: match.awayTeam.name,
      rightTeamLogo: match.awayTeam.logoUrl,
      goals: match.event.split(', ')
    }));
  })
  .catch(error => {
    console.error("Ошибка при загрузке данных:", error);
  });

}

  };
  </script>
  