<template>
    <div class="gallery-container">
        <div class="left">

            <button class="chevron left-one" @click="prevImage"></button>
        </div>
      
      <div class="image-container" :style="{ backgroundImage: `url(${images[currentIndex]})` }"></div>
  
      <div class="right">

          <button class="chevron right-one" @click="nextImage"></button>
      </div>
  
      <div class="counter">
        {{ currentIndex + 1 }} / {{ images.length }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue';
  
  const props = defineProps({
    images: {
      type: Array,
      requiwhite: true,
    },
  });
  
  const currentIndex = ref(0);
  
  function nextImage() {
    currentIndex.value = (currentIndex.value + 1) % props.images.length;
  }
  
  function prevImage() {
    currentIndex.value = (currentIndex.value - 1 + props.images.length) % props.images.length;
  }
  </script>
  
  <style scoped lang="scss">
  .gallery-container {
    position: relative;
    margin-inline: 50px;
    width: calc(100% - 100px);
    height: calc(100vh - 100px);
    overflow: hidden;
    @include mobile{
      width: 100%;
      margin-inline: 0;
      max-height: 350px;
    }
  }
  
  .image-container {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    transition: background-image 0.5s ease;
  }
  
  .chevron {
    cursor: pointer;
    border: none;
    background-color: transparent;
  position: relative;
  height: 10px;
  width: 40px;
}

.chevron::before {
  position: absolute;
  content: "";
  border-radius: 10px;
  background-color: white;
  width: 20px;
  height: 5px;
  /* transform: rotate(45deg); */
  
}
.chevron::after {
  position: absolute;
  content: "";
  border-radius: 10px;
  background: white;
  width: 20px;
  height: 5px;
  /* transform: rotate(-45deg) translateX(15px) translateY(15px); */
  
}
  
  .left {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 0px;
  }
  
  .right {
    cursor: pointer;
    position: absolute;
    top: 50%;
    right: 20px;
  }
  .chevron.left-one::after{
    transform: rotate(45deg) translateX(8px) translateY(8px);
  }
  .chevron.left-one::before{
    transform: rotate(135deg);
  }
  .chevron.right-one::after{
    transform: rotate(225deg) translateX(8px) translateY(8px);
  }
  .chevron.right-one::before{
    transform: rotate(135deg);
  }
  .counter {
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
  }
  </style>
  