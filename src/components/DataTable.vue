<template>
  <div>
      <table class="custom-table-hover custom font-size-1">
              <thead>
                <tr class="custom-table">
                  <th scope="col" class="custom-table fiolet-color text-center">#</th>
                  <th scope="col" class="custom-table">Команди</th>
                  <th scope="col" class="custom-table" v-if="windowWidth >= 767">Матчі</th>
        <th scope="col" class="custom-table" v-else>М</th>
        <th scope="col" class="custom-table" v-if="windowWidth >= 767">Перемоги</th>
        <th scope="col" class="custom-table" v-else>П</th>
        <th scope="col" class="custom-table" v-if="windowWidth >= 767">Нічиї</th>
        <th scope="col" class="custom-table" v-else>Н</th>
        <th scope="col" class="custom-table" v-if="windowWidth >= 767">Поразки</th>
        <th scope="col" class="custom-table" v-else>По</th>
        <th scope="col" class="custom-table" v-if="windowWidth >= 767">Забиті</th>
        <th scope="col" class="custom-table" v-else>З</th>
        <th scope="col" class="custom-table" v-if="windowWidth >= 767">Пропущені</th>
        <th scope="col" class="custom-table" v-else>Пр</th>
        <th scope="col" class="custom-table fiolet-color" v-if="windowWidth >= 767">Очки</th>
        <th scope="col" class="custom-table fiolet-color" v-else>О</th>
                </tr>
              </thead>    
              <tbody>    
                <tr v-for="(row, index) in sortedTeams" :key="index" class="table-row">
          <th scope="row" class="custom-table fiolet-color">
            <img :src="row.logoSrc" :alt="row.name" class="img-table">
          </th>
          <td class="custom-table">{{ row.name }}</td>
          <td class="custom-table">{{ row.matches }}</td>
          <td class="custom-table">{{ row.wins }}</td>
          <td class="custom-table">{{ row.draws }}</td>
          <td class="custom-table">{{ row.losses }}</td>
          <td class="custom-table">{{ row.goalsFor }}</td>
          <td class="custom-table">{{ row.goalsAgainst }}</td>
          <td class="custom-table fiolet-color">{{ row.points }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
data() {
  return {
    windowWidth: window.innerWidth,
  };
},
  props: {
    dataRows: {
      type: Array,
      required: true
    }
  },
  created() {
  window.addEventListener("resize", this.handleResize);
},
  computed: {
    sortedTeams() {
      const sorted = [...this.dataRows];
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
  methods: {
    handleResize() {
    this.windowWidth = window.innerWidth;
  },  
  },
};
</script>
<style scoped>
.table-row {
  border-top: 2px solid #7d7d7d;
}
@media screen and (max-width:767px) {
  .custom-table{
  padding: 0.7rem;
  }
}
</style>