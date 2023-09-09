<template>
    <div>
        <GamesApozhCenter :matches="matchesOne" />
        <GamesApozhCenter :matches="matchesTwo" />
        <GamesApozhCenter :matches="matchesThree" />
        <GamesApozhCenter :matches="matchesFour" />
        <GamesApozhCenter :matches="matchesFive" />


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
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 3,
    rightTeamScore: 4,
    rightTeamName: "ПСЖ-2",
    rightTeamLogo: require('@/assets/PSG2.png'),
    goals: ["12’ Солодкий В. (Ковальчук М.)", "43’ Світлий Р.", "56’ Насінський І."]
  },
  {
    leftTeamLogo: require('@/assets/turbo.png'),
    leftTeamName: "Turbo Snails",
    leftTeamScore: 2,
    rightTeamScore: 1,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: ["29’ Світлий Р. (Завалішин Д.)"]
  },
  {
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 4,
    rightTeamScore: 5,
    rightTeamName: "Angel City",
    rightTeamLogo: require('@/assets/AngelCity.png'),
    goals: ["17’ Світлий Р.", "24’ Головня М. (Дума І.)", "25’ Головня М.", "34’ Насінський І. (Роспутько Д.)"]
  },],
  
  matchesTwo:[
  
  {
    title: "Прометей 3 – 2 АПОЖ",
    leftTeamLogo: require('@/assets/Prometeus (2).png'),
    leftTeamName: "Прометей",
    leftTeamScore: 3,
    rightTeamScore: 2,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: ["22’ Ковальчук М. (Нігрей О.)", "28’ Головня М. (Ковальчук М.)"]
  },
  {
    title: "АПОЖ 2 – 3 Фортуна Київ",
    leftTeamLogo: require('@/assets//MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 2,
    rightTeamScore: 3,
    rightTeamName: "Фортуна Київ",
    rightTeamLogo: require('@/assets/fortuna.png'),
    goals: ["22’ Світлий Р. (пенальті)", "28’ Ковальчук М. (Світлий Р.)"]
  },
  {
    title: "Angel City 0 - 6 АПОЖ",
    leftTeamLogo: require('@/assets/AngelCity.png'),
    leftTeamName: "Angel City",
    leftTeamScore: 0,
    rightTeamScore: 6,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: ["27’ Роспутько Д.", "29’ Шепель М. (Світлий Р.)", "36’ Ковальчук М.", "41’ Головня М.", "43’ Шепель М. (Головня М.)", "60’ Ковальчук М. (Завалішин Д.)"]
  },
  {
    title: "Corplex-2 8 – 4 АПОЖ",
    leftTeamLogo: require('@/assets/corplex.png'),
    leftTeamName: "Corplex-2",
    leftTeamScore: 8,
    rightTeamScore: 4,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: ["5' Завалішин Д. (Ковальчук М.)", "7' Ковальчук М. (Світлий Р.)", "50' Роспутько Д. (Завалішин Д.)", "58' Нігрей О. (Ковальчук М.)"]
  },],

  matchesThree:[
  
  {
    title: "АПОЖ 4 – 0 Еспада",
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 4,
    rightTeamScore: 0,
    rightTeamName: "Еспада",
    rightTeamLogo: require('@/assets/ESPADA.png'),
    goals: ["6' Нігрей О.", "38' Воскривенко І. (Роспутько Д.)", "53' Передерій В.", "59' Ковальчук М."]
  },
  {
    title: "ПСЖ-2 2 – 10 АПОЖ",
    leftTeamLogo: require('@/assets/PSG2.png'),
    leftTeamName: "ПСЖ-2",
    leftTeamScore: 2,
    rightTeamScore: 10,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: [
      "5' Ковальчук М. (Воскривенко І.)",
      "7' Воскривенко І. (Ковальчук М.)",
      "28' Ковальчук М. (Завалішин Д.)",
      "30' Лисенко О. (Передерій В.)",
      "31' Ковальчук М. (Завалішин Д.)",
      "33' Воскривенко І.",
      "36' Савченко І.",
      "40’ Савченко І. – червона картка",
      "50' Світлий Р. (Ковальчук М.)",
      "53' Ковальчук М. (Світлий Р.)",
      "55' Ковальчук М. (Світлий Р.)"
    ]
  },
  {
    title: "АПОЖ 3 – 0 Turbo Snails",
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 3,
    rightTeamScore: 0,
    rightTeamName: "Turbo Snails",
    rightTeamLogo: require('@/assets/turbo.png'),
    goals: ["40’ Ковальчук М. (Завалішин Д.)", "54’ Передерій В.", "60’ Дума І. (Світлий Р.)"]
  },
  {
    title: "Angel City 3 – 1 АПОЖ",
    leftTeamLogo: require('@/assets/AngelCity.png'),
    leftTeamName: "Angel City",
    leftTeamScore: 3,
    rightTeamScore: 1,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: ["56’ Нігрей О. (Роспутько Д.)"]
  },],
  
  matchesFour:[
  
  {
    title: "АПОЖ 1 – 2 Прометей",
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 1,
    rightTeamScore: 2,
    rightTeamName: "Прометей",
    rightTeamLogo: require('@/assets/Prometeus (2).png'),
    goals: ["18’ Нігрей О. (Світлий Р.)"]
  },
  {
    title: "АПОЖ 3 – 2 Прометей",
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 3,
    rightTeamScore: 2,
    rightTeamName: "Прометей",
    rightTeamLogo: require('@/assets/Prometeus (2).png'),
    goals: ["27’ Світлий Р. (пенальті)", "45’ Світлий Р.", "56’ Нігрей О. (Дума І.)", "60’ Савченко І. – червона картка"]
  },
  {
    title: "Фортуна 2 – 2 АПОЖ",
    leftTeamLogo: require('@/assets/fortuna.png'),
    leftTeamName: "Фортуна",
    leftTeamScore: 2,
    rightTeamScore: 2,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: ["9’ Ковальчук М.", "22’ Ковальчук М. (Лисенко О.)"]
  },
  {
    title: "АПОЖ 4 – 5 Corplex-2",
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 4,
    rightTeamScore: 5,
    rightTeamName: "Corplex-2",
    rightTeamLogo: require('@/assets/corplex.png'),
    goals: ["9’ Ковальчук М.", "3’ Завалішин Д. (Світлий Р.)", "13’ Ковальчук М.", "23’ Автогол", "52’ Завалішин Д."]
  },],
  matchesFive:[
  {
    title: "Еспада 0 – 2 АПОЖ",
    leftTeamLogo: require('@/assets/ESPADA.png'),
    leftTeamName: "Еспада",
    leftTeamScore: 0,
    rightTeamScore: 2,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: ["16’Нігрей О. (Світлий Р.)", "48’Роспутько Д."]
  },
  {
    title: "АПОЖ 7 – 4 ПСЖ-2",
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 7,
    rightTeamScore: 4,
    rightTeamName: "ПСЖ-2",
    rightTeamLogo: require('@/assets/PSG2.png'),
    goals: ["9’ Воскривенко І. (Передерій В.)", "10’ Білий М.", "21’ Романко Р. (Завалішин Д.)", "30’ Роспутько Д. (Світлий Р.)", "35’ Воскривенко І. (Передерій В.)", "36’ Роспутько Д. (Світлий Р.)", "44’ Розстальний Є. (Передерій В.)"]
  },
  {
    title: "Фортуна 1 – 4 АПОЖ",
    leftTeamLogo: require('@/assets/fortuna.png'),
    leftTeamName: "Фортуна",
    leftTeamScore: 1,
    rightTeamScore: 4,
    rightTeamName: "АПОЖ",
    rightTeamLogo: require('@/assets/MainLogo.png'),
    goals: ["30’ Нігрей О. (Світлий Р.)", "33’ Ковальчук М. (Воскривенко І.)", "47’ Світлий Р. (пенальті)", "60’ Роспутько Д. (Світлий Р.)"]
  },
  {
    title: "АПОЖ 5 – 0 Turbo Snails",
    leftTeamLogo: require('@/assets/MainLogo.png'),
    leftTeamName: "АПОЖ",
    leftTeamScore: 5,
    rightTeamScore: 0,
    rightTeamName: "Turbo Snails",
    rightTeamLogo: require('@/assets/turbo.png'),
    goals: ["19’ Ковальчук М. (Світлий Р.)", "30’ Завалішин Д. (Воскривенко І.)", "35’ Завалішин Д. (Воскривенко І.)", "50’ Воскривенко І. (Завалішин Д.)", "59’ Жигалюк К. (Ковальчук М.)"]
  }],
      }
    }
}

  </script>
  