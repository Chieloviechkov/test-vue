<template>
  <div id="app">
    <HeaderView></HeaderView> 
    <LastGames></LastGames>
    <router-view></router-view>
    <FooterApozh></FooterApozh>
  </div>
</template>

<script>
import HeaderView from './components/HeaderView.vue'; 
import LastGames from './components/LastGames.vue';
import FooterApozh from './components/FooterApozh.vue';


export default {
  name: 'App',
  components: {
    HeaderView,
    LastGames,
    FooterApozh
  },
  data() {
    return {
      
    };
  },
};

</script>

<style>
html{
  background-color: black
}
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&display=swap');
@import url('https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css');



html{
    background-color: black;
  }
body{
    font-family: Arial, Helvetica, sans-serif;
    width: 94rem;
    background-color: black;
}

.header{
    display: flex;
    flex-wrap: nowrap;
    background: black;
    justify-content: space-between;
    align-items: center;
    z-index: 100;
    transition: top 0.3s;
}
.nav-a{
    font-size: 1.2rem;
    color: white;
    padding: 1rem;
    cursor: pointer;
}
.nav-a:hover{
    text-decoration: none;
    text-align: center;   
    font-size: 1.35rem;
    transition: 0.25s;
    color: rgb(197, 26, 238);
    text-shadow:
    0 0 5px rgb(242, 0, 255),
    0 0 11px rgb(144, 19, 151),
    0 0 20px rgb(144, 19, 151),
    0 0 30px rgb(144, 19, 151),
    0 0 55px rgb(144, 19, 151),
    0 0 85px rgb(144, 19, 151);
}
.custom-hover:hover{
    transition: 0.2s;
    font-size: 1.35rem;
    text-shadow:
    0 0 1px rgb(185, 87, 212),
    0 0 11px rgb(197, 26, 238),
    0 0 20px rgb(197, 26, 238),
    0 0 30px rgb(197, 26, 238),
    0 0 55px rgb(197, 26, 238),
    0 0 85px rgb(197, 26, 238);
}

.logo-img{
    cursor: pointer;
    height: 4rem;
    width: 4rem;
    margin-left: 3rem;
    filter: drop-shadow(0 0 0 transparent);
}
.logo-img:hover{
    height: 4.5rem;
    width: 4.5rem;
    filter: drop-shadow(0 0 20px rgb(200, 0, 255));    
    transition: 0.25s ease-in-out;
}
.logo-img:hover::after{
    filter: drop-shadow(0 0 10px rgb(185, 87, 212));    
}
.logo-img-ksl{
    cursor: pointer;
    height: 5.2rem;
    width: 5.2rem;
}
.logo-img-ksl:hover{
    transform: scale(1.1);
    transition: 0.2s;
}
.social {
    cursor: pointer;
    flex-direction: row;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
}
.social:hover{
    width: 3rem;
    height: 3rem;
    transition: 0.25s;
}
.bkg-black{
    background: black ;
}
.img-table{
    width: 1.6rem;
}
.img-main-table{
    width: 2rem;
}


.container-bottom-nav{
    display: flex;
    width: 98%;
    background: rgba(241, 245, 249, 0.981);
    margin-top: 0.1rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    height: 3.5rem;
    flex-wrap: nowrap;
    margin-bottom: 0.5rem;
    margin-left: 2%;
    position: relative;
}
.fiolet{
    color: rgb(148, 0, 156);
    padding:0.7rem;
    cursor: pointer;
}
.fiolet:hover{
    color: rgb(77, 13, 90);
}
.matches{
    overflow: hidden;
    word-wrap: break-all;
    margin-bottom:0.3rem ;
    margin-top: 0.3rem;
    margin-left: 0.5%;
    display: flex;
    width: 99%;
    border-radius: 0.5rem;
    flex-wrap: nowrap;
    background: black;
    align-items:center;
    cursor:default;
    justify-content: space-evenly;
    padding-left: 9rem;
    padding-right: 1rem;
}
.prigvozdka-one,.prigvozdka-two{
    position: absolute;
}
.prigvozdka-one{
left: 8rem;
}
.prigvozdka-two{
right: 0.5rem;
}
.border-score{
    padding-right: 1.5rem;
}

.name-winner{
    color: rgb(197, 26, 238);
    font-size: 0.85rem;
    white-space: nowrap;
}
.name-1{
    color: white;
    font-size: 0.825rem;
}
.name-score{
    color: white;
    font-size: 0.825rem;
    margin: 0 1rem 0 1rem;
}

.padding-left-05{
    padding-left: 0.5rem;
}
.font-weight-max{
    color: white;
    font-weight: 900;
}
.matches-apozh{
    position: absolute;
    left: 2rem;
    white-space: nowrap;
    color: white;
    font-size: 0.85rem;
    list-style-type: none;

}

.padding-left-7{
    padding-left: 8rem;
}
.matches-logo{
    height: 2rem;
    margin: 0.6rem 0.6rem;
}
.fiolet-color{
    color: rgb(197, 26, 238);
}
.custom-color:hover{
    text-decoration: none;
    color: rgb(197, 26, 238);
}

.fiolet-bkg{
    background-color: rgb(144, 19, 151);
}
.cont-weather{
    display: flex;
    background-color: rgb(34, 4, 37);
    border-radius: 1rem;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    height: 8rem;
    width: 15rem;
    justify-content: space-between;
    flex-direction: row;
  }
  .temperature-card{
    width: 2rem;
    height: 5rem;
  }
  .weather-card{
    width: 2rem;
    height: 6rem;
  }

  .login{
    width: 2rem;
    cursor: pointer;
  }
  .login:hover{
    width: 2.5rem;
    transition: 0.25s;
}
/*
@media screen and (max-width:800px) {
.matches{
    display: none;
}
.container-bottom-nav{
    display: none;
}
}
*/
@media screen and (max-width:767px)  {
*{
    font-size: 1rem;
    max-width: 30rem;
}
.body{
    font-size: 0.5rem;
}
.nav-a{
    font-size: 1rem;
    padding: 0.15rem
}
.nav-a:hover{
    font-size: 1rem;
}
.logo-img{
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    height: 3.5rem;
    width: 3.5rem;
    margin-left: 0rem;
    margin-right: -1rem;
}
.logo-img:hover{
    height: 3.7rem;
    width: 3.7rem;
}
.logo-img-ksl{
    display: none;
}
.social, .login{
    width: 2rem;
    height: 2rem;
}
.login{
    margin-top: 0.2rem;
}
.social:hover, .login:hover{
    width: 2rem;
    height: 2rem;
}
.header{
    flex-direction: row;
    height: 5.5rem;
}
.navbar{
    display: none;
}
.container-bottom-nav{
    flex-direction: row;
}
.matches{
    flex-direction: row;
    padding: 0rem;
}
.name-1{
    font-size: 0.6;
}
.matches-apozh{
    display: none;
}
.matches-logo{
    height: 1.6rem;
    padding: 0;
    margin: 0 0.2rem 0 0.2rem;
}
.name-score{
    margin: 0.2rem;
}
.name-winner{
    font-size: 0.6rem;
}
.prigvozdka-one{
    left: 0rem;
}
.prigvozdka-two{
    right: 0rem;
}
.container-all{
    flex-direction: column;
    align-items: center;
}
.border-score{
    display: none;
}
.carousel-indicators{
    display: none;
}
.slide{
    height: 20rem;
}
.d-block{
    margin-top: 0.5rem;
    height: 20rem;
    border-radius: 1rem;
}
.news:hover{
    font-size: 1.5rem;
}
.border-custom{
    margin-bottom: 0.5rem;
}
.photo-cont{
    grid-template-columns: 1fr !important;
}
.photo-cont .carousel-photo{
    width: 26rem;
}
.photo-cont .slide-photo{
    width: 26rem;
    height: 17rem;
}
.photo-viewer .left-button-full {
    left: 5%;
}

.photo-viewer .right-button-full {
    right: 5%;
}

.photo-viewer .slide-button, .slide-photo .slide-button{
    height: 2rem;
}
.player-cont{
  grid-template-columns: repeat(2, 1fr) !important;
  gap: 2rem;
  row-gap: 2rem !important;
  margin-left: 15%;
}
.image-container .player-photo{
    width: 13rem;
}
.photo .image-container{
    width: 13rem;
    height: 13rem;
}
.image-container .player-number{
    margin-bottom: 0;
    margin-top: -0.5rem;
}
.achievements .slide-title{
   margin-left: 1rem; 
   width: 95%;  
}

}

.slide-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    opacity: 0.5;
    z-index: 1; 
    height: 1rem;
  }
  
  .left-button {
    left: 0.5rem;
  }
  .left-button-full{
    left: 19%;
    width: 2rem;
    height: 2rem;
  }
  .right-button-full{
    right: 19%;
    width: 2rem;
    height: 2rem;
  }
  .photo{
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .right-button {
    right: 0.5rem;
  }
  .carousel-photo {
    border-radius: 1rem;
    width: 21rem;
    overflow: hidden;
    position: relative;
  }
  
  .photo-viewer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    cursor: pointer;
  }
  
  .photo-viewer img {
    max-width: 90%;
    max-height: 90%;
  }
  
  .close-fullscreen {
    position: absolute;
    top: 20px;
    right: 20px;
    border: none;
    background-color: #540f5e;
    padding: 10px 20px;
    cursor: pointer;
  }
  .slides-photo {
    display: flex;
    transition: transform 0.3s ease-in-out;
  }
  
  .slide-photo {
    flex-shrink: 0;
    width: 21rem;
    height: 15rem;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  .photo-cont {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
    padding: 2rem;
  }
  .hover-text {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    font-size: 14px;
    text-align: center;
  }
  


.form-control{
    caret-color: rgb(197, 26, 238);
    font-size: smaller;
}
.form-control:focus{
    border-color: rgb(144, 19, 151);
    box-shadow: 0 0 0 5px rgb(67, 13, 72),
    0 0 0 6px rgb(59, 12, 63),
    0 0 0 7px rgb(48, 11, 52),
    0 0 0 8px rgb(44, 9, 47),
    0 0 0 9px rgb(33, 7, 35),
    0 0 0 10px rgb(17, 4, 18);
}
.searth{
    height: 1rem;
    width: 1rem;
    position: absolute;
    right: 2rem;
    cursor: pointer;
}
.searth:hover{
    height: 1.5rem;
    width: 1.5rem;
    transition: 0.25s;
}
@keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
.matches-item-one,.matches-item-two,.matches-item-three{
   animation: fadeIn 0.5s ease-in-out;
   overflow: hidden;
}



.slider-button{
    width: 1.5rem;
  }
  .achievements{
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      padding: 1rem;

 }
 .title-text{
    font-size: large;
 }
 .left-title-slider {
    display: flex;
    flex-direction: column-reverse;
    height: fit-content;
    padding: 0.3rem;
    border-radius: 1rem;
  position: relative;
  z-index: 2;
  width: 31rem;
}
.img-achievements {
    width: 30rem;
    height: 36rem;
    border-radius: 1rem;
  }
  .img-news{
    width: 50rem;
    border-radius: 1rem;
  }
  .slide-overlay-news-two{
        cursor: default;
        position: absolute;
        height: 10rem;
        width: 100%;
        bottom: 1rem;
        color: white;
        padding: 20px;
        background-color: rgba(0, 0, 0, 0.700);
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
  }
  .img-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slide-title {
    margin-bottom: 1rem;
    text-align: center;
    width: 30rem;
    cursor: pointer;
    padding: 1rem;
    transition: 0.3s;
    border-radius: 1rem;
  }
  
  .slide-title:hover {
    width: 32rem;
    background-color: #540f5e;
    transition: 0.5s ease-in-out;
  }
  .title-in-slider{
    padding-top: 1rem;
    font-size: larger;
    color:  white;
    margin-top: -1rem;
  }
  .dark-fiolet-color{
    color:  rgb(211, 0, 255);
    font-size: small;
  }
  .slide-content {
    position: relative;
    display: flex;
    flex-direction: column; 
    align-items: center;
  }
  .slide-overlay {
  cursor: default;
  position: absolute;
  width: 100%;
  bottom: 0.4rem;
  color: white;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.700);
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
}
.slide-overlay-news {
    cursor: default;
    position: absolute;
    height: 10rem;
    width: 100%;
    bottom: 5rem;
    color: white;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.700);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
  }
.prev-button{
    position: absolute;
    top: -12rem;
    border: none;
    background: none;
}
.next-button{
    position: absolute;
    right: 1rem;
    top: -12rem;
    border: none;
    background: none;
}
.next-button:active,
.next-button:focus,
.prev-button:active,
.prev-button:focus{
    outline: none;
    border: none;
}
.mini-box-shadow{
    box-shadow: 0 0 0 2px rgba(67, 13, 72, 0.725),
    0 0 0 5px rgba(59, 12, 63, 0.600),
    0 0 0 8px rgba(48, 11, 52, 0.450);
}


.container-all{
    display: flex;
}
.container-two{
    color: white;
    margin-left: 2%;
    border-radius: 1rem;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
    height: 36rem;
}
.news{
    margin-top: 0.75rem;
    font-size: 0.9rem;
    padding: 0.1rem;
    height: 3rem;
    padding-left: 1rem;
}
.cont-news:hover, .cont-news2:hover{
    background-color: rgb(148, 0, 156);
    transition: 0.2s;
}
.news:hover{
    font-size: 0.95rem;
    transition: 0.2s;
}
.cont-news{
    cursor: pointer;
    margin-top: 0.3rem;
    border: 2px solid #212529;
    border-radius: 1rem;
    height: 6rem;
}
.news-img{
    width: 1.3rem;
}
.shadow{
    cursor: pointer;
    
    color: rgba(255, 255, 255, 0.175);
}
.shadow:hover{
    font-size: larger;
    color:rgba(255, 255, 255, 0.550 ); 
    transition: 0.2s;
}
.news-bottom{
    padding-top: 0.5rem;
    font-size: large;
}

.carousel-indicators{
    bottom: -1.2rem;
}
.carousel-inner{
    border-radius: 1rem;
    width: 41.5rem;
    height: 28rem;
}
.carousel-item{
    height: 20rem;
    width: 42rem;

}






.bg-none{
    background: none;
}
.bg-none:focus{
outline: none;
}
.custom{
 border-radius: 1rem;
}
.custom tr:last-child{
    border-radius: 50rem ;
}
.custom-color{
color: rgb(197, 26, 238);
}
.h2{
    font-size: medium;
    color: white;
    cursor: default;
}


.custom-two{
    cursor: default;
    border-radius: 1rem;
}
.border-custom{
    border: 0.5rem solid white; 
    margin-top: -1rem;
    display: flex;
    flex-direction: column;
    border-radius: 1.5rem;
    padding: 0.5rem;
    width: 41.5rem;
}
.table-dark{
background-color: rgb(34, 4, 37);
}
.custom-table-hover{
    background-color: rgb(34, 4, 37);
    color: white;
    padding: 0.5rem;
}
.custom-table{
    padding: 0.44rem;
}
.br-1{
    border-radius: 1rem;
}
.table-row {
  border-top: 2px solid #7d7d7d;
  cursor: default;
}
.custom-table-bottom{
    border-radius: 1rem;
    padding: 0.5rem;
    cursor: pointer;
    background-color:rgb(34, 4, 37);
}
.border-radius-bottom-left{
    border-radius: 0rem 0rem 0rem 1rem;
}
.border-radius-bottom-right{
    border-radius: 0rem 0rem 1rem 0rem;
}



.block-static{
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    margin-right: 1rem;
}


.statistic-dother-cont{
    margin-bottom: 0;
    display: flex;
    padding: 0.65rem;
    border-radius: 2rem;
    background-color: rgb(34, 4, 37);
    height: 13.5rem;
    text-align: center;
    color: white;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    overflow: hidden;
}
.flex-center{
    align-items: center;
    justify-content: center;
}
.title-head{
    display: flex;
    flex-wrap: nowrap;
    color: rgb(197, 26, 238);
    font-size: x-large;
    cursor:default;
    width: 30rem;
    justify-content: center;
}
.bkg-white-title{
    margin-top: 1rem;
    margin-bottom: 1rem;
    background-color: white;
    border-radius: 1rem;
    margin-left: 35%;
    padding: 0.3rem;
    width: 31rem;
}
.bkg-black-title{
    background-color: black;
    border-radius: 1rem;
    width: 100%;
}


.font-size-title{
    font-size: larger;
}
.text-light:hover{
    text-decoration: none;
}



.title{
    text-align:justify;
    color: white;
    font-size: larger;
    cursor:default;
    font-size: normal;
    width: max-content;
}

.title-img{
    margin: 0.25rem;
    width: 1.5rem;
}
.matches-statistic{
    word-wrap:wrap;
    border-radius: 1rem;
    font-size: x-small;
    position: relative;
}
.matches-statistic::after {
    content: "";
    position: absolute;
    left: 1%;
    top: 0.25rem;
    width: 10rem;
    background-color: rgba(93, 24, 110, 0.191);
  }
.border-line-bottom, .border-line-bottom-two{
    font-size: x-small;
    padding: 0.65rem;
    position: relative;
}
.border-line-bottom:not(:last-child)::after{
  content: "";
  position: absolute;
  left: 10%;
  width: 80%;
  height: 2.5px;
  background-color: rgba(93, 24, 110, 0.191);
}
.border-line-bottom-two::after{
  content: "";
  position: absolute;
  bottom: -900%;
  left: 1rem;
  width: 100%;
  height: 2.5px;
  background-color: rgba(93, 24, 110, 0.191);
}
.imageintable{
    width: 3rem;
}
.statistic-right{
 margin-right: 0.5rem;
}

.container-all-statistic{
    display: flex;
    align-items: flex-start;
    margin-left: 3%;
}
.statistic-dother-cont-top{
    border-radius: 1rem;
    background-color: rgb(34, 4, 37);
    text-align: center;
    color: white;
}

.font-size-1{
    font-size: 0.925rem;
}
.font-size-2{
    font-size: 0.85rem;
}


.custom-hover-big:hover{
    transition: 0.2s;
    font-size: 1.6rem;
    text-shadow:
    0 0 1px rgb(185, 87, 212),
    0 0 11px rgb(197, 26, 238),
    0 0 20px rgb(197, 26, 238),
    0 0 30px rgb(197, 26, 238),
    0 0 55px rgb(197, 26, 238),
    0 0 85px rgb(197, 26, 238),
    0 0 95px rgb(241, 236, 243);
}


/* PLAYERS */

.image-container {
    position: relative;
    width: 16rem;
    height: 16rem;
    cursor: default;
  }
  
.player-cont{
    margin-right: 5rem;
    display: grid;
    grid-template-columns: 10rem 10rem 10rem 10rem;
    row-gap: 3rem;
    justify-content: space-evenly;
}

.player-photo{
    border-radius: 1rem;
    width: 16rem;
    box-shadow: 0 0 0 5px rgba(67, 13, 72, 0.725),
    0 0 0 10px rgba(59, 12, 63, 0.600),
    0 0 0 15px rgba(48, 11, 52, 0.450),
    0 0 0 20px rgba(44, 9, 47, 0.215),
    0 0 0 25px rgba(48, 11, 52, 0.115);
}
.black-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    background-color: rgba(0, 0, 0, 0.7); 
    color: #fff; 
    text-align: center;
    padding: 1rem; 
    opacity: 0; 
    transition: opacity 0.3s ease; 
  }
  
  .image-container:hover .black-overlay {
    opacity: 1; 
  }
  .player-number{
    border-bottom: 3px solid white;
    margin-bottom: 2.5rem;
  }
  
.box-shadow{
    box-shadow: 0 0 0 5px rgba(67, 13, 72, 0.725),
    0 0 0 10px rgba(59, 12, 63, 0.600),
    0 0 0 15px rgba(48, 11, 52, 0.450),
    0 0 0 20px rgba(44, 9, 47, 0.215),
    0 0 0 25px rgba(48, 11, 52, 0.115);
}
.to-top {
    position: fixed;
    bottom: 3rem;
    left: 0;
    background: black;
    border: 1px solid #c6c6c6;
    border-radius: 0.3rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    padding: 0.245rem;
    display: inline-block;
    color: white;
    text-decoration:none;
    border-color: black;
}
.to-top:hover{
    font-size: large;
    transition: 0.2s;
    color: rgb(148, 0, 156);
    text-decoration: none;
}


</style>
