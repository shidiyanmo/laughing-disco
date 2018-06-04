<template>
  <div id="app">
    <!-- <keep-alive exclude="Detail">
      <router-view/> // 不缓存Detail页面
    </keep-alive> -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
