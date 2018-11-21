<template>
  <div id="app">
    <home-page/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'

export default {
  name: 'app',
  components: {
    HomePage
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html,body {
    margin: 0;
    padding: 0;
  }

  html { font-size: 10px; }

  body { font-size: 1.6rem; }

  a { text-decoration: none; color: blue; }
</style>
