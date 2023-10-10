<template>
    <div>
      <RightTableStatistic :dataRows="matchesData" />
    </div>
  </template>
  
  <script>
  import RightTableStatistic from "@/components/RightTableStatistic.vue";
  
  export default {
    components: {
        RightTableStatistic
    },
    data() {
      return {
        matchesData: [
  {
    imgSrc: require('@/assets/none.png'),
    firstName: "Воскривенко",
    lastName: "Ігор",
    goals: 1,
    assists: 0,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Dyma.jpg'),
    firstName: "Дума",
    lastName: "Іван",
    goals: 1,
    assists: 0,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Den.jpg'),
    firstName: "Завалішин",
    lastName: "Денис",
    goals: 0,
    assists: 1,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Miha.jpg'),
    firstName: "Ковальчук",
    lastName: "Михайло",
    goals: 7,
    assists: 2,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/KotovD.png'),
    firstName: "Котов",
    lastName: "Дмитро",
    goals: 0,
    assists: 1,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/KotovM.png'),
    firstName: "Котов",
    lastName: "Максим",
    goals: 0,
    assists: 0,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/DontWarm.jpg'),
    firstName: "Нігрей",
    lastName: "Олексій",
    goals: 0,
    assists: 3,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Perederiy.jpg'),
    firstName: "Передерій",
    lastName: "Володимир",
    goals: 1,
    assists: 1,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Rozstalniy2.jpg'),
    firstName: "Розстальний",
    lastName: "Євген",
    goals: 0,
    assists: 0,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Rosputko.jpg'),
    firstName: "Роспутько",
    lastName: "Дмитро",
    goals: 2,
    assists: 2,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Savchenko.jpg'),
    firstName: "Савченко",
    lastName: "Іван",
    goals: 0,
    assists: 1,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Rysia.jpg'),
    firstName: "Світлий",
    lastName: "Руслан",
    goals: 6,
    assists: 1,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Kiryk.jpg'),
    firstName: "Кірик",
    lastName: "Антон",
    goals: 3,
    assists: 0,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: "1"
  },
  {
    imgSrc: require('@/assets/Chell2.jpg'),
    firstName: "Чєловєчков",
    lastName: "Максим",
    goals: 4,
    assists: 0,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: "2"
  }
]

      };
    }
  };
  </script>
  