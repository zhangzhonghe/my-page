<template>
  <div id="app">
    <home-page/>
    <side-bar/> 
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import SideBar from './components/SideBar.vue'

export default {
  name: 'app',
  components: {
    HomePage,
    SideBar
  }
}
</script>

<style>
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,body {
    margin: 0;
    padding: 0;
  }

  html { font-size: 10px; }

  body { font-size: 1.6rem; }

  a { color: blue; }
</style>
