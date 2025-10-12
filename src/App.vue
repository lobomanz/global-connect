<template>
  <Header :mode="headerMode" class="invisible" :class="{ isVisible }" />
  
  <RouterView
    v-slot="{ Component }"
    @first-image-loaded="onFirstImageLoaded"
  >
    <keep-alive :include="['preview', 'refrences', 'work', 'people', 'contact', 'services']">
      <component :is="Component" />
    </keep-alive>
  </RouterView>

  <IntroVideo ref="introVideoRef" />
</template>

<script setup>
import { ref, computed, onMounted, watch } from "vue"
import { useRoute } from "vue-router"
import Header from "./components/Header.vue"
import IntroVideo from "./components/IntroVideo.vue"

const route = useRoute()
const isVisible = ref(false)
const introVideoRef = ref(null)

const headerMode = computed(() => route.meta.mode ?? 0)

onMounted(() => {
  setTimeout(() => (isVisible.value = true), 1000)
  window.scrollTo({ top: 0 })
})

watch(() => route.fullPath, () => window.scrollTo({ top: 0 }))

// 👇 Trigger the intro video fade-out when the first slideshow image is ready
const onFirstImageLoaded = () => {
  introVideoRef.value?.startExitSequence()
}
</script>

<style scoped lang="scss">
.invisible {
  opacity: 0;
}
.isVisible {
  opacity: 1;
  transition: opacity 0.5s ease-in;
}
</style>
