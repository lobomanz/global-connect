<template>
  <Header :mode="headerMode" class="invisible" :class="{'isVisible':  isVisible}"/>
  
  <RouterView v-slot="{ Component }">
    <keep-alive :include="['preview', 'refrences', 'work', 'people', 'contact', 'services']">
      <component :is="Component" />
    </keep-alive>
  </RouterView>
  <IntroVideo/>

</template>

<script setup>
import IntroVideo from './components/IntroVideo.vue'
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import { computed, onMounted, watch,ref } from "vue";
import { useRoute } from "vue-router";
let isVisible = ref(false);
const route = useRoute();

const headerMode = computed(() => route.meta.mode ?? 0);

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true;
  }, 1000);
  window.scrollTo({ top: 0 });
});

watch(
  () => route.fullPath,
  () => {
    window.scrollTo({ top: 0 });
  }
);
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
