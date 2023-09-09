<template>
    <table class="table-hover table-dark custom">
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
        <tr
        v-for="(team, index) in sortedTeams" :key="index" :class="{'border-bottom-0': index === sortedTeams.length - 1}">
          <th scope="row" class="custom-table fiolet-color">
          <img :src="team.logoSrc" :alt="team.name" class="img-main-table">
          </th>
          <td class="custom-table">{{ team.name }}</td>
          <td class="custom-table">{{ team.matches }}</td>
          <td class="custom-table">{{ team.wins }}</td>
          <td class="custom-table">{{ team.draws }}</td>
          <td class="custom-table">{{ team.losses }}</td>
          <td class="custom-table">{{ team.goalsFor }} : {{ team.goalsAgainst }}</td>
          <td class="custom-table fiolet-color">{{ team.points }}</td>
        </tr>
      </tbody>
    </table>
  </template>
  
  <script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  computed: {
    sortedTeams() {
      const sorted = [...this.data];
      sorted.sort((teamA, teamB) => {
        if (teamA.points !== teamB.points) {
          return teamB.points - teamA.points;
        }
        const goalDifferenceA = teamA.goalsFor - teamA.goalsAgainst;
        const goalDifferenceB = teamB.goalsFor - teamB.goalsAgainst;
        return goalDifferenceB - goalDifferenceA;
      });
      return sorted;
    }
  },
  mounted() {
    this.applyStylesToLastRow();
  },
  methods: {
    applyStylesToLastRow() {
      const table = document.querySelector('.table-hover');
      const rows = table.querySelectorAll('tbody tr');
      const lastRow = rows[rows.length - 1];

      const tdsInLastRow = lastRow.querySelectorAll('td');
      tdsInLastRow.forEach(td => {
        td.classList.add('custom-table', 'border-bottom-0');
      });

      lastRow.querySelector('th').classList.add('custom-table', 'border-radius-bottom-left', 'fiolet-color', 'border-bottom-0');
      lastRow.querySelector('td:last-child').classList.add('custom-table', 'border-radius-bottom-right', 'fiolet-color', 'border-bottom-0');
    }
  }
};
</script>

  
  <style scoped>
  .custom-table{
    padding: 0.08rem 0.5rem 0.08rem 0.5rem;
  }
  </style>
  