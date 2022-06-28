<template>
  <div class="container">
    <div class="imglist">
      <h3>图片列表区</h3>
      <img
        src="./assets/01.jpg"
        alt=""
        @mouseenter="enterFn(1)"
        @click="clickFn(1, $event)"
      />
      <img
        src="./assets/02.jpg"
        alt=""
        @mouseenter="enterFn(2)"
        @click="clickFn(2, $event)"
      />
      <img
        src="./assets/03.jpg"
        alt=""
        @mouseenter="enterFn(3)"
        @click="clickFn(3, $event)"
      />
    </div>
    <div class="show">
      <h3>图片预览区</h3>
      <img :src="imgUrl" alt="" style="width: 600px; height: auto" />
    </div>
    <div></div>
  </div>
</template>

<script>
import img_01 from '@/assets/01.jpg'
import img_02 from '@/assets/02.jpg'
import img_03 from '@/assets/03.jpg'
export default {
  data() {
    return {
      imgUrl: img_01,
    }
  },
  methods: {
    enterFn(val) {
      this.imgUrl = { 1: img_01, 2: img_02, 3: img_03 }[val]
    },
    clickFn(num, e) {
      alert(`第${num}张图${e.target.src}`)
    },
  },
}
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
