<template>
  <div>
    <div v-for="(key, value) in web" :key="value.index">
      <p>{{ value }}</p>
    </div>
    <div v-for="item in testArray" :key="item.index">
      <div v-for="(key, value) in item" :key="value.index">
        {{ value }}
        <div v-for="item_item in key" :key="item_item.index">
          <p>{{ item_item }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testArray: [
        {'后台': ['功能1', '功能2', '功能3']},
        {'客服': ['功能1', '功能2', '功能3']},
        {'储值': ['功能1', '功能2', '功能3']}
      ],
      web:{
        "百度":"https://www.baidu.com",
        "搜狐":"https://www.sohu.com",
        "新浪":"https://www.sina.com",
        "淘宝":"https://www.taobao.com"
      }
    }
  }
}
</script>

