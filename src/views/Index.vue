<template>
  <div>
    <h1>常见算法实现By JavaScript</h1>
    <p>
      汇集了一些常用算法用JS实现的例子，具体的还是看代码吧
    </p>
    <ul>
      <li>Author: ManfredHu/pphu/胡文峰</li>
      <li>HomePage: <a
          target="_blank"
          href="https://www.manfredhu.com/"
        >https://www.manfredhu.com/</a></li>
      <li>Github: <a
          target="_blank"
          href="https://github.com/ManfredHu"
        >https://github.com/ManfredHu</a></li>
    </ul>

    <h2>算法复杂度</h2>
    <table>
      <tr>
        <th>排序方法</th>
        <th>时间复杂度（平均）</th>
        <th>时间复杂度（最坏）</th>
        <th>时间复杂度（最好）</th>
        <th>空间复杂度</th>
        <th>稳定性</th>
      </tr>
      <tr>
        <td>冒泡排序</td>
        <td>O(n^2)</td>
        <td>O(n^2)</td>
        <td>O(n)</td>
        <td>O(1)</td>
        <td>稳定</td>
      </tr>
      <tr>
        <td>选择排序</td>
        <td>O(n^2)</td>
        <td>O(n^2)</td>
        <td>O(n^2)</td>
        <td>O(1)</td>
        <td>不稳定</td>
      </tr>
      <tr>
        <td>插入排序</td>
        <td>O(n^2)</td>
        <td>O(n^2)</td>
        <td>O(n)</td>
        <td>O(1)</td>
        <td>稳定</td>
      </tr>
      <tr>
        <td>希尔排序</td>
        <td>O(n^1.3)</td>
        <td>O(n^2)</td>
        <td>O(n)</td>
        <td>O(1)</td>
        <td>不稳定</td>
      </tr>
      <tr>
        <td>归并排序</td>
        <td>O(nlog2(n))</td>
        <td>O(nlog2(n))</td>
        <td>O(nlog2(n))</td>
        <td>O(n)</td>
        <td>稳定</td>
      </tr>
      <tr>
        <td>快速排序</td>
        <td>O(nlog2(n))</td>
        <td>O(n^2)</td>
        <td>O(nlog2(n))</td>
        <td>O(nlog2(n))</td>
        <td>不稳定</td>
      </tr>
      <tr>
        <td>计数排序</td>
        <td>O(n+k)</td>
        <td>O(n+k)</td>
        <td>O(n+k)</td>
        <td>O(n+k)</td>
        <td>稳定</td>
      </tr>
      <tr>
        <td>基数排序</td>
        <td>O(n*k)</td>
        <td>O(n*k)</td>
        <td>O(n*k)</td>
        <td>O(n+k)</td>
        <td>稳定</td>
      </tr>
    </table>

    <h2>相关概念</h2>
    <blockquote>
      <p><strong>稳定</strong>：如果a原本在b前面且a=b，排序之后a仍然在b的前面。</p>
      <p><strong>不稳定</strong>：如果a原本在b的前面且a=b，排序之后 a 可能会出现在 b 的后面。</p>
      <p><strong>时间复杂度</strong>：对排序数据的总的操作次数。反映当n变化时，操作次数呈现什么规律。</p>
      <p><strong>空间复杂度：</strong>是指算法在计算机内执行时所需存储空间的度量，它也是数据规模n的函数。&nbsp;</p>
    </blockquote>
  </div>
</template>

<style lang="less" scoped>
table{
  width: 100%;
  border-collapse: collapse
}
td, th {
  border: 1px solid #bbb;
  text-align: left;
  padding: 8px;
}
tr:nth-child(even) {
  background-color: #ddd;
}
</style>
