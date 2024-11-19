<template>
  <RouterView />
  <div :class="{ 'space-top': mode != 1 && mode != 2}"></div>
    <header class="fixed-header" :class="{ 'transparent': mode == 1 || mode == 2}">
      <div class="inside-header">
        <RouterLink to="/" class="logo" :class="{ 'color-white': mode == 1 || mode == 2}">global connect</RouterLink>
        <div class="nav-links">
          <RouterLink to="/refrences" class="nav-item" :class="{ 'hover-white': mode == 2}">refrences</RouterLink>
          <RouterLink to="/services" class="nav-item" :class="{ 'hover-white': mode == 2}">services</RouterLink>
          <RouterLink to="/people" class="nav-item" :class="{ 'hover-white': mode == 2}">people</RouterLink>
          <RouterLink to="/work" class="nav-item" :class="{ 'hover-white': mode == 2}">work</RouterLink>
          <RouterLink to="/contact" class="nav-item" :class="{ 'hover-white': mode == 2}">contact</RouterLink>
        </div>
      </div>
    </header>
  </template>
  
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, defineProps } from 'vue';
  const props = defineProps({
    mode: {
      type: Number,
      required: true,
      validator: (value) => {
        return (
          value !== undefined 
        );
      },
    },
  });
</script>
  
  <style scoped lang="scss">
  .space-top{
    margin-top: 100px;
  }
  .fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #fff; 
    // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); 
    z-index: 1000; 
    display: flex;
    justify-content: center;
    .inside-header{
      width: 100%;
      padding: 10px 20px; 
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: calc(90vw + 60px);

    }
    
    
  }
  
  .logo {
    text-decoration: none;
    color: var(--color-text);
    /* height: 80%; Adjust logo size */
    font-size: 40px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  
  .nav-links {
    font-size: 32px;
    display: flex;
    align-items: center;
    
  }
  
  .nav-item {
    transition: 0.3s;
    margin: 0 15px; /* Space between items */
    cursor: pointer; /* Change cursor to pointer */
    text-decoration: none; /* Remove underline */
    color: inherit; /* Inherit color from parent */
    &:hover{
      color: black;
      opacity: 0.6;
    }
  }
  .hover-white {
    transition: 0.3s;
    color: inherit; /* Inherit color from parent */
    &:hover{
      color: white;
      opacity: 0.7;
    }
  }
  .transparent{
    // background: transparent;
    color:#fff;
    background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  }
  .color-white{
    color: #fff;
  }
  </style>
  