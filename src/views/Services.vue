<template>
  <Header></Header>
  <ServiceCardList :items="cardData" />
  <Footer></Footer>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import ServiceCardList from '../components/ServiceCardList.vue'
import { ref, onMounted } from 'vue'
import Gateway from '../../Gateway'

const cardData = ref([
  { id: 1, image: '/images/drustveni_dom_1.jpeg', title: 'Idejna rješenja' },
  { id: 2, image: '/images/drustveni_dom_2.jpeg', title: 'Idejni projekti' },
  { id: 3, image: '/images/drustveni_dom_3.jpeg', title: 'Glavni projekti' },
  { id: 7, image: '/images/drustveni_dom_4.jpeg', title: 'Građevinski projekt' },
  { id: 10, image: '/images/drustveni_dom_5.jpeg', title: 'Strojarski projekt' },
  { id: 5, image: '/images/drustveni_dom_6.jpeg', title: 'Elektrotehnički projekt' },
  { id: 4, image: '/images/drustveni_dom_7.jpeg', title: 'Izvedbeni projekti' },
  { id: 6, image: '/images/drustveni_dom_8.jpeg', title: 'Troškovnici' },
  { id: 8, image: '/images/drustveni_dom_1.jpeg', title: 'Prostorni prikazi' },
  { id: 9, image: '/images/drustveni_dom_2.jpeg', title: 'Projekti interijera' },
  { id: 11, image: '/images/drustveni_dom_9.jpeg', title: 'Projekti krajobraznog uređenja' },
  { id: 12, image: '/images/drustveni_dom_4.jpeg', title: 'Geodetski elaborati' },
  { id: 13, image: '/images/drustveni_dom_5.jpeg', title: 'Prostorni planovi uređenja grada ili općina' },
  { id: 14, image: '/images/drustveni_dom_6.jpeg', title: 'Urbanistički planovi uređenja' },
  { id: 15, image: '/images/drustveni_dom_7.jpeg', title: 'Urbanistička rješenja zahvata u prostoru' },
  { id: 16, image: '/images/drustveni_dom_8.jpeg', title: 'Elaborati etažiranja' },
  { id: 17, image: '/images/drustveni_dom_9.jpeg', title: 'Ispitivanje zrakopropusnosti' },
  { id: 18, image: '/images/drustveni_dom_1.jpeg', title: 'Energetski certifikati' },
])

onMounted(async () => {
  try {
    const response = await Gateway.getAllServicesShortInfo()
    if (Array.isArray(response)) {
      cardData.value = response
    }
  } catch (error) {
    console.error('Failed to fetch services:', error)
  }
})
</script>
