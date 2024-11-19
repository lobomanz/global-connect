<template>
    <RouterView />
      <header class="fixed-header">
        <div class="inside-header">
          <RouterLink to="/" class="logo">global connect</RouterLink>
          <div class="nav-links">
            <RouterLink to="/about" class="nav-item">about</RouterLink>
            <RouterLink to="/news" class="nav-item">news</RouterLink>
            <!-- <RouterLink to="/services" class="nav-item">services</RouterLink> -->
            <RouterLink to="/work" class="nav-item">work</RouterLink>
          </div>
        </div>
      </header>
    </template>
    
  <script setup>
  import { RouterLink, RouterView } from 'vue-router'
  </script>
    
    <style scoped lang="scss">
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
      margin: 0 15px; /* Space between items */
      cursor: pointer; /* Change cursor to pointer */
      text-decoration: none; /* Remove underline */
      color: inherit; /* Inherit color from parent */
    }
    </style>
    