<template>
  <Header>

  </Header>
  <BigPicture class="big-picture" imageUrl='/images/office_deal.jpg' title="People"></BigPicture>
  <PersonList></PersonList>
  <Footer></Footer>

</template>

<style scoped lang="scss">
.big-picture {
  margin: auto;
  margin-block: 50px;

  @include mobile {
    margin: 0;
  }
}
</style>
<script setup>
import Header from '../components/Header.vue'
import PersonList from '../components/PersonList.vue'
import BigPicture from '../components/BigPicture.vue'
import Footer from '../components/Footer.vue'



</script>
