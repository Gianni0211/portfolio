<template>
  <div class="card ">
   <img src="../assets/media/airbnb/header.png" alt="">
  </div>
</template>

<script>
export default {
 
 name: 'ProjectCard'

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