<template>
  <div class="w-2/3 flex flex-col justify-start items-center container">
   <h1 class="title">Competenze Tecniche</h1>
   <div class="flex skills-container w-full  justify-center">
    <ul class=" w-1/3">
     <h2 class="mb-10 text-2xl">Frontend</h2>
     <li>
      <span><i class="fab fa-html5"></i></span>
      HTML
      </li>
     <li>
      <span><i class="fab fa-css3-alt"></i></span>
      CSS
      </li>
     <li>
      <span><i class="fab fa-js-square"></i></span>
      JavaScript
      </li>
     <li>
      <span><i class="fab fa-bootstrap"></i></span>
      Bootstrap
      </li>
     <li>
      <span><i class="fab fa-vuejs"></i></span>
      Vue.js
      </li>
    </ul>
    <ul class="w-1/3">
     <h2 class="mb-10 text-2xl">Backend</h2>
     <li>
      <span><i class="fab fa-php"></i></span>
      PHP
      </li>
     <li>
      <span><i class="fab fa-laravel"></i></span>
      Laravel
      </li>
     <li>
      <span><i class="fas fa-database"></i></span>
      MySql
      </li>
     
    </ul>
    <ul class="">
     <h2 class="mb-10 text-2xl">Generali</h2>
     <li>
      <span><i class="fas fa-code-branch"></i></span>
      Git
      </li>
     <li>
      <span><i class="fas fa-terminal"></i></span>
      Unix Shell
      </li>
     
     
    </ul>
  </div>
  </div>
</template>

<script>
export default {
name: 'Skills'
}
</script>

<style scoped>
.container{
   
   height: 600px;
}

.skills-container{
 color: var(--main-color);
 font-family: 'Lora', serif;
}
li{
 margin-bottom: 20px;
 @apply text-lg;
}
span{
 color: var(--accent-color);
 @apply text-2xl mr-5;
}
.title {
 font-family: 'Lora', serif;
 text-align: center;
 font-size: 200%;
 margin-bottom: 60px;
 color: var(--main-color);
}
</style>