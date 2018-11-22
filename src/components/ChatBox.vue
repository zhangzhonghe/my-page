<template>
  <div class="chat-box" :class="[location, { 'add-margin': addMargin }]">
    <div class="content">
      <img v-if="imgUrl" :src="imgUrl" @load="onImgLoad" alt="与中合聊天中">
      <span v-html="umsg"></span>
      <loading v-if="!umsg && !uimgUrl"/>
    </div>
  </div>
</template>

<script>
import Loading from '../base/Loading.vue'

export default {
  name: 'ChatBox',
  data() {
    return {
      umsg: '', // u字母开头，用以区分props
      uimgUrl: ''
    }
  },
  props: {
    location: String, // 值必须为left或者right
    msg: String,
    imgUrl: String,
    addMargin: Boolean,
    isSend: Boolean,
    loadingTime: Number
  },
  mounted() {
    if(this.imgUrl) return

    if(this.isSend) {
      this.umsg = this.msg

      setTimeout(() => {
        this.$emit('next')
      }, 800);

    } else {
      // 模仿异步操作，目的是显示loading图
      setTimeout(() => {
        this.umsg = this.msg
        this.$emit('success') // 触发成功获取信息的事件

        setTimeout(() => {
          this.$emit('next')
        }, 600);

      }, this.loadingTime);
    }
  },
  methods: {
    onImgLoad () {
      this.umsg = this.msg
      this.uimgUrl = this.imgUrl
      this.$emit('success') // 触发成功获取信息的事件
      setTimeout(() => {
        this.$emit('next')
      }, 600);
    }
  },
  components: {
    Loading
  }
};
</script>

<style scoped>
  .chat-box {
    margin-bottom: 10px;
  }

  .content img {
    width: 100%;
  }

  .content {
    position: relative;
    background-color: #fcfcfc;
    padding: .6em;
    margin: 0 10px;
    z-index: 1;
    border-radius: 10px;
    box-shadow: 4px 4px 8px #ddd;
    max-width: 66%;
  }

  .left {
    display: flex;
  }

  .left > .content::before {
    content: '';
    position: absolute;
    left: -0.2em; 
    transform: rotate(45deg);
    width: .6em;
    height: .6em;
    z-index: -1;
    background-color: #fcfcfc;
  }

  .right {
    display: flex;
    justify-content: flex-end;
  }

  .right > .content {
    background-color: #42b983;
    color: #fcfcfc;
  }

  .right > .content::before {
    content: '';
    position: absolute;
    right: -0.2em; 
    bottom: .8em;
    transform: rotate(45deg);
    width: .6em;
    height: .6em;
    z-index: -1;
    background-color: #42b983;
  }

  .add-margin {
    margin-top: 2em;
  }
</style>
