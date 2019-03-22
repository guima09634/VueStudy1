<template>
  <div>
    <div>
      <p>后台主界面</p>
      <nuxt-link to="back/test1">点我跳转</nuxt-link>
    </div>
    <div>
      <p>嵌套页面显示区</p>
      <nuxt-child keep-alive></nuxt-child>
    </div>
  </div>
</template>
