<template>
  <div>
    <nav-bar class="nav-bar">
      <span class="nav-title" slot="title">主页</span>
  </nav-bar>
    <p>
      <router-link to="/baidu">
       百度</router-link>
      <router-link to="/search360">
       360</router-link>
      <router-link to="/sougou">
       搜狗</router-link>
      </p>
  </div>
</template>

<script>
import {NavBar} from 'vant'
import 'vant/packages/vant-css/lib/base.css'
import 'vant/packages/vant-css/lib/nav-bar.css'
export default {
  name: 'HelloCustomer',
  data () {
    return {
      // msg: 'Bow to the king'
    }
  },
  components: {
    NavBar
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
