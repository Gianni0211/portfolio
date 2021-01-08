<template>
  <div class="bg-custom h-screen ">

   <ScrollBar class="hidden md:flex"/>
   <div class="md:h-full flex md:items-center flex-col md:flex-row md:justify-center md:pt-36 h-full ">
   <Skills class="hidden md:flex"/>
   <MobileSkills class="md:hidden "/>
   <AboutPar class=""/>
   </div>
  </div>
</template>

<script>
import AboutPar from '../components/AboutPar'
import MobileSkills from '../components/MobileSkills.vue'
import ScrollBar from '../components/ScorllBar'
import Skills from '../components/Skills.vue'
export default {
 name: 'About',
 components:{
  ScrollBar,
  AboutPar,
  Skills,
  MobileSkills
 }

}
</script>

<style>

</style>