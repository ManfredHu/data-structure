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
    <ol>
      <li v-for="item in result" :key="item.value">
        值是{{item.value}}，次数为{{item.times}}
      </li>
    </ol>
    <h3>说明</h3>
    <p>
      输入框可以输入任意内容，以<code>,</code>号分割
    </p>
    <p>
      算法是用到了Object的key来进行统计计算次数，所以可能出现`1`和`'1'`相同的问题，如果有这个需求的同学可以通过类型区分的方式来进行排序。
    </p>
    <h3>过程日志输出</h3>
    <div id="processLog"></div>
  </div>
</template>

<script>
import log from '../util/log.js'
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
      log('统计每个数字出现的次数，输出Object统计对象:' + JSON.stringify(resultObj))
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
        log(`第${i + 1}次循环，统计数字${maxKey}出现的次数，出现了${maxNum}次`)
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
