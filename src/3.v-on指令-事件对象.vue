<template>
  
<div id="app">
  <p>你要购买商品的数量: {{ count }}</p>
  <!-- 1. 绑定事件
  语法: v-on:事件名="少量代码"
  语法: v-on:事件名="methods里函数名"
  语法: v-on:事件名="methods里函数名(值)"
  语法: @事件名="methods里函数名"
  -->
  <button v-on:click="count = count + 1">+1</button>
  <button v-on:click="addFn">+1</button>
  <button v-on:click="addCountFn(5)">+5</button>
  <button @click="subFn">减少1</button>
</div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    addFn(){
      this.count++
    },
    addCountFn(val){
      this.count += val
    },
    subFn(){ 
      this.count--
    }
  },
}
</script>

<style>

</style>