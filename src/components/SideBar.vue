<template>
  <aside>
    <div class="side-bar">
      <ul class="outer-link">
        <li><a target="_blank" href="https://github.com/zhangzhonghe">Github</a></li>
        <li><a target="_blank" href="https://www.zhihu.com/people/zhang-zhong-he/activities">知乎</a></li>
        <li><a target="_blank" href="https://weibo.com/u/1957557773/">微博</a></li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'SideBar'
}
</script>

<style scoped>
  aside {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 10em;
    background-color: #666;
    z-index: 1;
    box-shadow: 10px 10px 50px #333 inset;
  }

  .side-bar {
    height: 100%;
  }

  .outer-link {
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    text-shadow: 3px 3px 4px black;
  }

  a {
    display: block;
    color: #eee;
    padding: .5em 1em;
    text-decoration: none;
  }

  li {
    list-style: none;
  }
</style>
