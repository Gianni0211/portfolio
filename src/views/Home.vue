<template>
  <div class="bg-custom ">
   <ScrollBar/>
  </div>
</template>

<script>
import ScrollBar from '../components/ScorllBar'
export default {
 name: 'Home',

components:{
ScrollBar
}
}

</script>

<style scoped>

.bg-custom{
 background-color:white;
 height: 100vh;
}

</style>