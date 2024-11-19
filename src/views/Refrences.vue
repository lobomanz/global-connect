<template>
    <Header>
      
    </Header>
    <ReferenceList :items="referenceData" />
  </template>
  <script setup>
  import Header from '../components/Header.vue'
  import ReferenceList from '../components/ReferenceList.vue';

  const referenceData = [
  { year: '2021.', title: 'Eco-Friendly Housing', investor: 'Private Investor', solution: 'Main Solution', project: 'Main Project' },
  { year: '2020.', title: 'Urban Park Revitalization', investor: 'State Investor', solution: 'Solution Idea', project: 'Main and Idea Project' },
  { year: '2019.', title: 'Sustainable Skyscraper', investor: 'Multiple Investors', solution: 'Main Solution', project: 'Main Project' },
  { year: '2021.', title: 'Green Roof Initiative', investor: 'Private Investor', solution: 'Main Solution', project: 'Project Idea' },
  { year: '2020.', title: 'Community Center Design', investor: 'State Investor', solution: 'Main Solution', project: 'Main Project' },
  { year: '2019.', title: 'Smart City Infrastructure', investor: 'Multiple Investors', solution: 'Solution Idea', project: 'Main and Idea Project' },
  { year: '2021.', title: 'Waterfront Development', investor: 'Private Investor', solution: 'Main Solution', project: 'Project Idea' },
  { year: '2020.', title: 'Affordable Housing Project', investor: 'State Investor', solution: 'Main Solution', project: 'Main Project' },
  { year: '2019.', title: 'Cultural Heritage Restoration', investor: 'Multiple Investors', solution: 'Solution Idea', project: 'Main and Idea Project' },
  { year: '2021.', title: 'Smart Parking Solutions', investor: 'Private Investor', solution: 'Main Solution', project: 'Main Project' },
  { year: '2020.', title: 'Innovative Public Transit', investor: 'State Investor', solution: 'Solution Idea', project: 'Project Idea' },
  { year: '2019.', title: 'Energy-Efficient Buildings', investor: 'Multiple Investors', solution: 'Main Solution', project: 'Main Project' },
  { year: '2021.', title: 'Mixed-Use Development', investor: 'Private Investor', solution: 'Main Solution', project: 'Main Project' },
  { year: '2020.', title: 'Sustainable Urban Drainage', investor: 'State Investor', solution: 'Solution Idea', project: 'Project Idea' },
  { year: '2019.', title: 'Smart Home Technology', investor: 'Multiple Investors', solution: 'Main Solution', project: 'Main Project' },
  { year: '2021.', title: 'Urban Green Spaces', investor: 'Private Investor', solution: 'Main Solution', project: 'Main and Idea Project' },
  { year: '2020.', title: 'High-Rise Greenery', investor: 'State Investor', solution: 'Main Solution', project: 'Main Project' },
  { year: '2019.', title: 'Resilient Coastal Design', investor: 'Multiple Investors', solution: 'Solution Idea', project: 'Project Idea' },
  { year: '2021.', title: 'Community Resilience Projects', investor: 'Private Investor', solution: 'Main Solution', project: 'Main and Idea Project' },
  { year: '2020.', title: 'Historical Building Preservation', investor: 'State Investor', solution: 'Main Solution', project: 'Main Project' },
  { year: '2019.', title: 'Tech-Enabled Infrastructure', investor: 'Multiple Investors', solution: 'Solution Idea', project: 'Main Project' },
  { year: '2021.', title: 'Urban Farming Initiatives', investor: 'Private Investor', solution: 'Main Solution', project: 'Project Idea' },
  { year: '2020.', title: 'Inclusive Community Design', investor: 'State Investor', solution: 'Main Solution', project: 'Main Project' },
  { year: '2019.', title: 'Public Space Activation', investor: 'Multiple Investors', solution: 'Solution Idea', project: 'Main and Idea Project' },
  { year: '2021.', title: 'Sustainable Transportation', investor: 'Private Investor', solution: 'Main Solution', project: 'Main Project' },
  { year: '2020.', title: 'Eco-Friendly Retail Spaces', investor: 'State Investor', solution: 'Solution Idea', project: 'Project Idea' },
  { year: '2019.', title: 'Digital Twins in Architecture', investor: 'Multiple Investors', solution: 'Main Solution', project: 'Main Project' },
];
  </script>
  