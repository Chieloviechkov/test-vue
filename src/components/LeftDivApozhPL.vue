<template>
    <div>
      <MatchesComponent :matches="matchesData" />
    </div>
  </template>
  
  <script>
  import MatchesComponent from "@/components/LeftDivGamesApozh.vue";

export default {
  components: {
    MatchesComponent
  },
  data() {
    return {
      matchesData: []
    };
  },
  mounted() {
    fetch('https://apozh-f1a0a5f389fc.herokuapp.com/lastgames/all')
      .then(response => response.json())
      .then(data => {
        this.matchesData = data.slice(0, 2).map(match => ({
          logo1: match.homeTeam.logoUrl,
          team1: match.homeTeam.name,
          score: `${match.homeTeamGoals}-${match.awayTeamGoals}`,
          team2: match.awayTeam.name,
          logo2: match.awayTeam.logoUrl,
          events: match.event.split(', ')
        }));
      })
      .catch(error => {
        console.error('Произошла ошибка при получении данных:', error);
      });
  }
};

  </script>
  