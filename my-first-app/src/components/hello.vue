<template>
  <div class="hello">
    <!--{{ this.$route.params.num }}-->
    <div>
      <h1>这个是hello页面传过来的参数{{$route.params.hparam1}}</h1>
    <router-link to="/child1">child1</router-link>
    <router-link to="/child2">child2</router-link>
    </div>
    <router-view></router-view>
    <h2></h2>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'this is the hello页面'
    }
  },
  props: ['logo'],
  watch: {
    $route (from, to) {
      console.log(from)
      console.log(to)
    }
  }

}
</script>
