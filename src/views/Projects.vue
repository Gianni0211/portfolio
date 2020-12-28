<template>
  <div class="bg-custom">
   <ScrollBar/>
   <div class="flex flex-col items-center justify-center h-screen">
   <h1 class="text-center">Projects</h1>
   <div class="flex">
   <ProjectCard class="mx-5" />
   <ProjectCard />

   </div>
     
   
   

   </div>
  </div>
</template>

<script>
import ProjectCard from '../components/ProjectCard.vue'

import ScrollBar from '../components/ScorllBar'
export default {
 name: 'Projects',
 data(){
   return {
     
  airbnb: {
  

  
    },
    
    
    
   };
 },
 components: {
  ScrollBar,
  ProjectCard,
  
 },
 
 }
 


</script>

<style>

</style>