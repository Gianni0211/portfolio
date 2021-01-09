<template>
  <div class="bg-custom h-screen ">

   <ScrollBar class="hidden md:flex"/>
   <div class="md:h-full flex md:items-center flex-col md:flex-row md:justify-center md:pt-36 h-full ">
     <MobileMenuBtn v-on:open="openMenu"/>
     <MobileMenu :open="isOpen" v-on:close="isOpen = false" />
   <Skills class="hidden md:flex"/>
   <MobileSkills class="md:hidden "/>
   <AboutPar class=""/>
   </div>
  </div>
</template>

<script>
import AboutPar from '../components/AboutPar'
import MobileMenu from '../components/MobileMenu.vue'
import MobileMenuBtn from '../components/MobileMenuBtn.vue'
import MobileSkills from '../components/MobileSkills.vue'
import ScrollBar from '../components/ScorllBar'
import Skills from '../components/Skills.vue'
export default {
 name: 'About',
 components:{
  ScrollBar,
  AboutPar,
  Skills,
  MobileSkills,
  MobileMenuBtn,
  MobileMenu
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

<style>

</style>