<template>
  <div class="profile-card">
    <img v-if="profile.image" :src="Gateway.baseUrl+profile.image" :alt="profile.name" class="profile-image" loading="lazy"/>
    <p class="profile-name">{{ profile.name }}</p>
    <p class="profile-title" v-html="profile.title"></p>
    <p class="profile-title" v-html="profile.department"></p>
    <p class="profile-title" v-html="profile.description"></p>

  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import Gateway from '../../Gateway';
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

  
  <style scoped lang="scss">
  .profile-card {
    padding: 10px;
    max-width: 100%;
    text-align: left; 
    @include mobile {
      padding-inline: 30px;
    }
  }
  
  .profile-image {
    padding-top: 15px;
    max-width: 100%;
    max-height: 300px;
    object-fit: contain; 
    filter: grayscale(100%); 
    @include mobile {
      max-height: max-content;
    }
  }
  
  .profile-name {
    font-weight: bold;
    font-size: 18px; /* Bolded name */
    margin: 0px 0 0; /* Add margin for spacing */
  }
  
  .profile-title {
    font-weight: normal; /* Not bolded title */
    margin: 0px 0 0; /* Add margin for spacing */
  }
  </style>
  