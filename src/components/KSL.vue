<template>
  <div>
    <StatisticTitle titleText="KSL PLATINUM SUMMER LEAGUE"></StatisticTitle>
    <div class="container-all-statistic">
      <div>
        <div class="d-flex flex-nowrap">
          <LeftDivGamesApozhKSL v-if="window.innerWidth >= 767"></LeftDivGamesApozhKSL>
          <ToMobileStatisticKSL v-else></ToMobileStatisticKSL>
          <ToStatisticTableKSL class="mr-3 ml-3 mb-2"></ToStatisticTableKSL>
        </div>
        <div class="mr-3">
          <GamesApozhCenterInfoKSL v-if="window.innerWidth >= 767"></GamesApozhCenterInfoKSL>
        </div>
      </div>
      <div class="statistic-right">
        <RightTableStatisticInfoKSL></RightTableStatisticInfoKSL>
      </div>
    </div>
  </div>
</template>

<script>
import StatisticTitle from "@/components/TitleStatistic.vue";
import ToStatisticTableKSL from "@/components/ToStatisticTableKSL.vue";
import LeftDivGamesApozhKSL from "@/components/LeftDivGamesApozhKSL.vue";
import RightTableStatisticInfoKSL from "@/components/RightTableStatisticInfoKSL.vue";
import GamesApozhCenterInfoKSL from "@/components/GamesApozhCenterInfoKSL.vue";
import ToMobileStatisticKSL from "@/components/ToMobileStatisticKSL.vue"; 

export default {
  name: "App",
  components: {
    StatisticTitle,
    ToStatisticTableKSL,
    LeftDivGamesApozhKSL,
    RightTableStatisticInfoKSL,
    GamesApozhCenterInfoKSL,
    ToMobileStatisticKSL, 
  },
  mounted() {
    window.addEventListener("resize", this.handleWindowResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
  },
  methods: {
    handleWindowResize() {
      this.window.innerWidth = window.innerWidth;
    },
  },
  data() {
    return {
      window: {
        innerWidth: window.innerWidth,
      },
    };
  },
};
</script>

<style scoped>
@media screen and (max-width: 767px) {
  .container-all-statistic {
    margin-left: 0;
    flex-direction: column;
  }
  .mr-3
  .ml-3
  .mb-2 {
    margin: 0;
  }
  .statistic-right {
    margin-right: 0rem;
  }
  .d-flex {
    flex-direction: column-reverse;
  }
}
</style>
