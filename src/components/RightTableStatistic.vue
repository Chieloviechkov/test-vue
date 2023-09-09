<template>
    <div class="statistic-right">
      <table class="table-hover table-dark custom font-size-1">
        <thead>
          <tr class="custom-table">
            <th scope="col" class="custom-table fiolet-color text-center">#</th>
            <th scope="col" class="custom-table">Прізвище</th>
            <th scope="col" class="custom-table">Ім’я</th>
            <th scope="col" class="custom-table">Матчі</th>
            <th scope="col" class="custom-table"><img :src="require('@/assets/ball.png')" class="title-img"></th>
            <th scope="col" class="custom-table"><img :src="require('@/assets/ball-pass-removebg-preview (1).png')" class="imageintable"></th>
            <th scope="col" class="custom-table"><img :src="require('@/assets/yellowcard.png')"  class="news-img"></th>
            <th scope="col" class="custom-table"><img :src="require('@/assets/red-card.png')" class="news-img"></th>
            <th scope="col" class="custom-table">ПМ</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(matchesData, index) in dataRows" :key="index" :class="matchesData.rowStyles">
          <th scope="row" class="custom-table fiolet-color height-five-r">
            <img :src="matchesData.imgSrc" alt="APOZH" class="imageintable">
          </th>
          <td class="custom-table">{{ matchesData.firstName }}</td>
          <td class="custom-table">{{ matchesData.lastName }}</td>
          <td :class="{'custom-table': true, 'fiolet-color': isMaxValue(matchesData, 'goals')}">{{ matchesData.goals }}</td>
          <td :class="{'custom-table': true, 'fiolet-color': isMaxValue(matchesData, 'assists')}">{{ matchesData.assists }}</td>
          <td :class="{'custom-table': true, 'fiolet-color': isMaxValue(matchesData, 'passes')}">{{ matchesData.passes }}</td>
          <td :class="{'custom-table': true, 'fiolet-color': isMaxValue(matchesData, 'yellowCards')}">{{ matchesData.yellowCards }}</td>
          <td :class="{'custom-table': true, 'fiolet-color': isMaxValue(matchesData, 'redCards')}">{{ matchesData.redCards }}</td>
          <td class="custom-table">{{ matchesData.penalty }}</td>
        </tr>
        
        </tbody>
      </table>
    </div>
</template>

<script>
export default {
  props: {
    dataRows: {
      type: Array,
      required: true
    }
  },
  methods: {
    isMaxValue(matchesData, column) {
      const maxColumnValue = Math.max(...this.dataRows.map(row => row[column]));
      return matchesData[column] === maxColumnValue;
    }
  }
};
 
</script>
<style scoped>
@media screen and (max-width: 767px) {
  .custom-table{
    padding: 0.1rem;
  }
  .statistic-right{
    margin-left: 1rem;
  }
}
</style>

