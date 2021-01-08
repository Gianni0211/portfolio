<template>
  <div class="bg-custom">
   
   <ScrollBar/>
   <div class=" h-full flex flex-col items-center justify-start pt-10 ">
     <h1 class="title">Contatti</h1>
     <div class="my-5 flex flex-col items-center">
       <i class="fas fa-phone icons my-5"></i>
       <p>3515605501</p>
     </div>
     <div class="my-5 flex flex-col items-center">
       <i class="fas fa-envelope-open-text icons my-5"></i>
       <p>gianni.mondello@live.it</p>
     </div>
     <div class="my-5">
       <a href="https://www.linkedin.com/in/gianni-mondello-b0b180107/" target="_blank" class="fab fa-linkedin-in icons"></a>
     </div>
     <div class="my-5">
       <a href="https://github.com/Gianni0211" target="_blank" class="fab fa-github icons"></a>
     </div>
   </div>
  </div>
</template>

<script>
import ScrollBar from '../components/ScorllBar'
export default {
 name: 'Contact',
 components: {
  ScrollBar
 }

}
</script>

<style scoped>
*{
  font-family: 'Lora', serif;
  color: var(--main-color);
}
.title{
font-family: 'Lora', serif;
text-align: center;
font-size: 250%;
margin-bottom: 60px;
color: var(--main-color);
}
.icons{
font-size: 200%;
color: var(--accent-color);

}
a{
  transition: .5s;
}
a:hover{
transform: scale(1.2);
}
</style>