<template>
  <div>
    <p>后台主界面1</p>
    <nuxt-link to="back/test1/test2">点我跳转</nuxt-link>
    <p>foobar：{{foobar}}</p>
  </div>
</template>

<script>
export default {
    props:['foobar']
}
</script>