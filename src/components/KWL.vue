<template>
    <StatisticTitle titleText="KSL WINTER LEAGUE 2022"></StatisticTitle>
    <div class="container-all-statistic">
            <div>
              <div class="d-flex flex-nowrap">
                <LeftDivGamesApozhKWL v-if="window.innerWidth >= 767"></LeftDivGamesApozhKWL>
                <ToMobileStatisticKWL v-else></ToMobileStatisticKWL>
                <StatisticTableSCL class="mr-3 ml-3 mb-2"></StatisticTableSCL>
              </div>
                <div class="mr-3">
                  <GamesApozhCenterInfoKWL v-if="window.innerWidth >= 767"></GamesApozhCenterInfoKWL>
                </div>
                </div>
                
                <div class="statistic-right">
                  <RightTableStatisticInfoKWL></RightTableStatisticInfoKWL>
            </div>
          </div>
</template>
<script>
import StatisticTitle from "@/components/TitleStatistic.vue";
import StatisticTableSCL from "@/components/StatisticTableKWL.vue";
import LeftDivGamesApozhKWL from "@/components/LeftDivApozhGamesKWL.vue";
import RightTableStatisticInfoKWL from "@/components/RightTableStatisticInfoKWL.vue";
import GamesApozhCenterInfoKWL from "@/components/GamesApozhCenterInfoKWL.vue";
import ToMobileStatisticKWL from "@/components/ToMobileStatisticKWL.vue"; 




export default {
name: "App",
components: {
    StatisticTitle,
  StatisticTableSCL,
  LeftDivGamesApozhKWL,
  RightTableStatisticInfoKWL,
  GamesApozhCenterInfoKWL,
  ToMobileStatisticKWL,
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