<template>
  <div 
   class="float-right bg-bar flex justify-center border-bar">
   <ul class=" flex flex-col justify-around my-36 px-1 ">
    <router-link 
    :to="{name: 'home'}" 
    
    tag="li"
    >
    <div
    class=" flex flex-col items-center justify-center" 
    @mouseover="showHome" 
    @mouseleave="closeHome" 
    >
     <i   id="homeIcon" class="fas fa-home icon "></i>
     <p  id="homeTitle" class="nav-title" >Home</p>

    </div>
    </router-link>
    <router-link    :to="{name: 'about'}" >
      <div
    class=" flex flex-col items-center justify-center" 
    @mouseover="showAbout" 
    @mouseleave="closeAbout" 
    >
     <i id="aboutIcon"  class="far fa-address-card icon"></i>
     <p id="aboutTitle" class="nav-title">About</p>
      </div>
    </router-link>
    
    <router-link :to="{name: 'projects'}" tag="li">
      <div
    class=" flex flex-col items-center justify-center" 
    @mouseover="showProjects" 
    @mouseleave="closeProjects" 
    >
     <i id="projectIcon" class="fas fa-project-diagram icon"></i>
     <p id="projectTitle" class="nav-title">Progetti</p>
      </div>
    </router-link>
    <router-link :to="{name: 'contact'}" tag="li">
      <div
    class=" flex flex-col items-center justify-center" 
    @mouseover="showContact" 
    @mouseleave="closeContact" 
    >
     <i id="contactIcon" class="fas fa-file-contract icon"></i>
     <p id="contactTitle" class="nav-title">Contatti</p>
      </div>
    </router-link>
   </ul>
  </div>
</template>

<script>
export default {
 name: 'ScrollBar',
 
 methods: {
   showHome(){
    let homeIcon = document.getElementById('homeIcon');
    let homeTitle = document.getElementById('homeTitle'); 
    homeIcon.classList.add('icon-out');
     
    homeTitle.classList.add('title-in');
    
   },
   showAbout(){
    let aboutIcon = document.getElementById('aboutIcon');
    let aboutTitle = document.getElementById('aboutTitle');
    aboutIcon.classList.add('icon-out');
    aboutTitle.classList.add('title-in');
   },
   showProjects(){
    let projectIcon = document.getElementById('projectIcon');
    let projectTitle = document.getElementById('projectTitle');
    projectIcon.classList.add('icon-out');
    projectTitle.classList.add('title-in');
   },
   showContact(){
    let contactIcon = document.getElementById('contactIcon');
    let contactTitle = document.getElementById('contactTitle');
    contactIcon.classList.add('icon-out');
    contactTitle.classList.add('title-in');
   },
   closeHome(){
    let homeIcon = document.getElementById('homeIcon');
    let homeTitle = document.getElementById('homeTitle'); 
    homeIcon.classList.remove('icon-out');
     
    homeTitle.classList.remove('title-in');
     
   },
   closeAbout(){
    let aboutIcon = document.getElementById('aboutIcon');
    let aboutTitle = document.getElementById('aboutTitle');
    aboutIcon.classList.remove('icon-out');
    aboutTitle.classList.remove('title-in');
   },
   closeProjects(){
    let projectIcon = document.getElementById('projectIcon');
    let projectTitle = document.getElementById('projectTitle');
    projectIcon.classList.remove('icon-out');
    projectTitle.classList.remove('title-in');
   },
   closeContact(){
    let contactIcon = document.getElementById('contactIcon');
    let contactTitle = document.getElementById('contactTitle');
    contactIcon.classList.remove('icon-out');
    contactTitle.classList.remove('title-in');
   }
 }
   
  }
 

</script>

<style scoped>
.icon{
  position: relative;
  top: 10px;
  transition: .5s;
  opacity: 1;
  cursor: pointer;
  color: var(--accent-color);
  padding: 1px;
}
.icon-out{
  opacity: 0;
}

.nav-title{
  position: relative;
  top: -10px;
  transition: .5s;
  opacity: 0;
  font-size: 75%;
  font-family: 'Lora', serif;
  color: var(--accent-color);
  cursor: pointer;
  padding: 1px;
}
.title-in{
  opacity: 1;
}

.bg-bar{
 background-color: var(--third-color);
 height: 100vh;
}

.border-bar{
 border-left: 3px solid var(--accent-color);
 
}



</style>