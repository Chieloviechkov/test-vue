<template>
    <div>
      <div v-for="(matches, index) in dividedMatches" :key="index">
        <MobileStatisticKSL :matches="matches" />
      </div>
    </div>
  </template>
  
  <script>
  import MobileStatisticKSL from "@/components/MobileStatisticKSL.vue";
  import { lastgames } from '@/components/config';

  export default {
    components: {
      MobileStatisticKSL
    },
    data() {
      return {
        matches: []
      };
    },
    computed: {
      dividedMatches() {
        const result = [];
        for (let i = 0; i < this.matches.length; i += 1) {
          result.push(this.matches.slice(i, i + 1));
        }
        return result;
      }
    },
    mounted() {
fetch(lastgames)
  .then(response => response.json())
  .then(data => {
    this.matches = data.slice(0).map(match => ({
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
  