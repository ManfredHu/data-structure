<template>
  <div>
    <h1>冒泡排序</h1>
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
          @click="bubbleSort"
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
    <img src="../image/bubbleSort.gif" alt="冒泡排序" />
    <h3>时间复杂度</h3>
    <p>
      比较次数： {{compareTimes}}({{arr.length}} * {{arr.length-1}} / 2)
    </p>
    <p>
      有n个数，一共需要执行n(n-1)/2次比较，时间复杂度为O(n^2)。
    </p>
    <h3>空间复杂度</h3>
    <p>
      无，都是数组内交换数字，O(1)
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
      compareTimes: 0
    }
  },
  methods: {
    bubbleSort () {
      this.arr = this.input.split(/,|-|\//g).map(item => +item)
      log(`共${this.arr.length}个数，需要执行${this.arr.length - 1}躺排序`)
      for (let i = 0; i < this.arr.length - 1; i++) {
        for (let j = 0; j < this.arr.length - 1 - i; j++) {
          this.compareTimes++
          if (+this.arr[j] > +this.arr[j + 1]) {
            this.swap(this.arr, j, j + 1)
          }
        }
        log(`第${i + 1}躺排序，排序结果为:${this.arr}`)
      }
    },
    swap (arr, i, j) {
      log(`交换两个数arr[${i}]${arr[i]}和arr[${j}]${arr[j]}`)
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  },
  mounted () {
    // default execute
    if (this.input) {
      this.bubbleSort()
    }
  }
}
</script>

<style>
</style>
