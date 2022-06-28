<template>
  <div>
    <input type="text" @keydown.enter="ent" />
    <input type="text" @keydown.esc="es" />
    <br />
    <h2>{{ msg }}</h2>
    <button @click="btn">翻转</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello world!',
    };
  },
  methods: {
    ent() {
      console.log('enter ok');
    },
    es() {
      console.log('esc ok');
    },
    btn() {
      this.msg = this.msg.split('').reverse().join('');
    },
  },
};
</script>

<style></style>
