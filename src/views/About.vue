<template>
  <div class="bg-custom ">

   <ScrollBar/>
   <div class="h-full flex items-center justify-end mr-24">

   <AboutPar/>
   </div>
  </div>
</template>

<script>
import AboutPar from '../components/AboutPar'
import ScrollBar from '../components/ScorllBar'
export default {
 name: 'About',
 components:{
  ScrollBar,
  AboutPar
 }

}
</script>

<style>

</style>