<template>
  <div class="person-list">
      <div class="person-card-wrapper" v-for="(profile, index) in profilesBosses" :key="index">
        <PersonCard :profile="profile" />
      </div>
    </div>
    <div class="person-list">
      <div class="person-card-wrapper" v-for="(profile, index) in profiles" :key="index">
        <PersonCard :profile="profile" />
      </div>
    </div>
  </template>
  
  <script setup>
  import PersonCard from '../components/PersonCard.vue';
  const profilesBosses = [
    {
      image: '/images/deni_pavic.jpg',
      name: 'Deni Pavić',
      title: `Vlasnik tvrtke, direktor`,
    },
    {
      image: '/images/vedran_vuletic.jpg',
      name: 'Vedran Vuletić',
      title: `Voditelj ureda, direktor, <br> Ovlašteni arhitekt, Ovl. arhitekt urbanist`,
    },
  ];
  const profiles = [
    {
      image: '/images/deni_pavic.jpg',
      name: 'Vedran Roljić',
      title: 'Projektant suradnik',
    },
    {
      image: '/images/zvonimir_jurkovic.jpg',
      name: 'Matija Pucak',
      title: 'Ovlašteni arhitekt',
    },
    {
      image: '/images/vedran_vuletic.jpg',
      name: 'Mislav Klarić',
      title: 'Arhitekt pripravnik',
    },
    {
      image: '/images/vedran_vuletic.jpg',
      name: 'Igor Višić',
      title: 'Ovlašteni inženjer geodezije i geoinformatike',
    },
    {
      image: '/images/igor_visic.jpg',
      name: 'Tomislav Jagodić',
      title: 'Geodet suradnik',
    },
    {
      image: '/images/zvonimir_jurkovic.jpg',
      name: 'Tomislav Češljaš',
      title: 'Ovlašteni inženjer građevinarstva',
    },
    {
      image: '/images/igor_visic.jpg',
      name: 'Siniša Kahrić',
      title: 'Ovlašteni inženjer građevinarstva',
    },
    {
      image: '/images/vedran_vuletic.jpg',
      name: 'Darko Magić',
      title: 'Strojar suradnik',
    },
    {
      image: '/images/zvonimir_jurkovic.jpg',
      name: 'Srećko Lačen',
      title: 'Ovlašteni inženjer stroj.',
    },
    {
      image: '/images/vedran_vuletic.jpg',
      name: 'Boris Kramarić',
      title: 'Ovlašteni inženjer elektr.',
    },
    // Add more profiles as needed
  ];
  
  </script>
  
  <style scoped lang="scss">
  .person-list {
    display: flex;
    flex-wrap: wrap;
    max-width: 1600px;
    margin-inline: auto;
    justify-content: center; /* Center items horizontally */
  }
  
  .person-card-wrapper {
    margin: 5px;
    @include desktop{
      margin: 10px; /* Optional: Add spacing between cards */
      width: 30%;
      height: 400px;
      
    }
  }
  </style>
  