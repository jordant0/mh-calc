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
body {
  min-height: 100vh;
  margin: 0;
  background-color: #1d2120;
  overflow: hidden;
}

#app {
  font-family: 'Open Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  text-align: center;
  color: #dfeae9;
}
</style>
