<script setup>
defineOptions({ name: 'preview' });
import SlideShow from '../components/SlideShow.vue'
import IntroVideo from '../components/IntroVideo.vue'
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
  <SlideShow></SlideShow>
  <IntroVideo/>
</template>
