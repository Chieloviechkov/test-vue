<template>
<table class="table-black custom-table-hover custom" ref="myTable">
      <thead>
        <tr class="custom-table">
          <th scope="col" class="custom-table fiolet-color">#</th>
          <th scope="col" class="custom-table">Команди</th>
          <th scope="col" class="custom-table">М</th>
          <th scope="col" class="custom-table">B</th>
          <th scope="col" class="custom-table">Н</th>
          <th scope="col" class="custom-table">П</th>
          <th scope="col" class="custom-table">ЗГ-ПГ</th>
          <th scope="col" class="custom-table fiolet-color">Очки</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(team) in sortedTeams" :key="team.id" class="table-row">
        <th scope="row" class="custom-table fiolet-color">
          <img :src="team.logoUrl" :alt="team.name" class="img-main-table" />
        </th>
        <td class="custom-table">{{ team.name }}</td>
        <td class="custom-table">{{ team.matches }}</td>
        <td class="custom-table">{{ team.wins }}</td>
        <td class="custom-table">{{ team.draws }}</td>
        <td class="custom-table">{{ team.losses }}</td>
        <td class="custom-table no-wrap">{{ team.goalsScored }} : {{ team.goalsConceded }}</td>
        <td class="custom-table fiolet-color">{{ team.points }}</td>
      </tr>
    </tbody>
    </table>
  </template>
  <script>
  export default {
    data() {
      return {
        teams: [],
        sortedTeams: []
      };
    },
    computed: {
      platinumLeagueTeams() {
        return this.teams.filter(team => team.tournament === "Platinum League");
      }
    },
    methods: {
      sortTeams() {
    this.sortedTeams = this.teams
      .filter(team => team.tournament === "Platinum League")
      .slice()
      .sort((a, b) => {
        if (a.points !== b.points) {
          return b.points - a.points;
        }
        const goalDiffA = a.goalsScored - a.goalsConceded;
        const goalDiffB = b.goalsScored - b.goalsConceded;
        return goalDiffB - goalDiffA;
      });
  },
},
    async mounted() {
      try {
        const response = await fetch('https://apozh-f1a0a5f389fc.herokuapp.com/teams/all');
        const data = await response.json();
        this.teams = data;
        this.sortTeams(); 
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    }
  };
  </script>
  <style scoped>
  .custom-table{
    padding: 0.01rem 0.5rem;
  }
  .no-wrap{
    white-space: nowrap;
  }


  </style>
  