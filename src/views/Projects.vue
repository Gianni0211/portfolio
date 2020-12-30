<template>
  <div class="bg-custom">
   <ScrollBar/>
   <div class="flex flex-col items-center justify-center h-screen">
   <h1 class="text-center">Projects</h1>
   <div class="flex">
   <ProjectCard class="mx-5"  :project="airbnb" />
   <ProjectCard  :project="trovalo"/>

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
    title: 'Airbnb Clone',
    header: require('@/assets/media/airbnb/header-airbnb.png'),
    description: 'Clone di Airbn con le funzionalità base. Gli utenti si possono registrare, richiedere di diventare Host, se un utente è Host può caricare il suo spazio sulla piattaforma. Tutti gli utenti possono vedere le stanze disponibili, se la stanza è libera, si può prenotare e esite un ricerca per parola, date disponibili e luogo',
    stack: 'Vue.JS Tailwind Laravel'

  
    },
    trovalo: {
      header: require('@/assets/media/trovalo/trovalo-fr-header.png'),
      description: 'Frontend statico di un sito di annunci. Ha un sistema di filtraggio dei prodotti scritto in Javascript',
      stack: 'HTML CSS Javascript Bootstrap'
    }
    
    
    
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