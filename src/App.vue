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
