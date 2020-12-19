<template>
  
    <kinesis-container class=" h-screen bg-header text-header flex flex-col justify-center items-center ">
        <slide-x-left-transition :duration="2000"   >
          <kinesis-element v-show="show"  class="title inline-block" :strength="20">
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
   ZoomCenterTransition

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
.bg-header{
  background-color: var(--second-color);
}
.text-header{
  color: var(--main-color);
}
.title{
  font-family: 'Pacifico', cursive;
  font-size: 500%;
}
.sub-title{
  font-family: 'Lora', serif;
  font-size: 300%;

}

</style>