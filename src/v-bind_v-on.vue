<template>
  <div id="app">
    <div>
      <h1>{{ msg }}</h1>
      <h1>{{ obj.name }}</h1>
      <h1>{{ obj.age }}</h1>
      <h1>{{ obj.age >= 18 ? '成年了' : '未成年' }}</h1>

      <br />
      <img :src="urlImg" />
      <a v-bind:href="href">去百度</a>
      <br />
      <p>你要购买商品的数量: {{ count }}</p>
      <button v-on:click="count = count + 1">+1</button>
      <button v-on:click="addFn">+1</button>
      <button v-on:click="addCountFn(5)">+5</button>
      <button @click="subFn">减少1</button>
    </div>
  </div>
</template>

<script>
import urlImg from './assets/logo.png';
export default {
  name: 'App',
  data() {
    return {
      msg: 'App',
      obj: {
        age: 18,
        name: 'zs',
      },
      // url: './assets/logo.png', //不会显示
      urlImg: urlImg,
      href: 'http://www.baidu.com',
      count: 0,
    };
  },
  methods: {
    addFn() {
      this.count++;
    },
    addCountFn(val) {
      this.count = this.count + val;
    },
    subFn() {
      this.count--;
    },
  },
};
</script>

<style></style>
