<template>
    <div class="image-card">
      <img :src="data.image" :alt="data.title" class="image" />
      <h2 class="title">{{ data.title }}</h2>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    data: {
      type: Object,
      required: true,
      validator: (value) => {
        return 'image' in value && 'title' in value;
      },
    },
  });
  </script>
  
  <style lang="scss" scoped>
  .image-card {
    margin: 15px;
    width: 100%;
    overflow: hidden;
    text-align: center;
  
    .image {
      width: 100%;
      height: 200px;
      object-fit: cover;
      transition: transform 0.3s ease;
  
      &:hover {
        transform: scale(1.05);
      }
    }
  
    .title {
        text-align: left;
      font-size: 20px;
      text-transform: uppercase;
      margin: 10px 0 0;
    }
  }
  </style>
  