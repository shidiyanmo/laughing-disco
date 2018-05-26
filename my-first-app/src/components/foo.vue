<template>
  <div class="hello">
    <h1>这个是foo页面</h1>
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
