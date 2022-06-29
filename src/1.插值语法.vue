<template>
  <div id="app">
    <div>
      <h1>{{ msg }}</h1>
      <h1>{{ obj.name }}</h1>
      <h1>{{ obj.age }}</h1>
      <h1>{{ obj.age >= 18 ? '成年了' : '未成年' }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'App',
      obj: {
        age: 18,
        name: 'zs',
      },
    };
  },
};
</script>

<style></style>
