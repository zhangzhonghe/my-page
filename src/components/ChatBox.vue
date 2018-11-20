<template>
  <div class="chat-box" :class="location">
    <div class="content">
      <img v-if="imgSrc" src="" alt="">
      <span v-html="msg"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatBox',
  props: {
    location: String, // 值必须为left或者right
    msg: String,
    imgSrc: String,
  }
};
</script>

<style scoped>
  .chat-box {
    margin: 10px 0;
  }

  .content > img {
    width: 100%;
  }

  .chat-box > .content {
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
</style>
