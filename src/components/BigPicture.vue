<template>
    <div class="image-container">
      <div class="image-wrapper">
        <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image" class="full-image" />
        <div class="overlay"></div>
        <div v-if="imageUrl" class="title">{{ title }}</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    imageUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'Your Title Here',
    },
  });
  </script>
  
  <style scoped>
  .image-container {
    width: calc(100% - 210px);
    height: calc(100vh - 200px);
    position: relative;
    overflow: hidden;
  }
  
  .image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  
  .full-image {
    width: 100%;
    height: auto; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
  }
  
  .title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 90px; /* Updated font size */
    text-align: center;
    white-space: nowrap; /* Prevent line breaks */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7); /* Shadow for better contrast */
  }
  </style>
  