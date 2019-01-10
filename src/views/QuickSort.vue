<template>
  <div>
    <h1>快速排序</h1>
    <el-row>
      <el-col :span="18">
        <el-input autofocus v-model="input" placeholder="请输入数组，以,号分割"></el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" plain  @click="quickSort" ref>执行</el-button>
      </el-col>
    </el-row>
    <h2>结果</h2>
    <ul>
      <!-- <li v-for="item in result" :key="item">
        值是{{item.value}}，次数为{{item.times}}
      </li> -->
    </ul>
    <h3>说明</h3>
    <p>
      输入框可以输入任意内容，以<code>,</code>号分割。
    </p>
    <h3>时间复杂度</h3>
    <p>
      比较次数： {{compareTimes}}()
    </p>
    <p>
      有n个数，一共需要执行n(n-1)/2次比较，时间复杂度为O(n^2)
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      input: '8,23,3,4,6,10',
      result: [],
      arr: [],
      compareTimes: 0
    }
  },
  methods: {
    handleClick () {
      this.arr = this.input.split(/,|-|\//g).map(item => +item)
      this.quickSort(this.arr)
    },
    quickSort (arr) {
      const low = 0
      const high = arr.length - 1
      if (low < high) {
        let partitionIndex = this.partition(arr, low, high)
        this.quickSort(arr, low, partitionIndex - 1)
        // this.quickSort(arr, partitionIndex + 1, high)
      }
    },
    partition (arr, left, right) {
      const pivot = left // 设定基准值（pivot）
      let index = pivot + 1 // 区分左边跟右边的边界，左边的数会比arr[pivot]小，右边的数会比arr[pivot]大
      for (let i = index; i <= right; i++) {
        this.compareTimes++
        if (arr[i] < arr[pivot]) {
          this.swap(arr, i, index)
          index++
        }
      }
      this.swap(arr, pivot, index - 1)
      return index - 1
    },
    swap (arr, i, j) {
      const temp = arr[i]
      arr[i] = arr[j]
      arr[j] = temp
    }
  },
  mounted () {
    // default execute
    if (this.input) {
      this.handleClick()
    }
  }
}
</script>

<style>

</style>
