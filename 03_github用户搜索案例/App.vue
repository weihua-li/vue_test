<template>
  <div>
    <UsersSearch/>
    <UsersList/>
  </div>  
</template>

<script>
  import UsersList from "./components/UsersList"
  import UsersSearch from "./components/UsersSearch"
  
  export default({
    name:'App',
    template:`
      <App></App>
    `,
    components:{UsersList,UsersSearch},

  })
</script>

<style>

</style>