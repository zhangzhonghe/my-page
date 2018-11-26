<template>
  <main @click="onCloseSideBar" class="home-page" :style="{transform: `translateX(-${touchMoveX}px)`, transition: addAnimation ? 'all .5s' : ''}">
    <div
      class="slider"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
      @click.stop
      ></div>
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
      placeholder: '说点什么...',
      touchMoveX: 0,
      addAnimation: false,
      addMarginToSender: true
    }
  },
  components: {
    ChatBox,
    InputBox,
  },
  mounted() {
    this.count = 1 // 从数组的第二个元素开始取值，为了不让聊天框添加margin
    this.chatData = this.$root.currentChat
    this.onNext()
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
        addMargin: this.addMarginToSender
      }
      
      this.addMarginToSender = false
      this.animationName = 'right'

      this.count = 0 // 用于获取消息

      // 延迟发送消息，等待输入框动画
      setTimeout(() => {
        this.msg.push(send)
        // 在组件全部渲染完成后执行，以获得准确的scrollHeight
        this.$nextTick(() => {
          this._scrollToEnd()
        })
      }, 400);
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
        loadingTime: this._getLoadingTime(item.text)
      }

      this.animationName = 'left'
      this.addMarginToSender = true
      
      this.msg.push(msg)
      this._scrollToEnd()
    },

    onSuccess () {
      this._scrollToEnd()
    },

    onTouchStart (e) {
      this.addAnimation = false
      this.touchStartX = e.targetTouches[0].clientX
    },

    onTouchMove (e) {
      if(this.touchMoveX === 160) return
      const x = this.touchStartX - e.targetTouches[0].clientX
      if(x < 0) return
      if(x >= 160) return
      this.touchMoveX = x
    },

    onTouchEnd () {
      if(this.touchMoveX >= 50) {
        this.addAnimation = true
        this.touchMoveX = 160
      } else {
        this.addAnimation = true
        this.touchMoveX = 0
      }
    },

    onCloseSideBar () {
      this.touchMoveX = 0
    },

    _scrollToEnd () {
      clearTimeout(this.timer)

      this.animationLoop = true
      this.timer = setTimeout(() => {
        this.animationLoop = false
      }, 500);

      const chats = this.$refs.chats
      this.minFrame = Math.ceil((chats.scrollHeight - chats.scrollTop - chats.clientHeight) / 30) + 5
      if(chats.scrollHeight - chats.clientHeight) this._scrollAnimation()
    },

    _scrollAnimation () {
      "use strict";
      const chats = this.$refs.chats
      chats.scrollTop += this.minFrame
      if(this.animationLoop) window.requestAnimationFrame(this._scrollAnimation)
    },

    _getLoadingTime (text) {
      const len = text.length

      if(len <= 5) return len * 100
      if(len <= 10) return (len - 5) * 80 + 500
      if(len <= 20) return (len -10) * 25 + 900
      if(len > 20) return (len - 20) * 10 + 1150
    }
  }
}
</script>

<style scoped>
  .home-page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eee;
    overflow: hidden;
    z-index: 2;
  }

  .chat-container {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 3em;
    overflow-x: hidden;
    overflow-y: scroll;
  }

  .chat-container > div:first-child {
    padding: 1em 0 2em;
  }

  .slider {
    position: fixed;
    width: 2em;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0);
    z-index: 2;
  }

  /* 动画部分 */
  .left-enter-active,
  .right-enter-active {
    transition: transform 300ms cubic-bezier(.75,1.6,.68,.8);
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
