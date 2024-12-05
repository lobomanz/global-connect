import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Work from '@/views/Work.vue'
import Refrences from '@/views/Refrences.vue'
import Project from '@/views/Project.vue'
import Contact from '@/views/Contact.vue'
import Services from '@/views/Services.vue'
import Service from '@/views/Service.vue'
import People from '@/views/People.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // mode:'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/refrences',
      name: 'refrences',
      component: Refrences
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/project/:id', 
      name: 'project',
      component: Project,
    },
    {
      path: '/people', 
      name: 'people',
      component: People,
    },
    {
      path: '/contact', 
      name: 'contact',
      component: Contact,
    },
    {
      path: '/services', 
      name: 'services',
      component: Services,
    },
    {
      path: '/service/:id', 
      name: 'service',
      component: Service,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new page
    return { top: 0 }
  }
})

export default router
