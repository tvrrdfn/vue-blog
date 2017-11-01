<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'app'
};
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "styles/imports";

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: $dd-larioja;
    margin-top: 60px;
  }
</style>
