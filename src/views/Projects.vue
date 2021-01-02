<template>
  <div class="bg-custom">
   <ScrollBar/>
   <div class="flex flex-col items-center justify-center h-screen">
   <h1 class="title">Progetti</h1>
   <div class="flex flex-wrap items-center w-2/3 justify-center project-container ">
   <ProjectCard v-for="project in projects" :key="project.title" class="m-1"   :project="project" />
   

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
  projects: {
    
    airbnb: {
      title: 'Airbnb Clone',
      header: require('@/assets/media/airbnb/header-airbnb.png'),
      imgs: [
        require('@/assets/media/airbnb/header-airbnb.png'),
        require('@/assets/media/airbnb/airbnb-show.png')
        ],
      description: 'Clone di Airbn con le funzionalità base. Gli utenti si possono registrare, richiedere di diventare Host, se un utente è Host può caricare il suo spazio sulla piattaforma. Tutti gli utenti possono vedere le stanze disponibili, se la stanza è libera, si può prenotare e esite un ricerca per parola, date disponibili e luogo',
      stack: 'Vue.JS Tailwind Laravel'
  
    
      },
      presto: {
        title: 'Presto.it',
        header: require('@/assets/media/presto/presto_header.jpeg'),
        imgs: [
          require('@/assets/media/presto/presto_header.jpeg'),
          require('@/assets/media/presto/presto-create.jpeg')
          ],
        description: 'Sito di annunci tipo subito.it, che offre la possibilità di registrarsi, diventare revisore, aggiungere annunci, ricercare annunci per parola e categoria, aggiungere immagini e da revisore valutare gli annunci con gli score della Google Api.',
        stack: 'Laravel PHP Javascript Bootstrap'
      },
      trovalo: {
        title: 'Trovalo.it',
        header: require('@/assets/media/trovalo/trovalo-fr-header.png'),
        imgs: [
          require('@/assets/media/trovalo/trovalo-fr-header.png'),
          require('@/assets/media/trovalo/trovalo-category.png')
          ],
        description: 'Frontend statico di un sito di annunci. Ha un sistema di filtraggio dei prodotti scritto in Javascript',
        stack: 'HTML CSS Javascript Bootstrap'
      },
      blog: {
        title: 'Blog Ricette',
        header: require('@/assets/media/blog/blog-header.png'),
        imgs: [
          require('@/assets/media/blog/blog-header.png'),
          require('@/assets/media/blog/blog-registration.png')
          ],
        description: 'Blog di ricette, che implementa il CRUD in Laravel, con la possibilità di aggiungere like, registrarsi e aggiungere il proprio post',
        stack: 'HTML CSS Javascript Bootstrap Laravel'
      },
  }
    
    
    
   };
 },
 components: {
  ScrollBar,
  ProjectCard,
  
 },
 
 }
 


</script>

<style scoped>
.title{
  font-family: 'Lora', serif;
 text-align: center;
 font-size: 250%;
 margin-bottom: 60px;
 color: var(--main-color);
}
</style>