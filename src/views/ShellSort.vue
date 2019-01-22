<template>
  <div>
    <h1>希尔排序</h1>
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
          @click="shellSort"
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
      输入框可以输入任意内容，以<code>,</code>号分割。希尔排序又叫缩小增量排序，关于gap的选定，比较有名的是gap=arr.length/3+1，但是这里跟图片保持一致，只是简单的除2
    </p>
    <h3>动图展示</h3>
    <img src="../image/shellSort.gif" alt="希尔排序" />
    <h3>时间复杂度</h3>
    <p>
      时间复杂度为O(n^2)。
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
      input: '84,83,88,87,61,50,70,60,80,99',
      result: [],
      arr: [],
      compareTimes: 0,
      roundTimes: 0
    }
  },
  methods: {
    shellSort () {
      this.arr = this.input.split(/,|-|\//g).map(item => +item)
      for (let gap = Math.floor(this.arr.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < this.arr.length; i++) {
          let temp = this.arr[i]
          let j = i - gap
          for (; j >= 0 && this.arr[j] > temp; j -= gap) {
            this.arr[j + gap] = this.arr[j]
          }
          this.arr[j + gap] = temp
          log(`第${++this.roundTimes}躺排序，排序结果为:${this.arr}`)
        }
      }
    },
    swap (arr, i, j) {
      if (i === j) return
      log(`此时数组为${arr},交换两个数arr[${i}](${arr[i]})和arr[${j}](${arr[j]})`)
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  },
  mounted () {
    // default execute
    if (this.input) {
      this.shellSort()
    }
  }
}
</script>

<style>
</style>
