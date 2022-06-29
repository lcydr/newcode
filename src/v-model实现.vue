<template>
  <div>
    <div>
      <!-- v-model实现 -->
      <input type="text" v-bind:value="val1" @input="fn" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      val1: '',
    };
  },
  methods: {
    fn(e) {
      this.val1 = e.target.value;
    },
  },
};
</script>

<style></style>
