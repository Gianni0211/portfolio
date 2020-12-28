<template>
<div>
  <button @click="modalShow = true" class="card ">
   <img src="../assets/media/airbnb/header.png" alt="">
  </button>
  <ProjectModal :value="value" :close="close"  />

</div>
</template>

<script>
import ProjectModal from '../components/projectModal.vue';
export default {
 
 name: 'ProjectCard',
 components: {
   ProjectModal,
 },
 data(){
   return {
     value: false,
     close: false
   }
 },
 watch: {
   close(){
    console.log('cambia');
   }
 },
 methods: {
   showModal: function(){
     console.log(ProjectModal);
   }
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