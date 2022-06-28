<template>
  <!-- 思路
  1. 变量准备-静态页面铺设
  2. 绑定点击事件 
  3. 截取字符串返回数组
  4. 翻转
  5. 数组拼接起来 -->
  <div>
    <!-- 1. 变量准备-静态页面铺设 -->
    <h1>{{ message }}</h1>
    <!-- 2. 绑定点击事件 -->
    <button @click="btn">逆转世界</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'HELLO, WORLD',
    }
  },
  methods: {
    btn() {
      // // 3. 截取字符串返回数组
      // let arr = this.message.split("")
      // // 4. 翻转
      // arr.reverse()
      // // 5. 数组拼接起来
      // this.message = arr.join("")

      // 简化
      this.message = this.message.split('').reverse().join('')
    },
  },
}
</script>
