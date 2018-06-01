<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img"  :src='item.imgUrl' />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
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
        imgUrl: 'http://img1.qunarzz.com/sight/source/1606/51/dbef6b521ef429.jpg_r_640x214_b6018a46.jpg',
        title: '潍坊必游TOP5',
        desc: '一起走进世界风筝之都'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/87/b46b43303b585c.jpg_r_640x214_af2aa659.jpg',
        title: '泉城泉景知多少',
        desc: '泉景各异，各有千秋'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1507/c0/972d4ef88051a2.jpg_r_640x214_aac8f120.jpg',
        title: '亲子游天地',
        desc: '周末带宝贝来一场旅行'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1603/49/ffd9d0013325af.jpg_r_640x214_41889b57.jpg',
        title: '泰安春游赏花',
        desc: '快来一起坠入花海吧'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1605/f5/6be049232b4ce7.jpg_r_640x214_8f20617c.jpg',
        title: '淄博必游TOP5',
        desc: '畅游淄博，看这里'
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
  .item-img-wrapper
    overflow :hidden
    height :0
    padding-bottom :33.9%
    .item-img
      width :100%
  .item-info
    padding :.1rem
    .item-title
      line-height : .54rem
      font-size :.32rem
      ellipsis()
    .item-desc
      line-height : .4rem
      color:#ccc
      ellipsis()

</style>
