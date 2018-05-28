<template>
  <div class="hello">
    <!--{{ this.$route.params.num }}-->
    <h1>这个是foo页面传过来的参数</h1>
    <h1>{{$route.params.fparam1}}</h1>
    <h1>{{$route.params.fparam2}}</h1>
    <h2></h2>
  </div>
</template>

<script>
export default {
  name: 'Foo',
  data () {
    return {
      msg: '这个是foo.vue页面'
    }
  },
  props: ['logo']
}
</script>
