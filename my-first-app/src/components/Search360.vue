<template>
  <div style="background-color: #fff;width: 100%;height: 100%">
    <nav-bar class="nav-bar"
             left-text="返回"
             @click-left="back"
             left-arrow>
      <span class="nav-title" slot="title">360</span>
  </nav-bar>
  </div>
</template>

<script>
import {NavBar} from 'vant'
import 'vant/packages/vant-css/lib/base.css'
import 'vant/packages/vant-css/lib/nav-bar.css'
export default {
  name: 'Search360',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    NavBar
  },
  methods: {
    back () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
