<template>
  <div>
    <h1>堆排序</h1>
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
          @click="heapSort"
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
    <img src="../image/heapSort.gif" alt="插入排序" />
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
      compareTimes: 0
    }
  },
  methods: {
    heapSort () {
      this.arr = this.input.split(/,|-|\//g).map(item => +item)
      for (let i = 1; i < this.arr.length; i++) {
        let preIndex = i - 1
        let currentValue = this.arr[i]
        while (preIndex >= 0 && this.arr[preIndex] > currentValue) {
          this.arr[preIndex + 1] = this.arr[preIndex]
          preIndex--
        }
        this.arr[preIndex + 1] = currentValue
        log(`第${i}躺排序，排序结果为:${this.arr}`)
      }
      log(`最后数组为${this.arr}`)
    }
  },
  mounted () {
    // default execute
    if (this.input) {
      this.heapSort()
    }
  }
}
</script>

<style>
</style>
