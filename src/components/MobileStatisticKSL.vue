<template>
  <div class="statistic-dother-cont mb-3 mt-3">
    <div v-for="(matchData, index) in matches" :key="index" class="matches-statistic">
      <p class="title">
        <img class="title-img" :src="matchData.leftTeamLogo">
        {{ matchData.leftTeamName }} {{ matchData.leftTeamScore }} - {{ matchData.rightTeamScore }} {{ matchData.rightTeamName }}
        <img class="title-img" :src="matchData.rightTeamLogo">
      </p>
      <p v-for="goal in matchData.goals" :key="goal">{{ goal }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    matches: {
      type: Array,
      required: true
    },
  }
};
</script>

<style scoped>
.statistic-dother-cont {
  height: fit-content;
  margin-left: 1rem;
  width: 28.5rem
}
.matches-statistic {
  position: relative;
}

.matches-statistic:not(:first-child)::before {
  content: "";
  position: absolute;
  left: 0rem;
  top: 0.25rem;
  height: 100%;
  width: 2px;
  background-color: rgba(93, 24, 110, 0.191);
}

.title {
  font-size: 0.8rem;
}

.title-img {
  width: 2.1rem;
}
</style>
