<template>
        <div class="project-wrapper" >
        <div class="project-card" v-for="project in projectList">
          <router-link :to="{ name: 'project', params: { id: project.id } }">
        <ProjectCard 
        :info="project"></ProjectCard>
      </router-link>
    
        </div>
    </div>
    

</template>
<script setup>
  import { ref, defineProps } from 'vue';
  import ProjectCard from './ProjectCard.vue'
  const props = defineProps({
    projectList: {
      type: Array,
      required: true,
      validator: (value) => {
        return (
          value !== undefined 
        );
      },
    },
  });
  
  const hover = ref(false);
  let open = (ajdi) =>{
    console.log(ajdi)
  }
  </script>
  <style scoped lang="scss">
  

      .project-wrapper{
        max-width: calc(93vw + 60px);
        width: 100%;
        flex-wrap: wrap;
        display: flex;
        justify-content: center;
        margin-inline: auto;
        .project-card{
            width: 31vw;
            height: 350px;
          padding: 15px;
          &:hover{
            cursor: pointer;
          }
        }
      }
  
  </style>