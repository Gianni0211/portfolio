<template>
  <div @mousewheel.prevent="handelScroll" class="float-right bg-bar flex justify-center border-bar">
   <ul class="icon-color flex flex-col justify-around my-36 px-1 ">
    <router-link :to="{name: 'home'}" tag="li">
     <i @mouseover="showHome" v-if="!homeOn" class="fas fa-home"></i>
     <p @mouseleave="closeHome" v-else>Home</p>
    </router-link>
    <router-link    :to="{name: 'about'}" >
     <i  @mouseover="showAbout" v-if="!aboutOn" class="far fa-address-card"></i>
     <p  @mouseleave="closeAbout" v-else>About</p>
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
   homeOn: false,
   aboutOn : false
  }
 },
 methods: {
   showHome(){
    this.homeOn = true
    
   },
   showAbout(){
     this.aboutOn = true
   },
   closeHome(){
     this.homeOn = false
     
   },
   closeAbout(){
     this.aboutOn = false
   }
 }
   
  }
 

</script>

<style scoped>
.bg-bar{
 background-color: var(--third-color);
 height: 100vh;
}
.icon-color{
 color: var(--accent-color);
 padding: 6px;
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