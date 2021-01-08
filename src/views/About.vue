<template>
  <div class="bg-custom ">

   <ScrollBar/>
   <div class="h-full flex items-center  justify-center pt-36 ">
   <Skills/>
   <AboutPar/>
   </div>
  </div>
</template>

<script>
import AboutPar from '../components/AboutPar'
import ScrollBar from '../components/ScorllBar'
import Skills from '../components/Skills.vue'
export default {
 name: 'About',
 components:{
  ScrollBar,
  AboutPar,
  Skills
 }

}
</script>

<style>

</style>