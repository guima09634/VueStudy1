<template>
  <div class="control-bar clearfix">
    <div class="header-line pos-rel display-flex">
      <div v-for="(item, index) in menuItem" :key="item.index">
        <i :class="item.icon"></i>
        <el-menu-item :index="index">{{ item.name }}</el-menu-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    menuItem:{
      type:Array
    }
  }
}
</script>
