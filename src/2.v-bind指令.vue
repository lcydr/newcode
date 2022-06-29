<template>
  <div id="app">
    <a v-bind:href="url">点击去百度</a>
    <img :src="imgUrl" alt="">
    <img :src="locaImg" alt="">
  </div>
</template>

<script>
import imgObj from './assets/logo.png'
export default {
  data(){
    return{
      url: 'http://www.baidu.com',
      imgUrl: "http://yun.itheima.com/Upload/./Images/20210412/60741c11ab77b.jpg",
      locaImg:imgObj
    }
  }
}
</script>

<style>

</style>