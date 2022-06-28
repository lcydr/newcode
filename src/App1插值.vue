<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>{{ obj.name }}</h1>
    <h2>{{ obj.age >= 18 ? '成年' : '未成年' }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hello world',
      obj: {
        name: '张三',
        age: 10,
      },
    };
  },
};
</script>

<style></style>
