<template>
  <div>
    <slide-y-down-transition
    :duration="1500"
    
    >
    
    <t-modal  
    :value="value" 
    @closed="close" 
    :header="title"
    class="text-center"
     >
      <div class="flex flex-col md:flex-row items-center">
      <modal-carousel :images="imgs" class="md:w-1/3 w-full mx-10 carousel"/>
      <div class="w-2/3">

      <h3 class="my-3 text-left font-bold">Descrizione:</h3>
      <p class="text-left">
        {{description}}
      </p>
      <h3 class="my-5 text-left font-bold">Stack:</h3>
      <p class="text-left">
        {{stack}}
      </p>
      </div>
      </div>
      <div class="flex justify-center items-center my-5 ">
        <a :href="link" class="btn mx-10" target="_blank" v-if="link !== ''" >
      <span class="arrow"><i class="fas fa-chevron-right"></i></span>
      <span>Vai al sito</span>
        </a>
        <a :href="github" class="icon" target="_blank">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </t-modal>
    
    </slide-y-down-transition>
  </div>
</template>

<script>
import {SlideYDownTransition} from 'vue2-transitions'
import ModalCarousel from './ModalCarousel.vue'


export default {
  props: {
    'value': {
      type: Boolean,
      default: false
      },
      'title': {
        type: String,
        dafault: ''
      },
      'description': {
        type: String,
        dafault: ''
      },
      'stack': {
        type: String,
        dafault: ''
      },
      'imgs': {
        type: Array,
        default: null
      },
      'github': {
        type: String,
        default: ''
      },
      'link': {
        type: String,
        default: ''
      }
    
    
  },
 name: 'projectModal',
 
 data(){
   return {
     modalShow: false
   }
 },
 components: {
    SlideYDownTransition,
    ModalCarousel,
    
   },
methods: {
  close(){
    
    this.$emit('close')
  }
}
   

}
</script>

<style scoped>
*{
  font-family: 'Lora', serif;
}
.carousel{
  height: 350px;
}
.icon{
  color: var(--third-color);
  font-size: 2rem;
  
  transition: .5s;
}

.icon:hover{
  transform: scale(1.3);
  color: var(--accent-color);

}
.btn{
  background-color: var(--second-color);
  color: var(--main-color);
  display: inline-block;
  text-decoration: none;
  
  border: 1px solid black;
  text-transform: uppercase;
  padding: 1rem 1.7rem;
  position: relative;
  background: linear-gradient(90deg, var(--second-color) 50%, var(--main-color) 50%);
  background-position: 0px 0px;
  background-size: 200%;
  transition: 0.8s;
}
.arrow{
  position: absolute;
  left: 16px;
  transition: 0.8s;
}
.btn:hover{
  color: var(--second-color);
  background-position: -120% 0px;
}
.btn:hover .arrow{
  color: var(--accent-color);
}

</style>