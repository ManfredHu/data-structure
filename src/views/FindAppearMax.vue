<template>
  <div>
    <h1>选取数组出现频率最高的三个数</h1>
    <el-row>
      <el-col :span="18">
        <el-input autofocus v-model="input" placeholder="请输入数组，以,号分割"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" plain  @click="findAppearMax(3)">执行</el-button>
      </el-col>
    </el-row>
    <h2>结果</h2>
    <ul>
      <li v-for="item in result" :key="item.value">
        值是{{item.value}}，次数为{{item.times}}
      </li>
    </ul>
    <h3>说明</h3>
    <p>
      输入框可以输入任意内容，以<code>,</code>号分割
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '1,23,3,4,6,10,1,1,1,8,8,9,2,4,1,24,0',
      result: []
    }
  },
  methods: {
    // 按照obj的key分类放置
    findAppearMax (num) {
      const arr = this.input.split(/,|-|\//g)
      const resultObj = {}
      arr.forEach(item => resultObj[item] > 0 ? resultObj[item]++ : (resultObj[item] = 1))
      return this.getTop(resultObj, num)
    },
    // 排序输出前num个最大元素
    getTop (resultObj, num) {
      const result = []
      let maxKey = null // key
      let maxNum = 0 // value
      let firstTag = true
      for (let i = 0; i < num; i++) {
        firstTag = true
        for (const temp in resultObj) {
          if (firstTag) {
            firstTag = false
            maxKey = temp
            maxNum = resultObj[temp]
          } else {
            if (resultObj[temp] > maxNum) {
              maxKey = temp // 存储键
              maxNum = resultObj[temp] // 存储值
            }
          }
        }
        delete resultObj[maxKey]
        result.push({
          value: maxKey,
          times: maxNum
        })
      }

      this.result = result
    }
  },
  mounted () {
    // default execute
    if (this.input) {
      this.findAppearMax(3)
    }
  }
}
</script>
