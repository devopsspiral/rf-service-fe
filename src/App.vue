<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Config/>
    <Runner/>
  </div>
</template>

<script>
import Config from './components/Config.vue'
import Runner from './components/Runner.vue'

export default {
  name: 'App',
  components: {
    Config,
    Runner
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
