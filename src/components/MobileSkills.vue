<template>
  <div class="text-center  order-last  ">
   <ul class="flex overflow-x-scroll mx-2 ">
    <li title="HTML" class="icon"><i class="fab fa-html5"></i></li>
    <li  class="icon"><i class="fab fa-css3-alt"></i></li>
    <li class="icon"><i class="fab fa-js-square">
     </i></li>
    <li class="icon"><i class="fab fa-bootstrap"></i></li>
    <li class="icon"><i class="fab fa-vuejs"></i></li>
    <li class="icon"><i class="mb-10 text-2xl"></i></li>
    <li class="icon"><i class="fab fa-php"></i></li>
    <li class="icon"><i class="fab fa-laravel"></i></li>
    <li class="icon"><i class="fas fa-database"></i></li>
    <li class="icon"><i class="fas fa-code-branch"></i></li>
    <li class="icon">
     <i class="fas fa-terminal"></i>
    </li>
   </ul>
   <span class="">
    <i class="arrow fas fa-arrows-alt-h"></i>
   </span>
  </div>
</template>

<script>
export default {
name: 'MobileSkills',
}
</script>

<style scoped>
.icon{
 margin-right: 20px;
 color: var(--accent-color);
 font-size: 2rem;
}
.arrow{
 color: var(--main-color);
 font-size: 1.3rem;
 margin-top: 2px;
}

</style>