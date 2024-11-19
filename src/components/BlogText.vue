<template>
    <div class="wrapper">
      <div v-html="content"></div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    content: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped lang="scss">
  .wrapper {
    max-width: 1000px;
    margin: 0 auto; /* Centers the wrapper */
    padding: 60px; /* Optional padding */
    background-color: #fff; /* Optional background color */
    h2{
        font-size: 32px;
    }
  }
  </style>