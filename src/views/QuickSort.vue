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
    quickSort () {
      // let partitionIndex
      // const arr = this.input.split(/,|-|\//g)
      // const low = 0
      // const high = Array.isArray(arr) && arr.length - 1
      // if (low < high) {
      //   partitionIndex = this.partition(arr, low, high)
      //   // this.quickSort(arr, low, partitionIndex - 1)
      //   // this.quickSort(arr, partitionIndex + 1, high)
      // }
    },
    partition () {

    }
  }
}
</script>

<style>

</style>
