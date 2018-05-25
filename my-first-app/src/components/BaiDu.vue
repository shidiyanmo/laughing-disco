<template>
<div>
  <nav-bar class="nav-bar"
             left-text="返回"
             @click-left="back"
             left-arrow>
      <span class="nav-title" slot="title">百度</span>
  </nav-bar>
  <el-carousel :interval="4000" type="card" height="200px">
  <el-carousel-item v-for="item in 6" :key="item">
      <h3>{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
</div>

</template>

<script>

import {NavBar} from 'vant'
import 'vant/packages/vant-css/lib/base.css'
import 'vant/packages/vant-css/lib/nav-bar.css'

export default {
  name: 'BaiDu',
  data () {
    return {
    }
  },
  components: { NavBar
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
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
