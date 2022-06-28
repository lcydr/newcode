<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img
        src="./assets/01.jpg"
        alt=""
        @mouseover="moFn(1)"
        @click="muFn(1, $event)"
      />
      <img
        src="./assets/02.jpg"
        alt=""
        @mouseover="moFn(2)"
        @click="muFn(2, $event)"
      />
      <img
        src="./assets/03.jpg"
        alt=""
        @mouseover="moFn(3)"
        @click="muFn(3, $event)"
      />
    </div>
    <div class="show">
      <h3>图片预览区</h3>
      <img :src="currentImg" alt="" style="width: 600px; height: auto" />
    </div>
  </div>
</template>

<script>
import imgUrl1 from './assets/01.jpg';
import imgUrl2 from './assets/02.jpg';
import imgUrl3 from './assets/03.jpg';

export default {
  data() {
    return {
      currentImg: imgUrl1,
    };
  },
  methods: {
    moFn(val) {
      this.currentImg = { 1: imgUrl1, 2: imgUrl2, 3: imgUrl3 }[val];
    },
    muFn(val, e) {
      console.log(e.target);
      alert(`第${val}图片,地址${e.target.src}`);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.imglist {
  border: 2px solid red;
}
.imglist img {
  width: 200px;
  height: auto;
}
.show {
  border: 2px solid red;
  margin-right: 20px;
}
</style>
