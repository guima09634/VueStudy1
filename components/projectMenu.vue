<template>
  <transition name="el-zoom-in-top">
    <el-aside class="side-bar" width="250px">
      <div class="sider-header">
        <span class="el-dropdown-link choise-item font-bold">小狐狸游戏管理后台</span>
      </div>
    </el-aside>
    <MyMenu :menuTitles="menuList"/>
  </transition>
</template>

<script>
import MyMenu from './myMenu.vue'

export default {
  props: {
    menuList: {
      type: Array
    }
  }
}
</script>

