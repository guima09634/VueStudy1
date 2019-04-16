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
        /*{'后台': [{'功能1':'testShow/back'}, {'功能2':'back/two'}, {'功能3':'back/three'}]},
        {'客服': [{'功能1':''}, {'功能2':''}, {'功能3':''}]},
        {'储值': [{'功能1':''}, {'功能2':''}, {'功能3':''}]},*/
        {name:"后台", class:""},
        {name:"客服", class:""},
        {name:"储值", class:""}

      ]
    }
  }
}
</script>


