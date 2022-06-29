<template>
<div>
      <!-- 1. 变量准备-静态页面铺设 -->
    <h1>{{ message }}</h1>
     <!-- 2. 绑定点击事件 -->
    <button @click="btn">逆转世界</button>
  </div>
</template>

<script>
import { reverse } from 'dns'

export default {
  data(){
    return{
      message:'hello world!'
    }
  },
  methods:{
    btn(){
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<style>

</style>