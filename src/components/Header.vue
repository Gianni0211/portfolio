<template>
  
    <kinesis-container class=" h-screen bg-header text-header flex flex-col justify-center items-center">
        
          <kinesis-element class="title" :strength="20">
            Gianni Mondello
          </kinesis-element>
          <kinesis-element class="sub-title" :strength="30">
            Web Developer
          </kinesis-element>
      </kinesis-container>
  
</template>

<script>
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
export default {
 name: 'Header',
 components: {
   KinesisContainer,
   KinesisElement
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