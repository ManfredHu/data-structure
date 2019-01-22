<template>
  <div>
    <h1>基数排序</h1>
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
          @click="radixSort"
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
    <img class="sortImg" src="../image/radixSort.gif" alt="冒泡排序" />
    <h3>时间复杂度</h3>
    <p>
      有n个数，看数字大小，分关键字为k.
      比如都是100以内则k=2需要k*2n个，时间复杂度为O(d*2n)
    </p>
    <p>
      比较次数： {{compareTimes}}
    </p>
    <h3>空间复杂度</h3>
    <p>
      基数排序的空间复杂度为O(n+k)，其中k为桶的数量。一般来说n>>k，因此额外空间需要大概n个左右。
      稳定
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
    radixSort () {
      this.arr = this.input.split(/,|-|\//g).map(item => +item)
      let hasLarge = true
      for (let mod = 10, divide = 1; hasLarge; divide *= 10) {
        let counter = []
        hasLarge = false
        for (let i = 0; i < this.arr.length; i++) {
          let num = parseInt(this.arr[i] / divide % mod)
          this.compareTimes++
          if (parseInt(this.arr[i] / divide / 10) > 0) hasLarge = true // 如果有下个位数的数字，进入下轮循环
          if (!counter[num]) {
            counter[num] = []
          }
          counter[num].push(this.arr[i])
        }

        // 顺序统计counter的内容到this.arr
        this.arr = []
        counter.forEach(i => {
          i.forEach(j => {
            this.arr.push(j)
          })
        })
        log(`按照基数${divide}排序，得到结果${this.arr}`)
      }
      return this.arr
    }
  },
  mounted () {
    // default execute
    if (this.input) {
      this.radixSort()
    }
  }
}
</script>

<style>
.sortImg{
  width: 600px;
}
</style>
