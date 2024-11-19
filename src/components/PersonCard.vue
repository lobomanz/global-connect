<template>
    <div class="profile-card">
      <img :src="profile.image" alt="Profile Picture" class="profile-image" />
      <p class="profile-name">{{ profile.name }}</p>
      <p class="profile-title">{{ profile.title }}</p>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    profile: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          value.image && typeof value.image === 'string' &&
          value.name && typeof value.name === 'string' &&
          value.title && typeof value.title === 'string'
        );
      },
    },
  });
  </script>
  
  <style scoped>
  .profile-card {
    padding: 10px;
    max-width: 100%;
    text-align: left; /* Center-align text */
  }
  
  .profile-image {
    max-width: 100%;
    max-height: 300px;
    object-fit: contain; /* Maintain aspect ratio */
    filter: grayscale(100%); /* Apply black and white effect */
  }
  
  .profile-name {
    font-weight: bold;
    font-size: 18px; /* Bolded name */
    margin: 0px 0 0; /* Add margin for spacing */
  }
  
  .profile-title {
    text-transform: uppercase;
    font-weight: normal; /* Not bolded title */
    margin: 0px 0 0; /* Add margin for spacing */
  }
  </style>
  