<template>
  <Header :mode="headerMode"></Header>
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const headerMode = computed(() => route.meta.mode ?? 0);

onMounted(() => {
  window.scrollTo({ top: 0 });
});

watch(
  () => route.fullPath,
  () => {
    window.scrollTo({ top: 0 });
  }
);
</script>
<style scoped lang="scss"></style>
