<template>
    <div class="statistic-dother-cont-top">
      <div v-for="(match, index) in matches" :key="index" class="border-line-bottom">
        <p class="title">
          <img class="title-img" :src="match.logo1" />
          {{ match.team1 }} - {{ match.score }} {{ match.team2 }}
          <span class="name-winner">{{ match.winner }}</span>
          <img class="title-img" :src="match.logo2" />
        </p>
        <p v-for="(event, eventIndex) in match.events" :key="eventIndex" v-html="parseEvent(event)"></p>
      </div>
    </div>
</template>

<script>
export default {
  props: {
    matches: Array 
  },
  methods: {
    parseEvent(event) {
      const parser = new DOMParser();
      const parsedEvent = parser.parseFromString(event, 'text/html');
      const link = parsedEvent.querySelector('a');
      
      if (link) {
        return link.outerHTML; 
      } else {
        return event;
      }
    }
  }
};
</script>
<style scoped>

@media screen and (max-width:767px) {
  .statistic-dother-cont-top {
    width: 15rem;
    margin-left: 25%;
  }
}
</style>