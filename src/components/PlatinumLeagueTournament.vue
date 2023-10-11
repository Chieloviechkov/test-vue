<template>
    <StatisticTitle titleText="KSL PLATINUM LEAGUE 2023-2024"></StatisticTitle>
    <div class="container-all-statistic">
            <div>
              <div class="d-flex flex-nowrap">
                <LeftDivApozhPL v-if="window.innerWidth >= 767" class="ml-minus"></LeftDivApozhPL>
                <ToMobileStatisticsPL v-else></ToMobileStatisticsPL>
                <PlatinumLeague class="mr-3 ml-3 mb-2 custom-width"></PlatinumLeague>
              </div>
                <div class="mr-3">
                  <GamesCenterInfoPL v-if="window.innerWidth >= 767"></GamesCenterInfoPL>
                </div>
                </div>
                
                <div class="statistic-right">
                  <RightTableStatisticInfoPL></RightTableStatisticInfoPL>
            </div>
          </div>
</template>
<script>
import StatisticTitle from "@/components/TitleStatistic.vue";
import PlatinumLeague from "@/components/PlatinumLeague.vue";
import LeftDivApozhPL from "@/components/LeftDivApozhPL.vue";
import RightTableStatisticInfoPL from "@/components/RightTableInfoPL.vue";
import GamesCenterInfoPL from "@/components/GamesCenterInfoPL.vue";
import ToMobileStatisticsPL from "@/components/ToMobileStatisticsPL.vue"; 




export default {
name: "App",
components: {
    StatisticTitle,
    PlatinumLeague,
    LeftDivApozhPL,
  RightTableStatisticInfoPL,
  GamesCenterInfoPL,
  ToMobileStatisticsPL,
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
.custom-width{
    font-size: large;
    width: 41rem;
    height: 36rem;
}
.ml-minus{
  margin-left: -1rem;
}
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
  .custom-width{
    width: 28.5rem;
  }
}
</style>