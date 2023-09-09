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
    firstName: "Алімов",
    lastName: "Олександр",
    goals: 1,
    assists: 4,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Bilyu.jpg'),
    firstName: "Білий",
    lastName: "Максим",
    goals: 8,
    assists: 1,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/none.png'),
    firstName: "Воскривенко",
    lastName: "Ігор",
    goals: 2,
    assists: 1,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Dyma.jpg'),
    firstName: "Дума",
    lastName: "Іван",
    goals: 4,
    assists: 0,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Den.jpg'),
    firstName: "Завалішин",
    lastName: "Денис",
    goals: 5,
    assists: 0,
    passes: 3,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Miha.jpg'),
    firstName: "Ковальчук",
    lastName: "Михайло",
    goals: 9,
    assists: 8,
    passes: 4,
    yellowCards: 2,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/KotovD.png'),
    firstName: 'Котов',
    lastName: 'Дмитро',
    goals: 3,
    assists: 0,
    passes: 0,
    yellowCards: 1,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/KotovM.png'),
    firstName: 'Котов',
    lastName: 'Максим',
    goals: 4,
    assists: 1,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/DontWarm.jpg'),
    firstName: 'Нігрей',
    lastName: 'Олексій',
    goals: 6,
    assists: 2,
    passes: 2,
    yellowCards: 0,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/Perederiy.jpg'),
    firstName: 'Передерій',
    lastName: 'Володимир',
    goals: 8,
    assists: 3,
    passes: 4,
    yellowCards: 0,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/Rozstalniy.jpg'),
    firstName: 'Розстальний',
    lastName: 'Євген',
    goals: 8,
    assists: 1,
    passes: 2,
    yellowCards: 0,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/Rosputko.jpg'),
    firstName: 'Роспутько',
    lastName: 'Дмитро',
    goals: 7,
    assists: 3,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/Savchenko.jpg'),
    firstName: 'Савченко',
    lastName: 'Іван',
    goals: 8,
    assists: 0,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: '',
  },
  {
    imgSrc: require('@/assets/Rysia.jpg'),
    firstName: 'Світлий',
    lastName: 'Руслан',
    goals: 9,
    assists: 8,
    passes: 5,
    yellowCards: 0,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/SweetValik.jpg'),
    firstName: 'Солодкий',
    lastName: 'Валентин',
    goals: 2,
    assists: 0,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/Chell.jpg'),
    firstName: 'Чєловєчков',
    lastName: 'Максим',
    goals: 8,
    assists: -19,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: '-2.37'
  },
  
        ],
      };
    }
  };
  </script>
  