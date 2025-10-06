<template>
  <div class="slideshow">
    <div v-for="(project, index) in projects" :key="project.id">
      <router-link
        :to="{
          name: 'project',
          params: { id: project.id },
          query: { title: project.projectInfo },
        }"
      >
        <img
          :src="Gateway.baseUrl + project.image"
          class="background-image"
          :class="{
            'show-class': index === currentIndex,
            'hide-class': index !== currentIndex,
          }"
          alt=""
        />
      </router-link>
    </div>

    <div class="dots">
      <span
        v-for="(project, index) in projects"
        :key="index"
        class="dot"
        :class="{ active: index === currentIndex }"
        @click="goToImage(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from "vue"
import Gateway from "../../Gateway"

const projects = ref([])
const currentIndex = ref(0)
const currentProject = computed(() => projects.value[currentIndex.value])
let intervalId = null

const preloadImages = (urls) => {
  urls.forEach((url) => {
    const img = new Image()
    img.src = Gateway.baseUrl + url
  })
}

const startSlideshow = () => {
  if (intervalId) clearInterval(intervalId)
  intervalId = setInterval(() => {
    if (projects.value.length > 0) {
      currentIndex.value = (currentIndex.value + 1) % projects.value.length
    }
  }, 4000)
}

const restartSlideshow = () => startSlideshow()

const goToImage = (index) => {
  currentIndex.value = index
  restartSlideshow()
}

onMounted(async () => {
  try {
    const response = await Gateway.getAllProjectsShortInfo()

    // Keep identical mapping to Work.vue
    projects.value = response.map((item) => ({
      id: item.id,
      projectDate: item.date,
      projectInfo: item.title,     // Used for query param
      projectName: item.location,  // Optional for display
      image: item.image,           // Image URL path
    }))

    preloadImages(projects.value.map((p) => p.image))
    startSlideshow()
  } catch (error) {
    console.error("Error fetching projects:", error)
  }
})

onBeforeUnmount(() => clearInterval(intervalId))
</script>

<style scoped lang="scss">
.show-class {
  z-index: 1000;
  opacity: 1;
}
.hide-class {
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
.dots {
  z-index: 1001;
  position: absolute;
  bottom: 20px;
  display: flex;
  gap: 90px;
  @include mobile {
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
