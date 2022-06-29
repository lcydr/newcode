<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <h1>{{obj.name}}</h1>
    <h1>{{obj.age}}</h1>
    <h1>{{obj.sex}}</h1>
  </div>
</template>

<script>
export default {
  data(){
    return{
      msg: "123456",
      obj:{
        name:'zs',
        age:18,
        sex:'男'
      }
    }
  }
}
</script>

<style>

</style>