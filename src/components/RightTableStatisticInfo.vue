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
    imgSrc: require('@/assets/Bilyu.jpg'),
    firstName: "Білий",
    lastName: "Максим",
    goals: 9,
    assists: 1,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/none.png'),
    firstName: "Воскривенко",
    lastName: "Ігор",
    goals: 6,
    assists: 5,
    passes: 2,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/GOALovnia.jpg'),
    firstName: "Головня",
    lastName: "Михайло",
    goals: 4,
    assists: 5,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Dyma.jpg'),
    firstName: "Дума",
    lastName: "Іван",
    goals: 16,
    assists: 1,
    passes: 3,
    yellowCards: 2,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/jugaliuk.jpg'),
    firstName: "Жигалюк",
    lastName: "Костянтин",
    goals: 3,
    assists: 2,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Den.jpg'),
    firstName: "Завалішин",
    lastName: "Денис",
    goals: 18,
    assists: 4,
    passes: 8,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Dimon.jpg'),
    firstName: "Ковальчук",
    lastName: "Дмитро",
    goals: 1,
    assists: 0,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Miha.jpg'),
    firstName: "Ковальчук",
    lastName: "Михайло",
    goals: 21,
    assists: 22,
    passes: 6,
    yellowCards: 4,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Lashch.jpg'),
    firstName: "Лащ",
    lastName: "Віктор",
    goals: 6,
    assists: 1,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Levchenko.jpg'),
    firstName: "Левченко",
    lastName: "Владислав",
    goals: 3,
    assists: 0,
    passes: 0,
    yellowCards: 0,
    redCards: 1,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/none.png'),
    firstName: "Лисенко",
    lastName: "Олексій",
    goals: 5,
    assists: 1,
    passes: 1,
    yellowCards: 2,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/none.png'),
    firstName: "Насінський",
    lastName: "Іван",
    goals: 5,
    assists: 3,
    passes: 0,
    yellowCards: 1,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/DontWarm.jpg'),
    firstName: 'Нігрей',
    lastName: 'Олексій',
    goals: 12,
    assists: 8,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/Perederiy.jpg'),
    firstName: 'Передерій',
    lastName: 'Володимир',
    goals: 7,
    assists: 2,
    passes: 4,
    yellowCards: 1,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/Rozstalniy.jpg'),
    firstName: 'Розстальний',
    lastName: 'Євген',
    goals: 7,
    assists: 1,
    passes: 0,
    yellowCards: 1,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/Romanko.jpg'),
    firstName: 'Романко',
    lastName: 'Роман',
    goals: 16,
    assists: 1,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: '-2'
  },
  {
    imgSrc: require('@/assets/Rosputko.jpg'),
    firstName: 'Роспутько',
    lastName: 'Дмитро',
    goals: 19,
    assists: 6,
    passes: 4,
    yellowCards: 1,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/Savchenko.jpg'),
    firstName: 'Савченко',
    lastName: 'Іван',
    goals: 14,
    assists: 1,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: '',
    fioletColor: 2
  },
  {
    imgSrc: require('@/assets/Rysia.jpg'),
    firstName: 'Світлий',
    lastName: 'Руслан',
    goals: 18,
    assists: 8,
    passes: 14,
    yellowCards: 1,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/SweetValik.jpg'),
    firstName: 'Солодкий',
    lastName: 'Валентин',
    goals: 2,
    assists: 2,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/none.png'),
    firstName: 'Шепель',
    lastName: 'Максим',
    goals: 4,
    assists: 2,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/Chell.jpg'),
    firstName: 'Чєловєчков',
    lastName: 'Максим',
    goals: 19,
    assists: -51,
    passes: 0,
    yellowCards: 1,
    redCards: 0,
    penalty: '-2.68'
  },
  
        ],
      };
    }
  };
  </script>