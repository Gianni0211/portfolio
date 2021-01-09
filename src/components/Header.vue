<template>
  
    <kinesis-container class="   text-header flex flex-col md:h-full md:w-auto w-full     md:justify-center md:items-center ">
      
        <slide-x-left-transition :duration="2000"   >
          <kinesis-element v-show="show"  class="title inline-block " :strength="20">
            Gianni Mondello
          </kinesis-element>
        </slide-x-left-transition>
        <zoom-center-transition  :duration="600">
          <kinesis-element v-show="show" class="sub-title" :strength="30">
            Web Developer
          </kinesis-element>
        </zoom-center-transition>
      </kinesis-container>
  
</template>

<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
import { SlideXLeftTransition } from 'vue2-transitions'
import { ZoomCenterTransition } from 'vue2-transitions'

export default {
 name: 'Header',
 components: {
   KinesisContainer,
   KinesisElement,
   SlideXLeftTransition,
   ZoomCenterTransition,
   

 },
 data(){
   return {
     show: false
   }
 },
 mounted(){
   this.show = true
 }
 

}
</script>

<style scoped>

.text-header{
  color: var(--main-color);
}
.title{
  font-family: 'Pacifico', cursive;
  font-size: 400%;
}
.sub-title{
  font-family: 'Lora', serif;
  font-size: 200%;

}

</style>