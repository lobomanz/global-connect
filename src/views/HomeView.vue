<template>
  <SlideShow @first-image-loaded="$emit('first-image-loaded')" />
</template>

<script setup>
defineOptions({ name: 'preview' })
import { useHead } from '@unhead/vue'
import SlideShow from '../components/SlideShow.vue'

const emit = defineEmits(['first-image-loaded'])

useHead({
  title: 'Home - Global Connect',
  meta: [
    { name: 'description', content: 'See all of our projects' }
  ]
})
</script>
