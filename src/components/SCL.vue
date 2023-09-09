<template>
  
        <StatisticTitle titleText="KSL SILVER COAST LEAGUE 2022"></StatisticTitle>
        <div class="container-all-statistic">
                <div>
                  <div class="d-flex flex-nowrap">
                    <LeftDivGamesApozhSCL v-if="window.innerWidth >= 767"></LeftDivGamesApozhSCL>
                    <ToMobileStatisticSCL v-else></ToMobileStatisticSCL>
                    <StatisticTableSCL class="mr-3 ml-3 mb-2"></StatisticTableSCL>
                  </div>
                    <div class="mr-3">
                      <GamesApozhCenterInfo v-if="window.innerWidth >= 767"></GamesApozhCenterInfo>
                    </div>
                    </div>
                    
                    <div class="statistic-right">
                      <RightTableStatisticInfo></RightTableStatisticInfo>
                </div>
              </div>
  </template>
  <script>
    import StatisticTitle from "@/components/TitleStatistic.vue";
    import StatisticTableSCL from "@/components/StatisticTableSCL.vue";
    import LeftDivGamesApozhSCL from "@/components/LeftDivGamesApozhArray.vue";
    import RightTableStatisticInfo from "@/components/RightTableStatisticInfo.vue";
    import GamesApozhCenterInfo from "@/components/GamesApozhCenterInfo.vue";
    import ToMobileStatisticSCL from "@/components/ToMobileStatisticSCL.vue"; 




  
  export default {
    name: "App",
    components: {
        StatisticTitle,
      StatisticTableSCL,
      LeftDivGamesApozhSCL,
      RightTableStatisticInfo,
      GamesApozhCenterInfo,
      ToMobileStatisticSCL
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