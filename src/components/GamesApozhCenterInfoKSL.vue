<template>
    <div>
        <GamesApozhCenter :matches="matchesOne" />
        <GamesApozhCenter :matches="matchesTwo" />
        


    </div>
  </template>
  
  <script>
  import GamesApozhCenter from "@/components/GamesApozhCenter.vue";

  export default {
    components: {
      GamesApozhCenter,
    },
    data() {
      return {
        matchesOne: [
  {
    leftTeamLogo: require('@/assets/Goat.png'),
    leftTeamName: "FC Goat",
    leftTeamScore: 0,
    rightTeamScore: 7,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: [
      "11’ Світлий Р.",
      "28’ Світлий Р. (Білий М.)",
      "31’ Нігрей О. (Котов М.)",
      "38’ Ковальчук М. (Світлий Р.)",
      "45’ Світлий Р. (Солодкий В.)",
      "53’ Ковальчук М. (Світлий Р.)",
      "56’ Нігрей О. (Ковальчук М.)",
    ]
  },
  {
    leftTeamLogo: require('@/assets/Kryizy.jpg'),
    leftTeamName: "Круїзи",
    leftTeamScore: 2,
    rightTeamScore: 1,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: ["50’ Котов М. (Завалішин Д.)"]
  },
  {
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 0,
    rightTeamScore: 1,
    rightTeamName: "Прометей",
    rightTeamLogo: require('@/assets/Prometeus (2).png'),
    goals: [""]
  },
  {
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 6,
    rightTeamScore: 3,
    rightTeamName: "FC Calipso",
    rightTeamLogo: require('@/assets/Calipso.png'),
    goals: [
      "7’ Ковальчук М. (Роспутько Д.)",
      "12’ Ковальчук М. (Світлий Р.)",
      "14’ Ковальчук М. (Передерій В.)",
      "30’ Білий М. (Ковальчук М.)",
      "40’ Воскривенко І. (Розстальний Є.)",
      "41’ Світлий Р. (Нігрей О.)",
    ]
  }
],

  matchesTwo:[
  {
    leftTeamLogo: require('@/assets/turbo.png'),
    leftTeamName: "FC Turbo",
    leftTeamScore: 1,
    rightTeamScore: 5,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: [
      "32’ Роспутько Д.",
      "33’ Світлий Р. (Завалішин Д.)",
      "53’ Роспутько Д. (Передерій В.)",
      "57’ Світлий Р. (Передерій В.)",
      "60’ Ковальчук М",
  
    ]
  },
  {
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 3,
    rightTeamScore: 1,
    rightTeamName: "Tornado",
    rightTeamLogo: require('@/assets/Tornado.png'),
    goals: ["28’ Передерій В. (Розстальний Є.)",
    "48’ Роспутько Д.",
    "51’ Передерій В. (Завалішин Д.)",
]
  },
  {
    leftTeamLogo: require('@/assets/ksl.png'),
    leftTeamName: "ДПС",
    leftTeamScore: 3,
    rightTeamScore: 0,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: [""],
  }
],
containerClass: "",
      }
    }
  }

  </script>
  