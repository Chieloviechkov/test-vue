<template>
    <div class="block-static">
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div v-for="(item, index) in carouselItems" :key="index" :class="['carousel-item', { 'active': index === 0 }]">
            <img class="d-block w-100" :src="getImagePath(item)">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <div class="border-custom mt-3">
        <table class="fiolet-color custom-two table-dark br-1">
          <tr class="custom-two">
              <h2 class="text-center h2">Статистика з 30.10.2019 року</h2>
            <th scope="col" class="custom-table-two">Матчі</th>
            <th scope="col" class="custom-table-two">Перемоги</th>
            <th scope="col" class="custom-table-two">Нічиї</th>
            <th scope="col" class="custom-table-two">Поразки</th>
            <th scope="col" class="custom-table-two">Забиті голи</th>
            <th scope="col" class="custom-table-two">Пропущені голи</th>
          </tr>
          <tr class="custom-table-two">
            <td class="custom-table-two custom-color">85</td>
            <td class="custom-table-two custom-color">44</td>
            <td class="custom-table-two custom-color">3</td>
            <td class="custom-table-two custom-color">38</td>
            <td class="custom-table-two custom-color">371(10)</td>
            <td class="custom-table-two custom-color">308(5)</td>
          </tr>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      getImagePath(item) {
        return Object.values(item)[0];
      },
    },
    data() {
      return {
        carouselItems: [
          { One: require('@/assets/slider2.png') },
          { Two: require('@/assets/carouselFoto.jpg') },
          { Three: require('@/assets/IMG_0139.png') },
          { Four: require('@/assets/slider4.jpg') },
          { Five: require('@/assets/slider1.jpg') },
          { Six: require('@/assets/slider3.jpg') },
         
        ],
      };
    },
  };
  </script>
  