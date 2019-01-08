<template>
  <el-container>
    <el-aside>
      <el-menu
        style="width: 250px"
        class="el-menu-vertical-demo"
        :default-active="this.$router.path"
        router
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item
          style="width: 100%"
          v-for="(item,i) in navList"
          :key="i"
          :index="item.name"
        >
          {{ item.navItem }}
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        { name: '/', navItem: '项目介绍' },
        { name: '/findAppearMax', navItem: '选取数组出现频率最高的三个数' },
        { name: '/quickSort', navItem: '快速排序' }
      ]
    }
  },
  created () {
    debugger
  }
}
</script>

<style lang="less" module>
body{
  margin: 0
}
</style>
