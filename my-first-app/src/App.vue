<template>
  <div id="app">
    <!-- <img src="./assets/Qianbenying.jpg"> -->
    <div class="nav">
      <ul>
        <li>
          <router-link to="/hello">hello</router-link>
        </li>
        <li>
          <router-link to="/foo">foo</router-link>
        </li>
      </ul>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style>
body {
  background-color: #f8f8ff;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
.nav {
  position: fixed;
  width: 108px;
  left: 40px;
}
.nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.nav ul li {
  width: 108px;
  height: 48px;
  line-height: 48px;
  border: 1px solid #dadada;
  text-align: center;
}
.nav ul li a {
  text-decoration: none;
}
.main {
  height: 400px;
  margin-left: 180px;
  margin-right: 25px;
}
</style>
