<script setup>
import Header from '../components/Header.vue'
import SlideShow from '../components/SlideShow.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Home - Global Connect',
  meta: [
    {
      name: 'description',
      content: 'See all of our projects'
    }
  ]
})
</script>

<template>
  <Header mode="1">

  </Header>
  <SlideShow></SlideShow>
</template>
