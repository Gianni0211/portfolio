<template>
  <div class="bg-custom h-screen   ">
    
   <MobileMenuBtn v-on:open="openMenu"/>
   <ScrollBar class="hidden md:flex"/>
   <Header class="p-3 md:p-0  my-auto" />
   <MobileMenu :open="isOpen" v-on:close="isOpen = false"/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import MobileMenu from '../components/MobileMenu.vue'
import MobileMenuBtn from '../components/MobileMenuBtn.vue'

import ScrollBar from '../components/ScorllBar'
export default {
 name: 'Home',

components:{
ScrollBar,
Header,
MobileMenu,
MobileMenuBtn,

},
data(){
  return {
    isOpen : false,
  }
},
methods: {
  openMenu(){
    
    this.isOpen = true;
    
  }
}
}

</script>

<style scoped>



</style>