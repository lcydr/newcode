<template>
  <div>
    <a :href="href">去百度</a>
    <br />
    <img :src="img1" alt="" />
    <img :src="img2" alt="" />
    <br />
    <p>要购买的商品数量:{{ count }}</p>
    <button @click="count = count + 1">+1</button>
    <button @click="add1">+1</button>
    <button @click="addd(5)">+5</button>
    <button @click="adddd">-1</button>
    <br />
  </div>
</template>

<script>
import img3 from './assets/logo.png';
export default {
  data() {
    return {
      href: 'http://ww.baidu.com/',
      img1: 'https://cdn.pixabay.com/photo/2016/12/23/12/40/night-1927265__480.jpg',
      img2: img3,
      count: 0,
    };
  },
  methods: {
    add1() {
      this.count++;
    },
    addd(val) {
      this.count += val;
    },
    adddd() {
      this.count--;
    },
  },
};
</script>

<style></style>
