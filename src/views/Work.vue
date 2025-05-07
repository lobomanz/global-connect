<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from '../components/Header.vue'
import ProjectList from '../components/ProjectList.vue'
import { ref, onMounted } from 'vue'
import Gateway from '../../Gateway'

const projectList = ref([
  {
    id: 1,
    projectDate: "22-05-1997",
    projectInfo: "Zagreb",
    projectName: "Copot kuća ",
    image: '/images/copot_kuca_1.png',
  },
  {
    id: 2,
    projectDate: "12-07-2012",
    projectInfo: "Varaždin",
    projectName: "Obiteljski centar Varaždin ",
    image: '/images/oc_varazdin_1.png',
  },
  {
    id: 3,
    projectDate: "10-10-2005",
    projectInfo: "Čakovec",
    projectName: "Obiteljski centar Čakovec ",
    image: '/images/oc_cakovec_1.png',
  },
  {
    id: 4,
    projectDate: "22-06-2022",
    projectInfo: "Zagreb",
    projectName: "Društveni dom",
    image: '/images/drustveni_dom_1.jpeg',
  },
  {
    id: 1,
    projectDate: "22-05-1997",
    projectInfo: "Zagreb",
    projectName: "Copot kuća ",
    image: '/images/copot_kuca_1.png',
  },
  {
    id: 2,
    projectDate: "12-07-2012",
    projectInfo: "Varaždin",
    projectName: "Obiteljski centar Varaždin ",
    image: '/images/oc_varazdin_1.png',
  },
  {
    id: 3,
    projectDate: "10-10-2005",
    projectInfo: "Čakovec",
    projectName: "Obiteljski centar Čakovec ",
    image: '/images/oc_cakovec_1.png',
  },
  {
    id: 4,
    projectDate: "22-06-2022",
    projectInfo: "Zagreb",
    projectName: "Društveni dom",
    image: '/images/drustveni_dom_1.jpeg',
  },
  {
    id: 1,
    projectDate: "22-05-1997",
    projectInfo: "Zagreb",
    projectName: "Copot kuća ",
    image: '/images/copot_kuca_1.png',
  },
  {
    id: 2,
    projectDate: "12-07-2012",
    projectInfo: "Varaždin",
    projectName: "Obiteljski centar Varaždin ",
    image: '/images/oc_varazdin_1.png',
  },
  {
    id: 3,
    projectDate: "10-10-2005",
    projectInfo: "Čakovec",
    projectName: "Obiteljski centar Čakovec ",
    image: '/images/oc_cakovec_1.png',
  },
  {
    id: 4,
    projectDate: "22-06-2022",
    projectInfo: "Zagreb",
    projectName: "Društveni dom",
    image: '/images/drustveni_dom_1.jpeg',
  },
  // repeat or extend this array as needed
]);

onMounted(async () => {
  try {
    const response = await Gateway.getAllProjectsShortInfo();
    // Make sure to map and format the response to match your local structure
    projectList.value = response.map((item) => ({
      id: item.id,
      projectDate: item.projectDate,
      projectInfo: item.projectInfo,
      projectName: item.projectName,
      image: item.image, // Adjust if your field names are different
    }));
  } catch (error) {
    console.error('Failed to fetch projects, using fallback data:', error);
  }
});
</script>
<template>
    <Header>
      
    </Header>
    <ProjectList :projectList = projectList>
  
    </ProjectList>
  </template>