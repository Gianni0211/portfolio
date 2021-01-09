<template>
  <div class="menu" v-show="open" >
   <button @click="close" class="btn mx-auto ">
    <i class="fas fa-times"></i>
   </button>
   <ul class=" flex flex-col justify-around my-36 px-1  items-center ">
    <router-link 
    :to="{name: 'home'}" 
    
    tag="li"
    >
    
     
     <p   class="nav-title" >Home</p>

    
    </router-link>
    <router-link    :to="{name: 'about'}" >
      
     
     <p  class="nav-title">About</p>
      
    </router-link>
    
    <router-link :to="{name: 'projects'}" tag="li">
      
     
     <p  class="nav-title">Progetti</p>
      
    </router-link>
    <router-link :to="{name: 'contact'}" tag="li">
     
     
     <p  class="nav-title">Contatti</p>
     
    </router-link>
   </ul>
  </div>
</template>

<script>
export default {
 props: {
  open: {
   type: Boolean,
   default: false
  }
 },
 data(){
  return {
   
  }
 },
name: 'MobileMenu',
methods: {
 close(){
  this.$emit('close')
 }
}
}

</script>

<style scoped>
.menu{
 background-color: rgba(46, 50, 56, 0.9);
 z-index: 1000;
 height: 100vh;
 width: 100vw;
 position: absolute;
 top: 0;
 margin: 0;
 padding: 0;
 
 color: var(--accent-color);
 font-family: 'Pacifico', cursive;
 font-size: 120%;
}
.btn{
 font-size: 200%;
 float: right;
 padding: 10px 10px 0 0;
 align-self: start;
}
.nav-title{
 margin-top: 50px;
}
</style>