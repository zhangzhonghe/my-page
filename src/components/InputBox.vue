<template>
  <div @click="$emit('input')" class="input-box">
    <span>说点什么...</span>
    <div class="question-nav">
      <transition tag="ul">
        <li></li>
      </transition>
    </div>
    <div class="question-list"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questionType: [
        []
      ]
    }
  }
}
</script>

<style scoped>
  .input-box {
    line-height: 1;
    padding: 1em;
    background-color: #fcfcfc;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    color: rgba(0, 0, 0, .4);
  }
</style>
