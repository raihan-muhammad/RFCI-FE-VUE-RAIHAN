<template>
  <div id="app">
    <Users msg="User List"/>
  </div>
</template>

<script>
import Users from './components/Users.vue'

export default {
  name: 'App',
  components: {
    Users
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f5f7fa;
  margin: 0;
  padding: 10;
}
</style>
