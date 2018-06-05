<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul class="mp-like-list">
      <!-- <router-link to="/detail">
        <li class="item border-bottom" v-for="item of list" :key="item.id">
          <img class="item-img"  :src='item.imgUrl' />
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-desc">{{item.desc}}</p>
            <button class="item-button">查看详情</button>
          </div>
      </li>
      </router-link> -->
          <!-- tag 改变A标签字体颜色 -->
      <router-link tag="li" :to="'/detail/' + item.id" class="item border-bottom" v-for="item of list" :key="item.id">
        <img class="item-img"  :src='item.imgUrl' />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .title
    margin-top :.2rem
    line-height : .8rem
    background : #eee
    text-indent :.2rem
  .mp-like-list
    margin-left: .24rem
    .item
      overflow: hidden
      display :flex
      height : 1.9rem
      padding: .24rem 0
      .item-img
        width: 1.9rem
        height :1.9rem
      .item-info
        flex :1
        padding :.2rem .15rem
        min-width :0
        .item-title
          line-height : .54rem
          font-size :.32rem
          ellipsis()
        .item-desc
          line-height : .4rem
          color:#ff8300
          ellipsis()
        .item-button
          line-height : .44rem
          margin-top : .16rem
          background :#ff9300
          padding : 0 .2rem
          border-radius: .06rem
          color: #fff
</style>
