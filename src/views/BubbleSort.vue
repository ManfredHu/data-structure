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
    bubbleSort () {
      const arr = this.input.split(/,|-|\//g)
      for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length - 1; j > 0; j--) {}
      }
    }
  }
}
</script>

<style>
</style>
