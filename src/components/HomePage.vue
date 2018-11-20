<template>
  <main class="home-page">
    <chat-box v-for="item of msg" :key="item.id" :location="item.location" :msg="item.msg"/>
    <input-box @input="onInput"/>
  </main>
</template>

<script>
import ChatBox from './ChatBox.vue'
import InputBox from './InputBox.vue'

export default {
  name: 'HomePage',
  data() {
    return {
      msg: [],
      isLeft: false,
    }
  },
  components: {
    ChatBox,
    InputBox,
  },
  methods: {
    onInput() {
      this.isLeft = !this.isLeft
      const data = {
        id: this.msg.length,
        location: this.isLeft ? 'left' : 'right',
        msg: '你好，我的朋友',
      }
      console.log(data)
      this.msg.push(data)
    }
  }
}
</script>

<style scoped>
  .home-page {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 3em;
    padding-bottom: 2em;
    background-color: #eee;
    overflow-y: auto;
  }
</style>
