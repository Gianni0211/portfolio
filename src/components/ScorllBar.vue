<template>
  <div @mousewheel.prevent="handelScroll" class="float-right bg-bar flex justify-center border-bar">
   <ul class="icon-color flex flex-col justify-around my-36 px-1 ">
    <router-link :to="{name: 'home'}" tag="li">
     <i class="fas fa-home"></i>
    </router-link>
    <router-link :to="{name: 'about'}" >
     <i class="far fa-address-card"></i>
    </router-link>
    <router-link :to="{name: 'projects'}" tag="li">
     <i class="fas fa-project-diagram"></i>
    </router-link>
    <router-link :to="{name: 'contact'}" tag="li">
     <i class="fas fa-file-contract"></i>
    </router-link>
   </ul>
  </div>
</template>

<script>
export default {
 name: 'ScrollBar',
 data(){
  return{
   
  }
 },
 
   
  }
 

</script>

<style scoped>
.bg-bar{
 background-color: var(--third-color);
 height: 100vh;
}
.icon-color{
 color: var(--accent-color);
 padding: 3px;
 transition: 1s;
 
}
.border-bar{
 border-left: 3px solid var(--accent-color);
 
}

li:hover{
  color: white;
  background-color: var(--accent-color);
  border-radius: 50%;
  
}

</style>