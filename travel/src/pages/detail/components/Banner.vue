<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" />
      <div class="banner-small">
        <span class="iconfont banner-small-image">
          &#xe600;
        </span>
        {{this.bannerImgs.length}}
      </div>
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
      </div>
    </div>
    <fade-animation>
      <common-gallery :imgs="bannerImgs" v-show="showgallery" @close="handlegalleryClose"></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  data () {
    return {
      showgallery: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showgallery = true
    },
    handlegalleryClose () {
      this.showgallery = false
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
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
