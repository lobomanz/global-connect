<template>
    <Header></Header>
    <ServiceCardList :items="cardData" />
  </template>
  <script setup>
  import Header from '../components/Header.vue'
  import ServiceCardList from '../components/ServiceCardList.vue'

  import { ref } from 'vue';

  const cardData = ref([
  { id: 1, image: '/images/drustveni_dom_1.jpeg', title: 'First Title' },
  { id: 2, image: '/images/drustveni_dom_2.jpeg', title: 'Second Title' },
  { id: 3, image: '/images/drustveni_dom_3.jpeg', title: 'Third Title' },
  { id: 4, image: '/images/drustveni_dom_4.jpeg', title: 'Fourth Title' },
  { id: 5, image: '/images/drustveni_dom_5.jpeg', title: 'Fifth Title' },
  { id: 6, image: '/images/drustveni_dom_6.jpeg', title: 'Second Title' },
  { id: 7, image: '/images/drustveni_dom_7.jpeg', title: 'Third Title' },
  { id: 8, image: '/images/drustveni_dom_8.jpeg', title: 'Fourth Title' },
  { id: 9, image: '/images/drustveni_dom_9.jpeg', title: 'Fifth Title' },
  // Add more items as needed
]);
  </script>