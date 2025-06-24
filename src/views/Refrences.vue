<template>
  <ReferenceList :items="referenceData" />
  <Footer></Footer>

</template>

<script setup>
import Header from '../components/Header.vue'
import ReferenceList from '../components/ReferenceList.vue'
import { ref, onMounted } from 'vue'
import Gateway from '../../Gateway'
import Footer from '../components/Footer.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Refrences - All Our Projects',
  meta: [
    {
      name: 'description',
      content: 'List of everything you need to know about our projects'
    }
  ]
})

// Start with hardcoded fallback data
const referenceData = ref([
  { year: '2021.', title: 'Eco-Friendly Housing - Private Investor - Main Solution - Main Project' },
  { year: '2020.', title: 'Urban Park Revitalization - State Investor - Solution Idea - Main and Idea Project' },
  { year: '2019.', title: 'Sustainable Skyscraper - Multiple Investors - Main Solution - Main Project' },
  { year: '2021.', title: 'Green Roof Initiative - Private Investor - Main Solution - Project Idea' },
  { year: '2020.', title: 'Community Center Design - State Investor - Main Solution - Main Project' },
  { year: '2019.', title: 'Smart City Infrastructure - Multiple Investors - Solution Idea - Main and Idea Project' },
  { year: '2021.', title: 'Waterfront Development - Private Investor - Main Solution - Project Idea' },
  { year: '2020.', title: 'Affordable Housing Project - State Investor - Main Solution - Main Project' },
  { year: '2019.', title: 'Cultural Heritage Restoration - Multiple Investors - Solution Idea - Main and Idea Project' },
  { year: '2021.', title: 'Smart Parking Solutions - Private Investor - Main Solution - Main Project' },
  { year: '2020.', title: 'Innovative Public Transit - State Investor - Solution Idea - Project Idea' },
  { year: '2019.', title: 'Energy-Efficient Buildings - Multiple Investors - Main Solution - Main Project' },
  { year: '2021.', title: 'Mixed-Use Development - Private Investor - Main Solution - Main Project' },
  { year: '2020.', title: 'Sustainable Urban Drainage - State Investor - Solution Idea - Project Idea' },
  { year: '2019.', title: 'Smart Home Technology - Multiple Investors - Main Solution - Main Project' },
  { year: '2021.', title: 'Urban Green Spaces - Private Investor - Main Solution - Main and Idea Project' },
  { year: '2020.', title: 'High-Rise Greenery - State Investor - Main Solution - Main Project' },
  { year: '2019.', title: 'Resilient Coastal Design - Multiple Investors - Solution Idea - Project Idea' },
  { year: '2021.', title: 'Community Resilience Projects - Private Investor - Main Solution - Main and Idea Project' },
  { year: '2020.', title: 'Historical Building Preservation - State Investor - Main Solution - Main Project' },
  { year: '2019.', title: 'Tech-Enabled Infrastructure - Multiple Investors - Solution Idea - Main Project' },
  { year: '2021.', title: 'Urban Farming Initiatives - Private Investor - Main Solution - Project Idea' },
  { year: '2020.', title: 'Inclusive Community Design - State Investor - Main Solution - Main Project' },
  { year: '2019.', title: 'Public Space Activation - Multiple Investors - Solution Idea - Main and Idea Project' },
  { year: '2021.', title: 'Sustainable Transportation - Private Investor - Main Solution - Main Project' },
  { year: '2020.', title: 'Eco-Friendly Retail Spaces - State Investor - Solution Idea - Project Idea' },
  { year: '2019.', title: 'Digital Twins in Architecture - Multiple Investors - Main Solution - Main Project' },
])

// Fetch and override if successful
onMounted(async () => {
  try {
    const response = await Gateway.getReferences()
    if (Array.isArray(response)) {
      referenceData.value = response
    }
  } catch (error) {
    console.error('Failed to fetch references:', error)
    // Leave the hardcoded data in place
  }
})
</script>
// const referenceData = [
// { year: '2021.', title: 'Eco-Friendly Housing', investor: 'Private Investor', solution: 'Main Solution', project:
'Main Project' },
// { year: '2020.', title: 'Urban Park Revitalization', investor: 'State Investor', solution: 'Solution Idea', project:
'Main and Idea Project' },
// { year: '2019.', title: 'Sustainable Skyscraper', investor: 'Multiple Investors', solution: 'Main Solution', project:
'Main Project' },
// { year: '2021.', title: 'Green Roof Initiative', investor: 'Private Investor', solution: 'Main Solution', project:
'Project Idea' },
// { year: '2020.', title: 'Community Center Design', investor: 'State Investor', solution: 'Main Solution', project:
'Main Project' },
// { year: '2019.', title: 'Smart City Infrastructure', investor: 'Multiple Investors', solution: 'Solution Idea',
project: 'Main and Idea Project' },
// { year: '2021.', title: 'Waterfront Development', investor: 'Private Investor', solution: 'Main Solution', project:
'Project Idea' },
// { year: '2020.', title: 'Affordable Housing Project', investor: 'State Investor', solution: 'Main Solution', project:
'Main Project' },
// { year: '2019.', title: 'Cultural Heritage Restoration', investor: 'Multiple Investors', solution: 'Solution Idea',
project: 'Main and Idea Project' },
// { year: '2021.', title: 'Smart Parking Solutions', investor: 'Private Investor', solution: 'Main Solution', project:
'Main Project' },
// { year: '2020.', title: 'Innovative Public Transit', investor: 'State Investor', solution: 'Solution Idea', project:
'Project Idea' },
// { year: '2019.', title: 'Energy-Efficient Buildings', investor: 'Multiple Investors', solution: 'Main Solution',
project: 'Main Project' },
// { year: '2021.', title: 'Mixed-Use Development', investor: 'Private Investor', solution: 'Main Solution', project:
'Main Project' },
// { year: '2020.', title: 'Sustainable Urban Drainage', investor: 'State Investor', solution: 'Solution Idea', project:
'Project Idea' },
// { year: '2019.', title: 'Smart Home Technology', investor: 'Multiple Investors', solution: 'Main Solution', project:
'Main Project' },
// { year: '2021.', title: 'Urban Green Spaces', investor: 'Private Investor', solution: 'Main Solution', project: 'Main
and Idea Project' },
// { year: '2020.', title: 'High-Rise Greenery', investor: 'State Investor', solution: 'Main Solution', project: 'Main
Project' },
// { year: '2019.', title: 'Resilient Coastal Design', investor: 'Multiple Investors', solution: 'Solution Idea',
project: 'Project Idea' },
// { year: '2021.', title: 'Community Resilience Projects', investor: 'Private Investor', solution: 'Main Solution',
project: 'Main and Idea Project' },
// { year: '2020.', title: 'Historical Building Preservation', investor: 'State Investor', solution: 'Main Solution',
project: 'Main Project' },
// { year: '2019.', title: 'Tech-Enabled Infrastructure', investor: 'Multiple Investors', solution: 'Solution Idea',
project: 'Main Project' },
// { year: '2021.', title: 'Urban Farming Initiatives', investor: 'Private Investor', solution: 'Main Solution',
project: 'Project Idea' },
// { year: '2020.', title: 'Inclusive Community Design', investor: 'State Investor', solution: 'Main Solution', project:
'Main Project' },
// { year: '2019.', title: 'Public Space Activation', investor: 'Multiple Investors', solution: 'Solution Idea',
project: 'Main and Idea Project' },
// { year: '2021.', title: 'Sustainable Transportation', investor: 'Private Investor', solution: 'Main Solution',
project: 'Main Project' },
// { year: '2020.', title: 'Eco-Friendly Retail Spaces', investor: 'State Investor', solution: 'Solution Idea', project:
'Project Idea' },
// { year: '2019.', title: 'Digital Twins in Architecture', investor: 'Multiple Investors', solution: 'Main Solution',
project: 'Main Project' },
// ];