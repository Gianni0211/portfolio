<template>
  <div class="float-right bg-bar flex justify-center border-bar">
   <ul class="icon-color flex flex-col justify-around my-36 px-1 ">
    <li id="first" v-bind:class="{active: isOn}">
     <i class="fas fa-home"></i>
    </li>
    <li>
     <i class="far fa-address-card"></i>
    </li>
    <li>
     <i class="fas fa-project-diagram"></i>
    </li>
    <li>
     <i class="fas fa-file-contract"></i>
    </li>
   </ul>
  </div>
</template>

<script>
export default {
 name: 'ScrollBar',
 data(){
  return{
   isOn :false,
   isUserScrolling: null
  }
 },
 created(){
  window.addEventListener('scroll', this.handleScroll);
 },
 destroyed () {
  window.removeEventListener('scroll', this.handleScroll);
  },
 methods: {
  handleScroll(){
   
   this.isUserScrolling = (window.scrollY > 0);
      console.log('calling handleScroll');
   
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
}
.border-bar{
 border-left: 3px solid var(--accent-color);
 
}

.active{
 background-color: var(--accent-color);
 color: white;
}

</style>