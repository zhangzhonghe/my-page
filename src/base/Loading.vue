<template>
  <div class="loading">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>

<script>
export default {
  name: 'Loading'
}
</script>

<style scoped>
  .loading {
    display: flex;
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #bbe6d6;
    transform: scale(0);
    margin: 0 .2em;
  }

  .dot:first-child {
    animation: dot1 .8s linear infinite alternate;
  }

  .dot:nth-child(2) {
    animation: dot2 .8s linear .1s infinite alternate;
  }

  .dot:last-child {
    animation: dot3 .8s linear .2s infinite alternate;
  }

  @keyframes dot1 {
    0% { transform: scale(1); }
    50% { transform: scale(0); }
    100% { transform: scale(0); }
  }
  @keyframes dot2 {
    0% { transform: scale(1); }
    50% { transform: scale(0); }
    100% { transform: scale(0); }
  }
  @keyframes dot3 {
    0% { transform: scale(1); }
    50% { transform: scale(0); }
    100% { transform: scale(0); }
  }
</style>
