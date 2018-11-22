import Vue from 'vue'
import App from './App.vue'
import chat from './assets/data.js'

Vue.config.productionTip = false

new Vue({
  created() {
    this.msg = chat
    this.currentMsg = chat
  },
  render: h => h(App),
}).$mount('#app')
