<template>
  <div>
    <GetSum/>
  </div>  
</template>

<script>
  import GetSum from "./components/GetSum"
  import store from './store'
  
  export default({
    name:'App',
    template:`
      <App></App>
    `,
    components:{GetSum},
    store
  })
</script>

<style>
</style>