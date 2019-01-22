<template>
  <div>
    <h1>归并排序</h1>
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
          @click="mergeInit"
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
    <img src="../image/mergeSort.gif" alt="插入排序" />
    <h3>时间复杂度</h3>
    <p>
      时间复杂度平均为O(n^2)
      时间复杂度最坏为O(n^2)
      时间复杂度最好为O(n)，基本有序
    </p>
    <p>
      实际比较次数： {{compareTimes}}
    </p>
    <h3>空间复杂度</h3>
    <p>
      O(1)，稳定
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
      input: '3,44,38,5,47,15,36,26,27,2,46,4,19,50,48',
      result: [],
      arr: [],
      compareTimes: 0,
      roundTimes: 0
    }
  },
  methods: {
    mergeInit () {
      this.arr = this.input.split(/,|-|\//g).map(item => +item)
      this.arr = this.mergeSort(this.arr)
      log(`最后数组为${this.arr}`)
    },
    mergeSort (arr) {
      const len = arr.length
      if (len < 2) {
        return arr
      }
      const middle = Math.floor(len / 2)
      const left = arr.slice(0, middle)
      const right = arr.slice(middle)
      return this.merge(this.mergeSort(left), this.mergeSort(right))
    },
    merge (left, right) {
      this.roundTimes++
      log(`第${this.roundTimes}轮，合并数组${left}和${right}`)
      const result = []
      while (left.length > 0 && right.length > 0) {
        this.compareTimes++
        if (left[0] < right[0]) {
          result.push(left.shift())
        } else {
          result.push(right.shift())
        }
      }

      while (left.length) {
        this.compareTimes++
        result.push(left.shift())
      }

      while (right.length) {
        this.compareTimes++
        result.push(right.shift())
      }
      log(`得到结果${result}`)
      return result
    }
  },
  mounted () {
    // default execute
    if (this.input) {
      this.mergeInit()
    }
  }
}
</script>

<style>
</style>
