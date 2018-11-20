<template>
  <div @click="$emit('input')" class="input-box">
    <span>输入点什么...</span>
  </div>
</template>

<script>
export default {
  
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
