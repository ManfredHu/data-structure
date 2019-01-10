<template>
  <el-container>
    <el-aside>
      <el-menu
        style="width: 250px"
        class="el-menu-vertical-demo"
        :default-active="$route.path"
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
import config from './config.js'
export default {
  data () {
    return {
    }
  },
  computed: {
    navList () {
      const { algorithmType, algorithmName } = config
      const navList = []
      algorithmType.forEach((element, index) => {
        navList.push({
          name: element,
          navItem: algorithmName[index]
        })
      })
      return navList
    }
  },
  created () {
    // console.log('this.$route.path', this.$route.path)
  },
  mounted () {
    // console.log('this.$route.path', this.$route.path)
  }
}
</script>

<style lang="less" module>
body{
  margin: 0
}
</style>
