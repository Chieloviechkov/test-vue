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
    goals: 3,
    assists: 3,
    passes: 2,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/none.png'),
    firstName: "Воскривенко",
    lastName: "Ігор",
    goals: 5,
    assists: 1,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/GOALovnia.jpg'),
    firstName: "Головня",
    lastName: "Михайло",
    goals: 9,
    assists: 9,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: "-1"
  },
  {
    imgSrc: require('@/assets/none.png'),
    firstName: "Городній",
    lastName: "Іван",
    goals: 2,
    assists: 1,
    passes: 3,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Dyma.jpg'),
    firstName: "Дума",
    lastName: "Іван",
    goals: 2,
    assists: 1,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/jugaliuk.jpg'),
    firstName: "Жигалюк",
    lastName: "Костянтин",
    goals: 4,
    assists: 1,
    passes: 2,
    yellowCards: 0,
    redCards: 0,
    penalty: "-1"
  },
  {
    imgSrc: require('@/assets/Den.jpg'),
    firstName: "Завалішин",
    lastName: "Денис",
    goals: 9,
    assists: 2,
    passes: 2,
    yellowCards: 1,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/Miha.jpg'),
    firstName: "Ковальчук",
    lastName: "Михайло",
    goals: 11,
    assists: 14,
    passes: 7,
    yellowCards: 1,
    redCards: 0,
    penalty: ""
  },
  {
    imgSrc: require('@/assets/DontWarm.jpg'),
    firstName: 'Нігрей',
    lastName: 'Олексій',
    goals: 9,
    assists: 6,
    passes: 3,
    yellowCards: 2,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/Romanko.jpg'),
    firstName: 'Романко',
    lastName: 'Роман',
    goals: 3,
    assists: 0,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/Rosputko.jpg'),
    firstName: 'Роспутько',
    lastName: 'Дмитро',
    goals: 10,
    assists: 2,
    passes: 4,
    yellowCards: 0,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/Savchenko.jpg'),
    firstName: 'Савченко',
    lastName: 'Іван',
    goals: 10,
    assists: 1,
    passes: 0,
    yellowCards: 1,
    redCards: 0,
    penalty: '',
  },
  {
    imgSrc: require('@/assets/Rysia.jpg'),
    firstName: 'Світлий',
    lastName: 'Руслан',
    goals: 11,
    assists: 4,
    passes: 9,
    yellowCards: 1,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/SweetValik.jpg'),
    firstName: 'Солодкий',
    lastName: 'Валентин',
    goals: 2,
    assists: 1,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/none.png'),
    firstName: 'Терєшков',
    lastName: 'Антон',
    goals: 1,
    assists: 1,
    passes: 1,
    yellowCards: 0,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/none.png'),
    firstName: 'Шепель',
    lastName: 'Максим',
    goals: 6,
    assists: 0,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: ''
  },
  {
    imgSrc: require('@/assets/none.png'),
    firstName: 'Кіпріянов',
    lastName: 'Владислав',
    goals: 1,
    assists: -2,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: '-2'
  },
  {
    imgSrc: require('@/assets/none.png'),
    firstName: 'Михальчук',
    lastName: 'Данило',
    goals: 1,
    assists: -5,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: '-5'
  },
  {
    imgSrc: require('@/assets/Chell.jpg'),
    firstName: 'Чєловєчков',
    lastName: 'Максим',
    goals: 8,
    assists: -15,
    passes: 0,
    yellowCards: 0,
    redCards: 0,
    penalty: '-1.87'
  },
  
        ],
      };
    }
  };
  </script>
  