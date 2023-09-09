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
            team1: 'АПОЖ 5',
            score: '4',
            team2: 'Angel City',
            logo2: require('@/assets/AngelCity.png'),
            events: [
            "26’ Алімов О. (Савченко І.)",
            "37’ Алімов О. (Нігрей О.)",
            "43’ Ковальчук М. (Алімов О.)",
            "46’ Алімов О. (Ковальчук М.)",
            "48’ Алімов О. (Ковальчук М.)",
            ]
          },
          {
            team1: 'АПОЖ 5',
            logo1: require('@/assets/MainLogo.png'),
            score: '4',
            team2: 'Еспада',
            logo2: require('@/assets/ESPADA.png'),
            events: [
              "5’ Розстальний Є. (Світлий Р.)",
              "18’ Передерій В. (Світлий Р.)",
              "20’ Світлий Р.",
              "29’ Світлий Р.",
              "48’ Ковальчук М. (Передерій В.)",
            ]
          }
        ]
      };
    }
  };
  </script>
  