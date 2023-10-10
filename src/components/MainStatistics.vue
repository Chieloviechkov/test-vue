<template>
    <div class="stats-component mt-3">
      <h2 class="text-center h2">Статистика з 30.10.2019 року</h2>
      <div class="border-custom mt-3">
        <table class="fiolet-color table-dark br-1">
          <tr class="custom-two">
            <th scope="col" class="custom-table-two">Матчі</th>
            <th scope="col" class="custom-table-two">Перемоги</th>
            <th scope="col" class="custom-table-two">Нічиї</th>
            <th scope="col" class="custom-table-two">Поразки</th>
            <th scope="col" class="custom-table-two">Забиті голи</th>
            <th scope="col" class="custom-table-two">Пропущені голи</th>
          </tr>
          <tr class="custom-table-two">
            <td class="custom-table-two custom-color">{{ stats.matches }}</td>
            <td class="custom-table-two custom-color">{{ stats.wins }}</td>
            <td class="custom-table-two custom-color">{{ stats.draws }}</td>
            <td class="custom-table-two custom-color">{{ stats.losses }}</td>
            <td class="custom-table-two custom-color">{{ stats.goalsFor }}</td>
            <td class="custom-table-two custom-color">{{ stats.goalsAgainst }}</td>
          </tr>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        stats: {
         
        }
      };
    },
    mounted() {
      this.fetchData();
    },
    methods: {
      async fetchData() {
        try {
          const response = await fetch('http://localhost:8889/statistics/apozh');
          const data = await response.json();
          this.stats.matches = data.matchesPlayed;
          this.stats.wins = data.wins;
          this.stats.draws = data.draws;
          this.stats.losses = data.losses;
          this.stats.goalsFor = data.goalsScored;
          this.stats.goalsAgainst = data.goalsConceded;
        } catch (error) {
          console.error('Ошибка при получении данных:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
 </style>
  