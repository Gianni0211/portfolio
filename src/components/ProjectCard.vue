<template>
<div>
  <button @click="showModal" class="card ">
   <img :src="project.header" alt="">
   
  </button>
  <ProjectModal 
  :value="value" 
  v-on:close="value = false" 
  :title="project.title" 
  :description="project.description"
  :stack="project.stack"
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
 width: 350px;
 height:  200px;
 
 
 border-radius: 20px;
 transition: .5s;
}
.card:hover{
 border: solid 3px var();

}
.img-card{
  height: 100%;
  width: 100%
}

</style>