<template>
  <div class="bg-custom ">
   <ScrollBar/>
   <Header/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import ScrollBar from '../components/ScorllBar'
export default {
 name: 'Home',

components:{
ScrollBar,
Header
}
}

</script>

<style scoped>



</style>