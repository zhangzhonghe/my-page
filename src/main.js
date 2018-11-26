import Vue from 'vue'
import App from './App.vue'
import chat from './assets/data.js'
import './assets/reset.css'

Vue.config.productionTip = false

new Vue({
  created() {
    this.chat = chat
    this.currentChat = chat.firstMsg
  },
  render: h => h(App),
}).$mount('#app')
