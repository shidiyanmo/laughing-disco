<template>
  <div>
    <div class="title">猜你喜欢</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img"  :src='item.imgUrl' />
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/c7/c74a66ec65491fc2a3.img.jpg_200x200_57fd010d.jpg',
        title: '青岛东方影都万达乐园',
        desc: '92'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/67/67b7bbdfaea81d7ba3.water.jpg_200x200_a1633ec7.jpg',
        title: '黄花溪',
        desc: '80'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1704/68/68486e04aa011ad1a3.water.jpg_200x200_e82d77d0.jpg',
        title: '泰和山风景区',
        desc: '78'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1607/de/de28c0907fe4117db4.img.jpg_200x200_4065816f.jpg',
        title: '潍坊欢乐海底世界',
        desc: '88'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201407/25/a6f2975f4d6624348233b612c7efbd2a.jpg_200x200_9eba4d95.jpg',
        title: '沂蒙山旅游区沂山景区',
        desc: '73'
      }]
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
  .item
    overflow: hidden
    display :flex
    height : 1.8rem
    .item-img
      width: 1.7rem
      height :1.7rem
      padding: .1rem
    .item-info
      flex :1
      padding :.1rem
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
