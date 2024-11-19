<template>
    <div
      class="image-container"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <img :src="info.image" alt="" class="responsive-image" />
      <div class="overlay" :class="{ visible: hover }"></div>
      <div class="text" :class="{ visible: hover }">
        <h2>{{ info.projectName }}</h2>
        <p>{{ info.projectInfo }}</p>
        <p>{{ info.projectDate }}</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const props = defineProps({
    info: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          value.image !== undefined &&
          value.projectName !== undefined &&
          value.projectInfo !== undefined &&
          value.projectDate !== undefined
        );
      },
    },
  });
  
  const hover = ref(false);
  </script>
  
  <style scoped>
  .image-container {
    position: relative;
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  
  .responsive-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensures the image fills the container while maintaining aspect ratio */
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 1);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .overlay.visible {
    opacity: 0.5; /* Changes opacity on hover */
  }
  
  .text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    opacity: 0; /* Start hidden */
    transition: opacity 0.3s ease;
    text-align: center; /* Center-align text */
  }
  
  .text.visible {
    opacity: 1; /* Full opacity on hover */
  }
  </style>
  