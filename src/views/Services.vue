<template>
    <Header></Header>
    <ServiceCardList :items="cardData" />
  </template>
  <script setup>
  import Header from '../components/Header.vue'
  import ServiceCardList from '../components/ServiceCardList.vue'

  import { ref } from 'vue';

  const cardData = ref([
  { id: 1, image: '/images/drustveni_dom_1.jpeg', title: 'Arhitektonske usluge' },
  { id: 2, image: '/images/drustveni_dom_2.jpeg', title: 'Arhitektonski projekt' },
  { id: 3, image: '/images/drustveni_dom_3.jpeg', title: 'Elektrotehnički projekt' },
  { id: 4, image: '/images/drustveni_dom_4.jpeg', title: 'Fizika zgrade' },
  { id: 5, image: '/images/drustveni_dom_5.jpeg', title: 'Građevinski projekt' },
  { id: 6, image: '/images/drustveni_dom_6.jpeg', title: 'Krajobrazni projekt' },
  { id: 7, image: '/images/drustveni_dom_7.jpeg', title: 'Projekt vode i odvodnje' },
  { id: 8, image: '/images/drustveni_dom_8.jpeg', title: 'Strojarski projekt' },
  { id: 9, image: '/images/drustveni_dom_9.jpeg', title: 'Legalizacije' },
  { id: 9, image: '/images/drustveni_dom_1.jpeg', title: 'Geodetske usluge' },
  // Add more items as needed
]);
  </script>