<template>
  <div>
    <nav class="navbar navbar-light bg-warning">
      <a class="navbar-brand" href="#">聽，就細聽</a>
      <ul class="navbar-nav d-flex flex-row">
        <li class="nav-item mr-5">
          <a class="nav-link" href="#">首頁</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">我的歌單</a>
        </li>
      </ul>
    </nav>
  </div>
</template>


<script>
export default {
  name: 'navbar',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .navbar {
    padding: 20px;
  }
</style>
