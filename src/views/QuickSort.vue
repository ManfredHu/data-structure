<template>
  <div>
    <h1>快速排序</h1>
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
          @click="handleClick"
          ref
        >执行</el-button>
      </el-col>
    </el-row>
    <h2>结果</h2>
    <ol>
      <li
        v-for="(item,index) in result"
        :key="index"
      >
        值是{{item}}
      </li>
    </ol>
    <h3>说明</h3>
    <p>
      输入框可以输入任意内容，以<code>,</code>号分割。
    </p>
    <h3>动图展示</h3>
    <img
      src="../image/quickSort.gif"
      alt="冒泡排序"
    />
    <h3>时间复杂度</h3>
    <p>
      实际比较次数： {{compareTimes}}
    </p>
    <p>需要数学归纳法证明，最后得出：</p>
    <p>最优时间复杂度为O(nlogn)</p>
    <p>最差时间复杂度为O(n^2)</p>
    <p>平均时间复杂度为O(nlogn)</p>
    <h3>空间复杂度</h3>
    <p>
      O(logn)~O(n)，不稳定
    </p>
    <h3>过程日志输出</h3>
    <div id="processLog"></div>
    <hr />
    <h2>效率更高的方式</h2>
    <h3>第一种：（前后两个循环）</h3>
    <div class="container">
      <pre>
        <code class="javascript">
          function quickSortArr(arr, low, high) {
            var pivot;
            if (low &lt; high) {
              pivot = partition(arr, low, high);
              quickSortArr(arr, low, pivot - 1);
              quickSortArr(arr, pivot + 1, high);
            }
            return arr;
          }

          //将数组的左边变成比它小的，右边变成比它大的
          function partition(arr, low, high) {
            var pivotkey;
            pivotkey = arr[low];
            while (low &lt; high) {
              while (low &lt; high && arr[high] > pivotkey){
                high--;
              }
              arr.swap(low, high);
              while (low &lt; high && arr[low] &lt; pivotkey){
                low++;
              }
              arr.swap(low, high);
            }
            return low;
          }
        </code>
      </pre>
    </div>
    <h3>第二种：</h3>
    <div class="container">
      <pre>
        <code class="javascript">
          function quickSortArr(arr) {
            if (arr.length &lt;= 1) {
                return arr;
            }
            const pivotIndex = Math.floor(arr.length / 2);
            const pivot = arr.splice(pivotIndex, 1)[0];
            const left = [];
            const right = [];
            for (var i = 0; i &lt; arr.length; i++) {
              if (arr[i] &lt; pivot) {
                left.push(arr[i]);
              } else {
                right.push(arr[i]);
              }
            }
            return quickSortArr(left).concat([pivot], quickSortArr(right));
          }
        </code>
      </pre>
    </div>
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
    handleClick () {
      this.arr = this.input.split(/,|-|\//g).map(item => +item)
      this.result = this.quickSort(this.arr, 0, this.arr.length)
      log(`最后数组为${this.result}`)
    },
    quickSort (arr, low, high) {
      if (low < high) {
        let partitionIndex = this.partition(arr, low, high)
        this.quickSort(arr, low, partitionIndex - 1)
        this.quickSort(arr, partitionIndex + 1, high)
      }
      return arr
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
      this.handleClick()
    }
  }
}
</script>

<style>
</style>
