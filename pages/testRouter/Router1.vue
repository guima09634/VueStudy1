<template>
  <div>
    <div>
      <nuxt-link to="Router1/child1">跳转1</nuxt-link>
    </div>
    
    <div class="box">
      <P>子页面显示区</P>
      <nuxt-child keep-alive></nuxt-child>
    </div>
  </div>
</template>

<style>
  .box{
    margin-top: 20px;
    padding: 20px;
    border: 2px solid pink;
    border-radius: 5px;
  }
</style>

