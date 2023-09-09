<template>
    <div>
      <data-table :data-rows="statisticTableSCL" />
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
        statisticTableSCL: [
        {
          name: "Corplex-2",
          matches: 21,
          wins: 15,
          draws: 1,
          losses: 5,
          goalsFor: 101,
          goalsAgainst: 57,
          points: 46,
          logoSrc: require("@/assets/corplex.png")
        },
        {
          name: "AFC Fortuna",
          matches: 21,
          wins: 13,
          draws: 4,
          losses: 4,
          goalsFor: 58,
          goalsAgainst: 37,
          points: 43,
          logoSrc: require("@/assets/fortuna.png")
        },
        {
          name: "ФК Прометей",
          matches: 21,
          wins: 12,
          draws: 1,
          losses: 8,
          goalsFor: 62,
          goalsAgainst: 47,
          points: 37,
          logoSrc: require("@/assets/Prometeus (2).png")
        },
        {
          name: "FC APOZH",
          matches: 21,
          wins: 10,
          draws: 1,
          losses: 10,
          goalsFor: 77,
          goalsAgainst: 53,
          points: 31,
          logoSrc: require("@/assets/MainLogo.png")
        },
        {
          name: "ФК Еспада",
          matches: 21,
          wins: 7,
          draws: 2,
          losses: 12,
          goalsFor: 45,
          goalsAgainst: 58,
          points: 23,
          logoSrc: require("@/assets/ESPADA.png")
        },
        {
          name: "ПСЖ-2",
          matches: 21,
          wins: 5,
          draws: 7,
          losses: 9,
          goalsFor: 65,
          goalsAgainst: 82,
          points: 22,
          logoSrc: require("@/assets/PSG2.png")
        },
        {
          name: "FC Turbo",
          matches: 21,
          wins: 6,
          draws: 3,
          losses: 12,
          goalsFor: 34,
          goalsAgainst: 73,
          points: 21,
          logoSrc: require("@/assets/turbo.png")
        },
        {
          name: "FC Angel City",
          matches: 21,
          wins: 5,
          draws: 3,
          losses: 13,
          goalsFor: 38,
          goalsAgainst: 73,
          points: 16,
          logoSrc: require("@/assets/AngelCity.png")
        }
        ]
      };
    }
  };
  </script>