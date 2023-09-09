<template>
    <div>
      <MatchesComponent :matches="matchesData" />
    </div>
  </template>
  
  <script>
  import MatchesComponent from "@/components/LeftDivGamesApozh.vue";
  
  export default {
    components: {
      MatchesComponent
    },
    data() {
      return {
        matchesData: [
          {
            logo1: require('@/assets/MainLogo.png'),
            team1: 'АПОЖ 3',
            score: '7',
            team2: 'Corplex-2',
            logo2: require('@/assets/corplex.png'),
            events: [
              "5’ Насінський І. (Дума І.)",
              "35’ Жигалюк К. (Романко Р.)",
              "59’ Жигалюк К. (пенальті)"
            ]
          },
          {
            logo1: require('@/assets/ESPADA.png'),
            team1: 'Еспада 0',
            score: '6',
            team2: 'АПОЖ',
            logo2: require('@/assets/MainLogo.png'),
            events: [
              "25' Ковальчук М.",
              "26' Солодкий В.",
              "33' Завалішин Д.",
              "42' Головня М.",
              "48' Ковальчук М. (Жигалюк К.)",
              "59' Лащ В. (Роспутько Д.)"
            ]
          }
        ]
      };
    }
  };
  </script>
  