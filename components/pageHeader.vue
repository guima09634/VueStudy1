<template>
  <div class="control-bar clearfix">
    <div class="header-line pos-rel display-flex">
      <el-menu
        default-active="1"
        mode="horizontal"
        size="medium">
        <el-menu-item v-for="(item,index) in menuItem" :key="index" :index="index">
          <a href="#"><i :class="item.class"/>{{ item.name }}</a>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
import Util from '@/lib/util.js'

export default {
  props:{
    menuItem:{
      type:Array
    }
  }
}
</script>
