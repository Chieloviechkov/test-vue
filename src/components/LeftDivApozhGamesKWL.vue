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
            team1: 'АПОЖ 9',
            score: '4',
            team2: 'Еспада',
            logo2: require('@/assets/ESPADA.png'),
            events: [
              "7' Єфімов К. (Алімов О.)",
              "11' Алімов О.",
              "18' Нігрей О. (Городній І.)",
              "28' Ковальчук М. (Завалішин Д.)",
              "31' Єфімов К. (Світлий Р.)",
              "36' Нігрей О.",
              "38' Ковальчук М. (Городній І.)",
              "<a  href=https://ksl.co.ua/match/2870162 class='custom-color'>...</a>",
              
            ]
          },
          {
            logo1: require('@/assets/AgroTep.png'),
            team1: 'Агротеп 2',
            score: '6',
            team2: 'АПОЖ',
            logo2: require('@/assets/MainLogo.png'),
            events: [
              "8’ Ковальчук М. (Світлий Р.)",
              "12’ Алімов О. (Єфімов К.)",
              "34’ Савченко І. (Городній І.)",
              "40’ Нігрей О. (Городній І.)",
              "43’ Городній І. (Світлий Р.)",
              "47’ Головня М. (Єфімов К.)"
            ]
          }
        ]
      };
    }
  };
  </script>
  