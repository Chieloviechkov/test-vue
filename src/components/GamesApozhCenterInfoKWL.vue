<template>
    <div>
        <GamesApozhCenter :matches="matchesOne" />
        <GamesApozhCenter :matches="matchesTwo" />
        <GamesApozhCenter :matches="matchesThree" />


    </div>
  </template>
  
  <script>
  import GamesApozhCenter from "@/components/GamesApozhCenter.vue";

  export default {
    components: {
      GamesApozhCenter
    },
    data() {
      return {
        matchesOne: [
  {
    leftTeamLogo: require('@/assets/Chapaevka.png.png'),
    leftTeamName: "FC Chapaevka",
    leftTeamScore: 0,
    rightTeamScore: 9,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: [
      "6' Ковальчук М. (Алімов О.)",
      "7' Тєрєшков А. (Ковальчук М.)",
      "8' Головня М.",
      "16' Алімов О. (Тєрєшков А.)",
      "18' Головня М. (Роспутько Д.)",
      "30' Ковальчук М. (Жигалюк К.)",
      "35' Головня М.",
      "44' Ковальчук М. (Роспутько Д.)",
      "50' Головня М."
    ]
  },
  {
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 1,
    rightTeamScore: 7,
    rightTeamName: "TLT",
    rightTeamLogo: require('@/assets/TLT.png'),
    goals: ["40’ Ковальчук М. (Нігрей О.)"]
  },
  {
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 2,
    rightTeamScore: 1,
    rightTeamName: "PhoeniX",
    rightTeamLogo: require('@/assets/PhoeniX.png'),
    goals: ["15' Світлий Р.", "46' Нігрей О. (Роспутько Д.)"]
  },
  {
    leftTeamLogo: require('@/assets/PVS.png'),
    leftTeamName: "PVS",
    leftTeamScore: 0,
    rightTeamScore: 3,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: [
      "18’ Головня М. (Світлий Р.)",
      "40’ Воскривенко І. (Ковальчук М.)",
      "15’ Жигалюк К. (Ковальчук М.)"
    ]
  }
],

  matchesTwo:[
  {
    leftTeamLogo: require('@/assets/Voskresenka.png'),
    leftTeamName: "FC Voskresenka",
    leftTeamScore: 2,
    rightTeamScore: 3,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: [
      "45' Світлий Р. (Нігрей О.)",
      "47' Ковальчук М. (Світлий Р.)",
      "14' Нігрей О. (Ковальчук М.)"
    ]
  },
  {
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 0,
    rightTeamScore: 3,
    rightTeamName: "Прометей",
    rightTeamLogo: require('@/assets/Prometeus (2).png'),
    goals: []
  },
  {
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 9,
    rightTeamScore: 5,
    rightTeamName: "ПСЖ-2",
    rightTeamLogo: require('@/assets/PSG2.png'),
    goals: [
      "6' Роспутько Д. (Ковальчук М.)",
      "9' Головня М. (Ковальчук М.)",
      "14' Головня М. (Ковальчук М.)",
      "15' Завалішин Д. (Нігрей О.)",
      "24' Головня М. (Завалішин Д.)",
      "25' Нігрей О. (Головня М.)",
      "30' Ковальчук М. (Турукало А.)",
      "43' Роспутько Д. (Світлий Р.)",
      "4' Ковальчук М. (Світлий Р.)"
    ]
  },
  {
    leftTeamLogo: require('@/assets/Bobro.png'),
    leftTeamName: "Bobro",
    leftTeamScore: 1,
    rightTeamScore: 2,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: [
      "8’ Ковальчук М. (Роспутько Д.)",
      "37’ Світлий Р."
    ]
  }
],
  matchesThree: [
  {
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 5,
    rightTeamScore: 0,
    rightTeamName: "Turbo Snails",
    rightTeamLogo: require('@/assets/turbo.png'),
    goals: [
      "7' Ковальчук М.",
      "21' Завалішин Д. (Світлий Р.)",
      "43' Світлий Р. (Жигалюк К.)",
      "49' Дума І. (Воскривенко І.)",
      "2' Солодкий В."
    ]
  }
],
      }
    }
  }

  </script>
  