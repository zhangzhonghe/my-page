<template>
  <main class="home-page">
    <div class="chat-container" ref="chats">
      <transition-group :name="animationName" tag="div">
        <chat-box
          v-for="item of msg"
          :key="item.id"
          :location="item.location"
          :msg="item.msg"
          :img-url="item.imgUrl"
          :add-margin="item.addMargin"
          />
      </transition-group>
    </div>
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
      animationName: 'left',
    }
  },
  components: {
    ChatBox,
    InputBox,
  },
  methods: {
    onInput() {
      this.count || (this.count = 0)
      this.count++
      this.preLocation || (this.preLocation = 'left')

      const data = {
        id: this.msg.length,
        location: (this.count % 3 !== 0) ? 'left' : 'right',
        msg: '你好，我的朋友',
        // imgUrl: 'https://c1.staticflickr.com/5/4294/36256190276_11b9605c9f_b.jpg',
      }

      if (this.preLocation === data.location) {
        data.addMargin = false
      } else {
        data.addMargin = true
        this.preLocation = data.location
      }

      this.animationName = data.location
      this.msg.push(data)
      this._scrollToEnd()
    },
    
    _scrollToEnd () {
      this.$nextTick(() => {
        this.$refs.chats.scrollIntoView({ behavior: 'smooth', block: 'end' })
      })
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
    background-color: #eee;
    overflow-y: auto;
    scroll-behavior: smooth;
  }

  .chat-container {
    padding: 10px 0 2em;
  }

  /* 动画部分 */
  .left-enter-active,
  .right-enter-active {
    transition: transform .3s cubic-bezier(.75,1.6,.68,.8);
  }

  .left-enter,
  .right-enter {
    transform: scale(0);
  }

  .left-enter-to {
    transform-origin: top left;
  }

  .right-enter-to {
    transform-origin: top right;
  }
</style>
