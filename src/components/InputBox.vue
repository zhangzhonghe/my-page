<template>
  <div class="input-box">
    <transition name="question">
      <div v-show="showQuestion" class="question-nav">
        <div class="nav-header">
          <span>说点什么...</span>
          <i @click="onHideQuestion"></i>
        </div>
        <div v-show="!questionList.length" class="nav">
          <div v-for="item of questionType" :key="item.key" @click="onCommit(item.key)">{{item.value}}</div>
        </div>
        <div v-show="questionList" class="question-list">
          <div v-for="item of questionList" :key="item.key" @click="onCommit(item.key)">{{item.value}}</div>
        </div>
      </div>
    </transition>
    <div v-show="!showQuestion" class="question-btn" @click="onShowNav">{{placeholder}}</div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String
  },
  data() {
    return {
      showQuestion: false,
      inputing: false,
      questionType: [
        { key: 'interest', value: '爱好' },
        { key: 'book', value: '书籍' },
        { key: 'works', value: '作品' },
        { key: 'movie', value: '电影' },
        { key: 'music', value: '音乐' },
        { key: 'work', value: '工作' },
        { key: 'dream', value: '梦想' },
        { key: 'family', value: '家庭' },
        { key: 'contact', value: '联系' },
        { key: 'about', value: '关于' },
      ],
      questionList: [
        { key: 'key1', value: '你好' },
        { key: 'key2', value: '为什么不能输入文字？' },
      ]
    }
  },
  methods: {
    onShowNav () {
      if(this.inputing) return
      if(this.placeholder === '对方正在输入...') return
      this.showQuestion = true
    },

    onHideQuestion () {
      this.showQuestion = false
    },

    onCommit (key) {
      // 这个定时器是为了不让用户重复点击
      this.inputing = true
      setTimeout(() => {
        this.inputing = false
      }, 1000);

      const chatData = this.$root.currentChat[key]
      this.$root.currentChat = chatData

      // 这个定时器是因为，切换动画需要500ms的
      setTimeout(() => {
        this.questionList = chatData.questionList
        if(!this.questionList.length) {
          this.$root.currentChat = this.$root.chat
        }
      }, 500);

      this.$emit('input', key, chatData)
      this.showQuestion = false
    }
  }
}
</script>

<style scoped>
  .input-box {
    line-height: 1;
    background-color: #fcfcfc;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    color: rgba(0, 0, 0, .4);
    z-index: 10;
    overflow: visible;
  }

  .question-btn {
    background-color: #fcfcfc;
    z-index: 1;
    padding: 1em;
  }

  .nav {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 0 1em 1em;
  }

  .nav > div {
    font-size: 1em;
    padding: .5em 1em;
    background-color: #42b983;
    color: #eee;
    border-radius: 4px;
    margin-top: .5em;
  }

  .nav-header {
    position: relative;
    padding: .8em 1em;
    border-bottom: 1px solid rgba(0, 0, 0, .05);
    margin-bottom: .5em;
  }

  .nav-header > i {
    display: block;
    position: absolute;
    right: .5em;
    top: .3em;
    padding: 1em;
  }

  .nav-header > i::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(-45deg);
    width: 1em;
    height: 2px;
    background-color: rgba(0, 0, 0, .2);
  }

  .nav-header > i::after {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    width: 1em;
    height: 2px;
    background-color: rgba(0, 0, 0, .2);
  }

  .question-nav {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fcfcfc;
    box-shadow: 0 0 0 1500px rgba(0, 0, 0, .5);
  }

  .question-list > div {
    padding: .8em 1em;
    border-bottom: 1px solid rgba(0, 0, 0, .05);
    color: #333;
  }

  .question-list > div:first-child {
    padding-top: .3em;
  }

  .question-list > div:last-child {
    border-bottom: none;
  }

  .question-enter-active,
  .question-leave-active {
    transition: all .4s;
  }

  .question-enter,
  .question-leave-to {
    transform: translateY(100%);
    box-shadow: 0 0 0 1500px rgba(0, 0, 0, 0);
  }
</style>
