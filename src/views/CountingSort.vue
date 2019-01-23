<template>
  <div>
    <h1>计数排序</h1>
    <el-row>
      <el-col :span="18">
        <el-input
          autofocus
          v-model="input"
          placeholder="请输入数组，以,号分割"
        ></el-input>
      </el-col>
      <el-col :span="6">
        <el-button
          type="primary"
          plain
          @click="countingSort"
          ref
        >执行</el-button>
      </el-col>
    </el-row>
    <h2>结果</h2>
    <ul>
      <li v-for="item in result" :key="item">
        值是{{item.value}}，次数为{{item.times}}
      </li>
    </ul>
    <h3>说明</h3>
    <p>
      输入框可以输入任意内容，以<code>,</code>号分割。
    </p>
    <h3>动图展示</h3>
    <img src="../image/countingSort.gif" alt="计数排序" />
    <h3>时间复杂度</h3>
    <p>
      时间复杂度是O(n+k)
    </p>
    <p>
      比较次数： {{compareTimes}}({{arr.length}} * {{arr.length-1}} / 2)
    </p>
    <h3>空间复杂度</h3>
    <p>
      空间复杂度是O(n+k)
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
      input: '2,3,8,7,1,2,2,2,7,3,9,8,2,1,4,2,4,6,9,2',
      result: [],
      arr: [],
      compareTimes: 0
    }
  },
  methods: {
    countingSort () {
      this.arr = this.input.split(/,|-|\//g).map(item => +item)
      const counting = {}
      for (let i = 0; i < this.arr.length; i++) {
        if (!counting[this.arr[i]]) {
          counting[this.arr[i]] = 0
        }
        counting[this.arr[i]]++
      }
      log(`收集次数信息:${JSON.stringify(counting)}`)
      const result = []
      for (let j in counting) {
        for (let time = 0; time < counting[j]; time++) {
          result.push(j)
        }
      }
      log(`最后排序结果为:${result}`)
      // log(`共${this.arr.length}个数，需要执行${this.arr.length - 1}躺排序`)
      // for (let i = 0; i < this.arr.length - 1; i++) {
      //   for (let j = 0; j < this.arr.length - 1 - i; j++) {
      //     this.compareTimes++
      //     if (+this.arr[j] > +this.arr[j + 1]) {
      //       this.swap(this.arr, j, j + 1)
      //     }
      //   }

      // }
    },
    swap (arr, i, j) {
      if (i === j) return
      log(`交换两个数arr[${i}]${arr[i]}和arr[${j}]${arr[j]}`)
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  },
  mounted () {
    // default execute
    if (this.input) {
      this.countingSort()
    }
  }
}
</script>

<style>
</style>
