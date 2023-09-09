<template>
    <div class="player-cont">
      <card-apozh-player v-for="player in players" :key="player.number" :player="player" />
    </div>
  </template>
  
  <script>
  import CardApozhPlayer from '@/components/CardApozhPlayer.vue';
  
  export default {
    components: {
      CardApozhPlayer
    },
    data() {
    return {
      players: [
      {
          number: '06',
          lastName: 'Білий',
          firstName: 'Максим',
          position: 'Захисник',
          birthdate: '28.05.1992',
          image: require('@/assets/Bilyu2.jpg')
        },
        {
          number: '11',
          lastName: 'Дума',
          firstName: 'Іван',
          position: 'Захисник',
          birthdate: '11.03.1990',
          image: require('@/assets/Dyma.jpg')
        },
        {
          number: '77',
          lastName: 'Ковальчук',
          firstName: 'Дмитро',
          position: 'Півзахисник',
          birthdate: '05.11.1991',
          image: require('@/assets/Dimon.jpg')
        },
        {
          number: '81',
          lastName: 'Ковальчук',
          firstName: 'Михайло',
          position: 'Форвард',
          birthdate: '05.07.1999',
          image: require('@/assets/Miha.jpg')
        },
        {
        number: '23',
        lastName: 'Завалішин',
        firstName: 'Денис',
        position: 'Півзахисник',
        birthdate: '05.10.1999',
        image: require('@/assets/Den.jpg')
        },
        {
        number: '01',
        lastName: 'Нігрей',
        firstName: 'Олексій',
        position: 'Півзахисник',
        birthdate: '26.10.2000',
        image: require('@/assets/DontWarm.jpg')
        },
        {
        number: '02',
        lastName: 'Передерій',
        firstName: 'Володимир',
        position: 'Півзахисник',
        birthdate: '31.01.2003',
        image: require('@/assets/Perederiy.jpg')
        },
        {
        number: '03',
        lastName: 'Розстальний',
        firstName: 'Євген',
        position: 'Захисник',
        birthdate: '03.06.1990',
        image: require('@/assets/Rozstalniy2.jpg')
        },
        {
        number: '10',
        lastName: 'Роспутько',
        firstName: 'Дмитро',
        position: 'Форвард',
        birthdate: '03.04.1999',
        image: require('@/assets/Rosputko.jpg')
        },
        {
        number: '22',
        lastName: 'Савченко',
        firstName: 'Іван',
        position: 'Захисник',
        birthdate: '22.11.1998',
        image: require('@/assets/Savchenko.jpg')
        },
        {
        number: '8',
        lastName: 'Світлий',
        firstName: 'Руслан',
        position: 'Півзахисник',
        birthdate: '02.02.1999',
        image: require('@/assets/Rysia.jpg')
        },
        {
        number: '15',
        lastName: 'Солодкий',
        firstName: 'Валентин',
        position: 'Півзахисник',
        birthdate: '10.09.1999',
        image: require('@/assets/SweetValik.jpg')
        },
        {
        number: '71',
        lastName: 'Чєловєчков',
        firstName: 'Максим',
        position: 'Голкіпер',
        birthdate: '16.02.2001',
        image: require('@/assets/Chell2.jpg')
        },
        {
        number: '04',
        lastName: 'Воскривенко',
        firstName: 'Ігор',
        position: 'Півзахисник',
        birthdate: '12.02.1996',
        image: require('@/assets/none.png')
        },
        {
        number: '3',
        lastName: 'Алімов',
        firstName: 'Олександр',
        position: 'Півзахисник',
        birthdate: '10.06.2004',
        image: require('@/assets/none.png')
        },
        {
        number: '7',
        lastName: 'Жигалюк',
        firstName: 'Костянтин',
        position: 'Форвард',
        birthdate: '18.03.1997',
        image: require('@/assets/jugaliuk.jpg')
        },
      ]
    };
  },
  
}
  </script>
  