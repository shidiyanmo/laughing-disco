<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1801/66/665b245a7ca8728a3.img.jpg_600x330_2cea36cb.jpg" />
      <div class="banner-small">
        <span class="iconfont banner-small-image">
          &#xe600;
        </span>
        7
      </div>
      <div class="banner-info">
        <div class="banner-title">杭州烂苹果乐园</div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1801/66/665b245a7ca8728a3.img.jpg_r_800x800_71237292.jpg', 'http://img1.qunarzz.com/sight/p0/1801/51/514682fe0823ce32a3.img.jpg_r_800x800_07f14edb.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden // -
    height 0          //防止页面抖动
    padding-bottom 55% // -
    .banner-img
      width 100%
    .banner-small
      position: absolute
      left: .2rem
      bottom: .86rem
      width: 1.2rem
      height: .4rem
      background: rgba(0,0,0,.5)
      border-radius: .2rem
      color: #fff
      line-height: .4rem
      text-align: center
      .banner-small-image
        position: relative
        top: .02rem
        overflow hidden
        font-size .21rem
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      border-radius .2rem
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
</style>
