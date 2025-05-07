<template>
  <Header mode="2"></Header>

  <ContactPage></ContactPage>
  <Footer></Footer>



</template>
<script setup>
import Header from '../components/Header.vue'
import ContactPage from '../components/ContactPage.vue'
import Footer from '../components/Footer.vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Contact - Get in Touch',
  meta: [
    {
      name: 'description',
      content: 'Learn more about our company e-mails and contact.'
    }
  ]
})
</script>