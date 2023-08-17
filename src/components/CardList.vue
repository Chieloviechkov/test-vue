<template>
  <div class="flex">
    <div v-for="card in cards" :key="card.id" class="card">
      <img :src="card.photo" alt="Фото" class="card-photo">
      <h2 class="card-title">{{ card.title }}</h2>
      <p class="card-description">{{ card.description }}</p>
      <div class="additional-photos">
        <img v-for="photo in card.additionalPhotos" :key="photo.id" :src="photo" alt="Дополнительное фото" class="additional-photo">
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      cards: [
        { id: 1, title: 'Dan Burykin', description: 'Vue.JS Developer', photo: require('@/assets/Avatar1.png'), additionalPhotos: [require('@/assets/VueJs.png')] },
        { id: 2, title: 'Esi Doda', description: 'Software Developer', photo: require('@/assets/Avatar2.png'), additionalPhotos: [require('@/assets/Angular.png'), require('@/assets/Flutter.png'), require('@/assets/ReactJS.png')] },
        { id: 3, title: 'Alex Harper', description: 'RN Executive', photo: require('@/assets/Avatar3.png'), additionalPhotos: [require('@/assets/JAVA.png'), require('@/assets/ReactJS.png')] },
        { id: 4, title: 'Amarna Miller', description: 'Frontend Wizard', photo: require('@/assets/Avatar4.png'), additionalPhotos: [require('@/assets/HTML.png'), require('@/assets/CSS.png')] }
      ]
    };
  }
};
</script>

<style>
.card {
  background: white;
  border-radius: 1rem;
  margin-right: 1rem;
  filter: drop-shadow(0px 0px 10px rgba(45, 54, 64, 0.05));
  padding: 3rem 0 0 0;
  width: 14.75rem;
  height: 21.5rem;
}

.card-photo {
  width: 5.5rem;
  max-width: 100%;
  height: auto;
  background: radial-gradient(ellipse at center, #7FADF4 8%, #6181F7 100%);
  border-radius: 50%;
  box-shadow: 0px 0px 0px 9px rgba(127, 173, 244, 0.08),
              0px 0px 0px 15px rgba(127, 173, 244, 0.1),
              0px 0px 0px 21px rgba(127, 173, 244, 0.12);
}
.card-title{
  margin-top: 2rem;
  color: #2D3640;
text-align: center;
font-family:'Catamaran', sans-serif; 
font-size: 1rem;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: -0.03906rem;
}
.card-description{
  color: #4B4F52;
text-align: center;
font-family:'Catamaran', sans-serif; 
font-size: 0.8rem;
font-style: normal;
font-weight: 300;
line-height: normal;
}
.additional-photo{
  width: 2.5rem;
  padding: 0.5rem;
  padding-top: 2rem;
}
</style>
