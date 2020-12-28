<template>
  <div>
    <t-modal  :value="modalShow"  >
      <h2 class="text-center my-5">Titolo</h2>
      <h3 class="my-3">Descrizione:</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque esse perferendis vel consequatur nihil velit ratione ipsa vero excepturi atque assumenda voluptate minima, placeat dolore explicabo dolor sed aspernatur eveniet sit cumque enim nam amet perspiciatis labore? Sint molestiae possimus aspernatur sapiente ducimus ea. Inventore provident dolore hic dicta voluptatem.
      </p>
      <h3 class="my-5">Stack:</h3>
      <ul class="text-center">
        <li>Vue js</li>
        <li>Laravel</li>
        <li>Tailwind</li>

      </ul>
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
    
    
  },
 name: 'projectModal',
 
 data(){
   return {
     modalShow: false
   }
 },
 components: {
    
   },
   

}
</script>

<style scoped>


</style>