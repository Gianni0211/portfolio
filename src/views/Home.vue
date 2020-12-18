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

.bg-custom{
 background-color:white;
 height: 100vh;
}

</style>