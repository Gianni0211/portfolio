<template>
<div class="md:hidden ">

  <button @click="open" >
   <i class="btn p-5 fas fa-bars"></i>

  </button>
  
</div>
</template>

<script>

export default {
name: 'MobileMenuBtn',
methods: {
 open(){
  this.$emit('open');
  
 }
}
}
</script>

<style scoped>
.btn{
 color: var(--accent-color);
 font-size: 160%;
 
}

</style>