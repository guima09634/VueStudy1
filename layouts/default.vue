<template>
  <el-container>
    <PageHeader :menuItem = "menuItem">
    </PageHeader>
    <el-container>
      <el-aside width="200px">
        <SideBar :menuList="menuList"></SideBar>
      </el-aside>
      <el-main>
        <transition name="el-fade-in-linear">
          <nuxt/>
        </transition>
      </el-main>
    </el-container>
  </el-container>
</template>


<script>
import PageHeader from '@/components/pageHeader.vue'
import SideBar from '@/components/projectMenu.vue'

export default {
  components: {
    PageHeader,
    SideBar
  },
  data () {
    return {
      menuItem: [
        {icon:'el-icon-star-on', name:'用户'},
        {icon:'el-icon-goods', name:'储值'},
        {icon:'el-icon-phone', name:'客服'}
      ],
      menuList: [
        {},
      ]
    }
  }
}
</script>


