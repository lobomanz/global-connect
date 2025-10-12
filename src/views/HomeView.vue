<template>
  <SlideShow/>
</template>

<script setup>
defineOptions({ name: 'preview' })
import { useHead } from '@unhead/vue'
import SlideShow from '../components/SlideShow.vue'

useHead({
  title: 'Home - Global Connect',
  meta: [
    { name: 'description', content: 'See all of our projects' }
  ]
})
</script>
