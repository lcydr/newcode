<template>
  <div id="fathers">
    <a @click="one" href="http://www.baidu.com">阻止百度</a>
    <hr />
    <a @click="two(10, $event)" href="http://www.baidu.com">阻止去百度</a><br />
    <button @click.stop="btn">阻止事件冒泡</button><br />
    <a @click.prevent="btn" href="http://www.baidu.com/">阻止默认行为</a><br />
    <button @click.once="btn">只运行一次</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    one(e) {
      e.preventDefault();
    },
    two(num, e) {
      e.preventDefault();
    },
    fathers() {
      console.log('fathers ok');
    },
    btn() {
      console.log('btn ok');
    },
  },
};
</script>

<style></style>
