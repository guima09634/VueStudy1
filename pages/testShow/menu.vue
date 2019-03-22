<template>
  <div>
    <showMenu :menuTitles='testArray'></showMenu>
    <div>
      <nuxt-child keep-alive></nuxt-child>
    </div>
  </div>
</template>

<script>
import showMenu from '@/components/testMenu';

export default {
  data() {
    return {
      testArray:[
        {'后台': [{'功能1':'testShow/back'}, {'功能2':'back/two'}, {'功能3':'back/three'}]},
        {'客服': [{'功能1':''}, {'功能2':''}, {'功能3':''}]},
        {'储值': [{'功能1':''}, {'功能2':''}, {'功能3':''}]}
      ]
    }
  },
  components:{
    showMenu
  }
}
</script>

