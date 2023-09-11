<template>
<div class="container-bottom-nav text-center">
        <div id="matches-container" class="matches">
      <li class="matches-apozh prigvozdka-three">МИНУЛІ ІГРИ:</li>
      <button @click="showPreviousMatches" id="prev-button" class="fiolet bg-none border-0 prigvozdka-one"><img
                  src="@/assets/left-button-phiolet.png" class="width-btn"/>
                </button>
      <div v-for="(match, index) in displayedMatches" :key="match.id" class="matches-item-one">
        <span v-if="index % 4 !== 0" class="font-weight-max border-score">|</span>
        <img :src="match.team1Logo" class="matches-logo" />
        <span :class="{'name-1': !team1Won(match), 'name-winner': team1Won(match)}">{{ match.team1 }}</span>
        <span class="name-score">{{ match.score }}</span>
        <span :class="{'name-winner': !team1Won(match), 'name-1': team1Won(match)}">{{ match.team2 }}</span>
        <img :src="match.team2Logo" class="matches-logo"/>
      </div>  
      <button @click="showNextMatches" id="next-button" class="fiolet bg-none border-0 prigvozdka-two">
        <img src="@/assets/right-button-phiolet.png" class="width-btn"/>
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LastGames',
  data() {
    return {
      windowWidth: window.innerWidth,
    isSmallScreen: window.innerWidth < 767,
      matches: [
      {
          team1: 'FC APOZH',
          team1Logo: require('@/assets/MainLogo2.png'),
          score: '1 : 0',
          team2: 'Круїзи',
          team2Logo: require('@/assets/Kryizy.jpg')
        },{
          team1: 'FC APOZH',
          team1Logo: require('@/assets/MainLogo2.png'),
          score: '3 : 0',
          team2: 'Квартал',
          team2Logo: require('@/assets/Kvartal.png')
        },{
          team1: 'FC ALP INDUSTRIA',
          team1Logo: require('@/assets/Calipso.png'),
          score: '4 : 3',
          team2: 'FC APOZH',
          team2Logo: require('@/assets/MainLogo2.png')
        },
        {
          team1: 'ДПС',
          team1Logo: require('@/assets/ksl.png'),
          score: '3 : 0',
          team2: 'FC APOZH',
          team2Logo: require('@/assets/MainLogo2.png')
        },
        {
          team1: 'FC APOZH',
          team1Logo:require('@/assets/MainLogo2.png'),
          score: '3 : 1',
          team2: 'Tornado',
          team2Logo: require('@/assets/Tornado.png')
        },
        {
          team1: 'TURBO',
          team1Logo: require('@/assets/turbo.png'),
          score: '1 : 5',
          team2: 'FC APOZH',
          team2Logo: require('@/assets/MainLogo2.png')
        },
        {
          team1: 'FC APOZH',
          team1Logo: require('@/assets/MainLogo2.png'),
          score: '6 : 3',
          team2: 'FC Calipso Barbershop',
          team2Logo: require('@/assets/Calipso.png')
        },
        {
          team1: 'FC APOZH',
          team1Logo: require('@/assets/MainLogo2.png'),
          score: '0 : 1',
          team2: 'Прометей',
          team2Logo: require('@/assets/Prometeus (2).png')
        },
        {
          team1: 'Круїзи',
          team1Logo: require('@/assets/Kryizy.jpg'),
          score: '2 : 1',
          team2: 'FC APOZH',
          team2Logo:require('@/assets/MainLogo2.png')
        },
        {
          team1: 'FC GOAT',
          team1Logo: require('@/assets/Goat.png'),
          score: '0 : 7',
          team2: 'FC APOZH',
          team2Logo: require('@/assets/MainLogo2.png')
        },
        {
          team1: 'FC APOZH',
          team1Logo: require('@/assets/MainLogo2.png'),
          score: '5 : 4',
          team2: 'ФК ЕСПАДА',
          team2Logo: require('@/assets/ESPADA.png')
        },
        {
          team1: 'FC APOZH',
          team1Logo: require('@/assets/MainLogo2.png'),
          score: '5 : 4',
          team2: 'FC Angel City',
          team2Logo: require('@/assets/AngelCity.png')
        },
      ],
      currentMatchIndex: 0,
      matchesPerPage: 4,
    };
  },
  
  computed: {
  displayedMatches() {
    if (window.innerWidth < 767) {
      const startIndex = this.currentMatchIndex % this.matches.length;
      return this.matches.slice(startIndex, startIndex + 2);
    }
    const start = this.currentMatchIndex;
    const end = start + this.matchesPerPage;
    return this.matches.slice(start, end);
  },
},
  methods: {
    showPreviousMatches() {
  if (window.innerWidth < 767) {
    this.currentMatchIndex = (this.currentMatchIndex - 1 + this.matches.length) % this.matches.length;
  } else {
    this.currentMatchIndex = (this.currentMatchIndex - this.matchesPerPage + this.matches.length) % this.matches.length;
  }
},
    showNextMatches() {
  if (window.innerWidth < 767) {
    this.currentMatchIndex = (this.currentMatchIndex + 1) % this.matches.length;
  } else {
    this.currentMatchIndex = (this.currentMatchIndex + this.matchesPerPage) % this.matches.length;
  }
},
    team1Won(match) {
      const [team1Score, team2Score] = match.score.split(' : ').map(Number);
      return team1Score > team2Score;
    },
    handleResize() {
      const currentWidth = window.innerWidth;

      if (currentWidth < 767 && !this.isSmallScreen) {
        location.reload();
      } else if (currentWidth >= 767 && this.isSmallScreen) {
        location.reload();
      }

      this.windowWidth = currentWidth;
      this.isSmallScreen = currentWidth < 767;
    },
  },
  mounted() {
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

 
 <style scoped>
.width-btn{
  width: 1rem;
  height: 1rem;
}
</style>
 