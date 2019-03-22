<template>
  <div>
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
      <el-radio-button :label="false">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
      <div v-for="( item, index ) in menuTitles" :key="item.index">
        <div v-for="(key, value) in item" :key="key.index">
            <el-submenu :index="index.toString()">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">{{ value }}</span>
              </template>
              <div v-for="item_value in key" :key="item_value.index">
                <el-menu-item :index="item_value.index">
                  <div v-for="(key1, value1) in item_value" :key="value1.index">
                    <nuxt-link :to="key1">{{ value1 }}</nuxt-link>
                  </div> 
                </el-menu-item>
              </div>
            </el-submenu>
          </div>
      </div>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    menuTitles: {
      type: Array
    }
  },
  data(){
    return {
      isCollapse: true
    };
  }
}
</script>

<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>