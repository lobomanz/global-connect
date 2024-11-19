
<template>
  <!-- <Header>
    
  </Header> -->
  <!-- <ProjectList :projectList = projectList>

  </ProjectList> -->
  <!-- <div class="project-wrapper" >
    <div class="project-card" v-for="project in projectList">
      <ProjectCard 
      :info="project"></ProjectCard>

    </div>
    

  </div> -->
  <RouterView></RouterView>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import ProjectList from './components/ProjectList.vue'
import { ref, defineProps } from 'vue';

let projectList = ref( [
  {
    projectDate: "22-05-1997",
    projectInfo:"Copot kuća renderi",
    projectName:"Copot kuća ",
    image:'/images/copot_kuca_1.png',
  },
  {
    projectDate: "22-05-1997",
    projectInfo:"Copot kuća renderi",
    projectName:"Copot kuća ",
    image:'/images/copot_kuca_2.png',
  },
  {
    projectDate: "22-05-1997",
    projectInfo:"Copot kuća renderi",
    projectName:"Copot kuća ",
    image:'/images/copot_kuca_3.png',
  },
  {
    projectDate: "22-05-1997",
    projectInfo:"Copot kuća renderi",
    projectName:"Copot kuća ",
    image:'/images/copot_kuca_4.png',
  },
  {
    projectDate: "22-05-1997",
    projectInfo:"Copot kuća renderi",
    projectName:"Copot kuća ",
    image:'/images/copot_kuca_5.png',
  },
  {
    projectDate: "22-05-1997",
    projectInfo:"Copot kuća renderi",
    projectName:"Copot kuća ",
    image:'/images/copot_kuca_1.png',
  },
  {
    projectDate: "22-05-1997",
    projectInfo:"Copot kuća renderi",
    projectName:"Copot kuća ",
    image:'/images/copot_kuca_2.png',
  },
  {
    projectDate: "22-05-1997",
    projectInfo:"Copot kuća renderi",
    projectName:"Copot kuća ",
    image:'/images/copot_kuca_3.png',
  },
  {
    projectDate: "22-05-1997",
    projectInfo:"Copot kuća renderi",
    projectName:"Copot kuća ",
    image:'/images/copot_kuca_4.png',
  },
  {
    projectDate: "22-05-1997",
    projectInfo:"Copot kuća renderi",
    projectName:"Copot kuća ",
    image:'/images/copot_kuca_5.png',
  },
]); 
</script>
<style scoped lang="scss">
// .project-wrapper{
//   flex-wrap: wrap;
//   display: flex;
//   width: 1400px;
//   .project-card{
//     padding: 20px;
//   }
// }
</style>
