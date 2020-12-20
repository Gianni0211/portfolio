<template>
  <div id="app">

    <vue-page-transition >
  <router-view />
</vue-page-transition>
    
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
  
}
</script>

<style>
:root{
  --main-color: #bfc0c0;
  --second-color: #2d3142;
  --third-color: #4f5d75;
  --accent-color: #ef8354;
}
.overlay-left,  .overlay-right,  .overlay-top,  .overlay-bottom   {
    background: var(--third-color) !important;
}
</style>
