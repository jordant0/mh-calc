<script>
export default {
  name: 'App'
}
</script>

<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html {
  overflow: auto;
}

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  text-align: center;
  color: #2c3e50;
}
</style>
