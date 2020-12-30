<template>
  <div>
    <t-modal  
    :value="value" 
    @closed="close" 
    :header="title"
    
     >
      
      <h3 class="my-3">Descrizione:</h3>
      <p>
        {{description}}
      </p>
      <h3 class="my-5">Stack:</h3>
      <p class="text-center">
        {{stack}}
      </p>
    </t-modal>
  </div>
</template>

<script>


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
      }
    
    
  },
 name: 'projectModal',
 
 data(){
   return {
     modalShow: false
   }
 },
 components: {
    
   },
methods: {
  close(){
    
    this.$emit('close')
  }
}
   

}
</script>

<style scoped>


</style>