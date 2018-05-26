<template>
  <div class="hello">
    <h1>这个是hello页面</h1>
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
