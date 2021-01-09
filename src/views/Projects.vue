<template>
  <div class="bg-custom">
   <ScrollBar class="hidden md:flex"/>
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
        require('@/assets/media/airbnb/airbnb-show.png'),
        require('@/assets/media/airbnb/index-airbnb.png'),
        require('@/assets/media/airbnb/diventaHost.png'),
        require('@/assets/media/airbnb/pagamento-airbnb.png'),
        require('@/assets/media/airbnb/checkout-airbnb.png'),
        require('@/assets/media/airbnb/checkout-2.png'),
        require('@/assets/media/airbnb/categorie-airbnb.png'),
        ],
      description: 'Clone di Airbn con le funzionalità base. Gli utenti si possono registrare, richiedere di diventare Host, se un utente è Host può caricare il suo spazio sulla piattaforma. Tutti gli utenti possono vedere le stanze disponibili, se la stanza è libera, si può prenotare e esite un ricerca per parola, date disponibili e luogo',
      stack: 'Vue.JS Tailwind Laravel',
      github: 'https://github.com/Gianni0211/airbnb-clone'
  
    
      },
      presto: {
        title: 'Presto.it',
        header: require('@/assets/media/presto/presto_header.jpeg'),
        imgs: [
          require('@/assets/media/presto/presto_header.jpeg'),
          require('@/assets/media/presto/presto-create.jpeg'),
          require('@/assets/media/presto/presto-category.jpeg'),
          require('@/assets/media/presto/presto-footer.jpeg'),
          
          require('@/assets/media/presto/presto-revisor.jpeg'),
          require('@/assets/media/presto/presto-show.jpeg'),
          ],
        description: 'Sito di annunci tipo subito.it, che offre la possibilità di registrarsi, diventare revisore, aggiungere annunci, ricercare annunci per parola e categoria, aggiungere immagini e da revisore valutare gli annunci con gli score della Google Api.',
        stack: 'Laravel PHP Javascript Bootstrap',
        github: 'https://github.com/Gianni0211/presto.it'
      },
      trovalo: {
        title: 'Trovalo.it',
        header: require('@/assets/media/trovalo/trovalo-fr-header.png'),
        imgs: [
          require('@/assets/media/trovalo/trovalo-fr-header.png'),
          require('@/assets/media/trovalo/trovalo-category.png'),
          require('@/assets/media/trovalo/trovalo-index.png'),
          ],
        description: 'Frontend statico di un sito di annunci. Ha un sistema di filtraggio dei prodotti scritto in Javascript',
        stack: 'HTML CSS Javascript Bootstrap',
        github: 'https://github.com/Gianni0211/frontend-trovalo.it'
      },
      blog: {
        title: 'Blog Ricette',
        header: require('@/assets/media/blog/blog-header.png'),
        imgs: [
          require('@/assets/media/blog/blog-header.png'),
          require('@/assets/media/blog/blog-registration.png'),
          require('@/assets/media/blog/blog-index.png'),
          require('@/assets/media/blog/blog-show.png'),
          ],
        description: 'Blog di ricette, che implementa il CRUD in Laravel, con la possibilità di aggiungere like, registrarsi e aggiungere il proprio post',
        stack: 'HTML CSS Javascript Bootstrap Laravel',
        github: 'https://github.com/Gianni0211/blog-ricette'
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