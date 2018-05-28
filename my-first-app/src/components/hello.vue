<template>
  <div class="hello">
    <!--{{ this.$route.params.num }}-->
    <h1>这个是hello页面传过来的参数</h1>
    <h1>{{$route.params.hparam1}}</h1>
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
  props: ['logo']

}
</script>
