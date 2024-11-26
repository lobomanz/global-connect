<template>
    <div class="slideshow">
        <div v-for="image,index in images">
            <router-link :to="{ name: 'project', params: { id: image.id } }">
                <img :src="image.image" :key="index" class="background-image"  :class="{ 'show-class': index == currentIndex, 'hide-class': index != currentIndex }"/>
            </router-link>
        </div>
      <div class="dots">
        <span
          v-for="(image, index) in images"
          :key="index"
          class="dot"
          :class="{ active: index === currentIndex }"
          @click="goToImage(index)"
        ></span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  
  const images = [
    {
        id:1,
        image:'/images/copot_kuca_1.png',

    },
    {
        id:2,
        image:'/images/oc_varazdin_1.png',

    },
    {
        id:3,
        image:'/images/oc_cakovec_1.png',

    },
    {
        id:4,
        image:'/images/drustveni_dom_1.jpeg'

    },
    // '/images/oc_varazdin_1.png',
    // '/images/oc_cakovec_1.png',
    // '/images/drustveni_dom_1.jpeg',
    // Add your image URLs here
  ];
  
  const currentIndex = ref(0);
  const currentImage = computed(() => images[currentIndex.value]);

  let intervalId = null;

const startSlideshow = () => {
  // Clear any existing interval
  if (intervalId) {
    clearInterval(intervalId);
  }

  // Start a new interval
  intervalId = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
  }, 3000); // Change every 2 seconds
};

const restartSlideshow = () => {
  startSlideshow(); // Restart the slideshow
};
  
  const goToImage = (index) => {
    currentIndex.value = index;
    restartSlideshow();
  };
  
  onMounted(() => {
    startSlideshow();
  });
  </script>
  
  <style scoped lang="scss">
  .show-class{
    z-index: 1000;
    opacity: 1;
  }
  .hide-class{
    opacity: 0;
  }
  .slideshow {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .background-image {
    transition: 0.3s;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: translate(-50%, -50%);
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0; /* Start with opacity 0 */
  }
  .fade-enter-active, .fade-leave-active {
    z-index: 1000;
    transition: opacity 1s ease-in-out; /* Smooth transition for opacity */
  }
  .fade-enter-to, .fade-leave {
    opacity: 1; /* Fade in to opacity 1 */
  }
  
  .dots {
    z-index: 1001;
    position: absolute;
    bottom: 20px;
    display: flex;
    gap: 90px;
    @include mobile{
      gap: 15px;
    }
  }
  
  .dot {
    width: 15px;
    height: 15px;
    border-radius: 5px;
    background: white;
    opacity: 0.5;
    cursor: pointer;
    transition: background 0.3s;
  }
  
  .dot.active {
    background: white;
    opacity: 1;
  }
  </style>
  