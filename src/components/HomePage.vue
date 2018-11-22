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
          :is-send="item.isSend"
          :loading-time="item.loadingTime"
          @success="onSuccess"
          @next="onNext"
          />
      </transition-group>
    </div>
    <input-box @input="onInput" :placeholder="placeholder"/>
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
      placeholder: '说点什么...'
    }
  },
  components: {
    ChatBox,
    InputBox,
  },
  methods: {
    onInput(key, chatData) {
      if(this.placeholder === '对方正在输入...') return

      this.chatData = chatData

      const send = {
        id: this.msg.length,
        location: 'right',
        msg: this.chatData.send,
        imgUrl: '',
        isSend: true,
        addMargin: true
      }
      
      this.animationName = 'right'

      this.count = 0 // 用于获取消息
      this.msg.push(send)
      this._scrollToEnd()
    },
    
    onNext () {
      this.placeholder = '对方正在输入...'
      const item = this.chatData.msg[this.count++]
      if(!item) {
        this.placeholder = '说点什么...'
        return
      }
      const msg = {
        id: this.msg.length,
        location: 'left',
        msg: item.text,
        imgUrl: item.imgurl,
        addMargin: this.count === 1 ? true : false,
        isSend: false,
        loadingTime: item.loadingTime
      }

      this.animationName = 'left'

      this.msg.push(msg)
      this._scrollToEnd()
    },

    onSuccess () {
      this._scrollToEnd()
    },

    _scrollToEnd () {
      this.$nextTick(() => {
        this.$refs.chats.scrollIntoView({ behavior: 'smooth', block: 'end' })
      })
    },
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
