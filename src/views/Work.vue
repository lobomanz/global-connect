<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '../components/Header.vue'
import ProjectList from '../components/ProjectList.vue'
import { ref, defineProps } from 'vue';


let projectList = ref( [
  {
    id:1,
    projectDate: "22-05-1997",
    projectInfo:"Zagreb",
    projectName:"Copot kuća ",
    image:'/images/copot_kuca_1.png',
  },
  {
    id:2,
    projectDate: "12-07-2012",
    projectInfo:"Varaždin",
    projectName:"Obiteljski centar Varaždin ",
    image:'/images/oc_varazdin_1.png',
  },
  {
    id:3,
    projectDate: "10-10-2005",
    projectInfo:"Čakovec",
    projectName:"Obiteljski centar Čakovec ",
    image:'/images/oc_cakovec_1.png',
  },
  {
    id:4,
    projectDate: "22-06-2022",
    projectInfo:"Zagreb",
    projectName:"Društveni dom",
    image:'/images/drustveni_dom_1.jpeg',
  },
  {
    id:1,
    projectDate: "22-05-1997",
    projectInfo:"Zagreb",
    projectName:"Copot kuća ",
    image:'/images/copot_kuca_1.png',
  },
  {
    id:2,
    projectDate: "12-07-2012",
    projectInfo:"Varaždin",
    projectName:"Obiteljski centar Varaždin ",
    image:'/images/oc_varazdin_1.png',
  },
  {
    id:3,
    projectDate: "10-10-2005",
    projectInfo:"Čakovec",
    projectName:"Obiteljski centar Čakovec ",
    image:'/images/oc_cakovec_1.png',
  },
  {
    id:4,
    projectDate: "22-06-2022",
    projectInfo:"Zagreb",
    projectName:"Društveni dom",
    image:'/images/drustveni_dom_1.jpeg',
  },
  {
    id:1,
    projectDate: "22-05-1997",
    projectInfo:"Zagreb",
    projectName:"Copot kuća ",
    image:'/images/copot_kuca_1.png',
  },
  {
    id:2,
    projectDate: "12-07-2012",
    projectInfo:"Varaždin",
    projectName:"Obiteljski centar Varaždin ",
    image:'/images/oc_varazdin_1.png',
  },
  {
    id:3,
    projectDate: "10-10-2005",
    projectInfo:"Čakovec",
    projectName:"Obiteljski centar Čakovec ",
    image:'/images/oc_cakovec_1.png',
  },
  {
    id:4,
    projectDate: "22-06-2022",
    projectInfo:"Zagreb",
    projectName:"Društveni dom",
    image:'/images/drustveni_dom_1.jpeg',
  },
]); 
</script>
<template>
    <Header>
      
    </Header>
    <ProjectList :projectList = projectList>
  
    </ProjectList>
  </template>