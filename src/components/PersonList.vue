<template>
    <div class="person-list">
      <div class="person-card-wrapper" v-for="(profile, index) in profiles" :key="index">
        <PersonCard :profile="profile" />
      </div>
    </div>
  </template>
  
  <script setup>
  import PersonCard from '../components/PersonCard.vue';
  
  const profiles = [
    {
      image: '/images/deni_pavic.jpg',
      name: 'Deni Pavić',
      title: 'Vlasnik',
    },
    {
      image: '/images/zvonimir_jurkovic.jpg',
      name: 'Zvonimir Jurković',
      title: 'Direktor',
    },
    {
      image: '/images/vedrana_tomljenovic.jpg',
      name: 'Vedrana Tomljenović',
      title: 'Arhitektica',
    },
    {
      image: '/images/vedran_vuletic.jpg',
      name: 'Vedran Vuletić',
      title: 'Arhitekt',
    },
    {
      image: '/images/igor_visic.jpg',
      name: 'Igor Višić',
      title: 'Ovlašteni geodet',
    },
    {
      image: '/images/ljiljana_manasterioti.jpg',
      name: 'Ljiljana Manasteriotti',
      title: 'Arhitektica',
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
  