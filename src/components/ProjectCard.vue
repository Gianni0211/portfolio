<template>
<div>
  <button @click="showModal" class="card md:w-44 w-32  lg:w-80">
   <img :src="project.header" alt="">
   
  </button>
  <ProjectModal 
  :value="value" 
  v-on:close="value = false" 
  :title="project.title" 
  :description="project.description"
  :stack="project.stack"
  :imgs="project.imgs"
  :github="project.github"
  :link="project.link"
    />

</div>
</template>

<script>
import ProjectModal from '../components/projectModal.vue';
export default {
 props : [ 'project'],
 name: 'ProjectCard',
 components: {
   ProjectModal,
 },
 data(){
   return {
     value: false,
     close: false,
     
   }
 },


 methods: {
   showModal: function(){
     this.value = true;
   },
   
 },
  

}
</script>

<style scoped>
.card{
 
 border-radius: 20px;
 transition: .5s;
 
}

.card:hover{
 transform: scale(1.05);

}
.img-card{
  height: 100%;
  width: 100%
}

</style>