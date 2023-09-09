<template>
    <div>
      <data-table :data-rows="statisticTableKWL" />
    </div>
  </template>
  
  <script>
  import DataTable from "@/components/DataTable.vue";
  
  export default {
    components: {
      DataTable
    },
    data() {
      return {
        statisticTableKWL: [
  {
    name: "TLT",
    matches: 11,
    wins: 10,
    draws: 0,
    losses: 1,
    goalsFor: 63,
    goalsAgainst: 16,
    points: 30,
    logoSrc:  require("@/assets/TLT.png"),
  },
  {
    name: "FC APOZH",
    matches: 11,
    wins: 9,
    draws: 0,
    losses: 2,
    goalsFor: 49,
    goalsAgainst: 25,
    points: 27,
    logoSrc:  require("@/assets/MainLogo.png"),
  },
  {
    name: "AFC Argotep",
    matches: 11,
    wins: 9,
    draws: 0,
    losses: 2,
    goalsFor: 68,
    goalsAgainst: 28,
    points: 27,
    logoSrc:  require("@/assets/AgroTep.png"),
  },
  {
    name: "FC Voskresenka",
    matches: 11,
    wins: 7,
    draws: 0,
    losses: 4,
    goalsFor: 38,
    goalsAgainst: 27,
    points: 21,
    logoSrc:  require("@/assets/Voskresenka.png"),
  },
  {
    name: "ФК Прометей",
    matches: 11,
    wins: 6,
    draws: 0,
    losses: 5,
    goalsFor: 41,
    goalsAgainst: 31,
    points: 18,
    logoSrc:  require("@/assets/Prometeus (2).png"),
  },
  {
    name: "ПСЖ-2",
    matches: 11,
    wins: 5,
    draws: 2,
    losses: 4,
    goalsFor: 38,
    goalsAgainst: 39,
    points: 17,
    logoSrc:  require("@/assets/PSG2.png"),
  },
  {
    name: "ФК Еспада",
    matches: 11,
    wins: 4,
    draws: 4,
    losses: 3,
    goalsFor: 30,
    goalsAgainst: 29,
    points: 16,
    logoSrc:  require("@/assets/ESPADA.png"),
  },
  {
    name: "PhoeniX",
    matches: 11,
    wins: 4,
    draws: 1,
    losses: 6,
    goalsFor: 24,
    goalsAgainst: 26,
    points: 13,
    logoSrc:  require("@/assets/PhoeniX.png"),
  },
  {
    name: "FC Chapaevka",
    matches: 11,
    wins: 3,
    draws: 2,
    losses: 6,
    goalsFor: 33,
    goalsAgainst: 57,
    points: 11,
    logoSrc:  require("@/assets/Chapaevka.png.png"),
  },
  {
    name: "ФК 'Бобро'",
    matches: 11,
    wins: 2,
    draws: 2,
    losses: 7,
    goalsFor: 16,
    goalsAgainst: 27,
    points: 8,
    logoSrc:  require("@/assets/Bobro.png"),
  },
  {
    name: "FC Turbo Snails",
    matches: 11,
    wins: 1,
    draws: 1,
    losses: 9,
    goalsFor: 15,
    goalsAgainst: 69,
    points: 4,
    logoSrc:  require("@/assets/turbo.png"),
  },
  {
    name: "PVS",
    matches: 11,
    wins: 0,
    draws: 0,
    losses: 11,
    goalsFor: 11,
    goalsAgainst: 52,
    points: 0,
    logoSrc:  require("@/assets/PVS.png"),
  }
],
      };
    }
  };
  </script>
  