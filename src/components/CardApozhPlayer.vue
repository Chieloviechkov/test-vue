<template>
    <div class="image-container">
      <img class="player-photo" :src="player.image" :alt="player.firstName">
      <div class="black-overlay">
        <h3 class="name-player">{{ player.lastName }}<p>{{ player.firstName }}</p></h3>
        <h1 class="custom-color player-number">{{ player.number }}</h1>
        <p>{{ player.position }}</p>
        <p id="birthdate">{{ player.birthdate }}<span id="age">({{ calculateAge(player.birthdate) }})</span></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      player: Object
    },
    methods: {
      calculateAge(birthdate) {
        const today = new Date();
        const parts = birthdate.split('.');
        const birthDate = new Date(`${parts[1]}/${parts[0]}/${parts[2]}`);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
    
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
          age--;
        }
    
        return age;
      }
    }
  }
  </script>

  