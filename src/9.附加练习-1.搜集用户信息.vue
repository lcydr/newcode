<template>
    <div>
    <div>
      <span>选择所在地区：</span>
      <input type="radio" :value="1" name="area" v-model="area">中国大陆
      <input type="radio" :value="2" name="area" v-model="area">中国香港
    </div>
    <div>
      <span>手机号码：</span>
      <input type="text" name="phone" v-model="phone">
    </div>
    <div>
      <span>年龄: </span>
      <input type="text" name="age" v-model="age">
    </div>
    <div>
      <span>密码：</span>
      <input type="password" name="password" v-model.number="password">
    </div>
    <div>
      <span>爱好：</span>
      <input type="checkbox" v-model="hobby" value="看书">看书
      <input type="checkbox" v-model="hobby" value="学习">学习
      <input type="checkbox" v-model="hobby" value="写代码">写代码
      <input type="checkbox" v-model="hobby" value="游戏">游戏
    </div>
    <div>
      <input type="checkbox" v-model="isgrow"> 记住密码
    </div>
    <div>================================================</div>
       <div>
      我来自：{{{1:'中国大陆',2:'中国香港'}[area]}}
      <br>
      手机号码是：{{phone}}
      <br>
      年龄是：{{age}}
      <br>
      密码是：{{password}}
      <br>
      爱好是：{{hobby.join(',')}}
      <br>
      是否记住密码：{{isgrow ? '是' : '否'}}
    </div>
</template>

<script>
export default {
  data(){
    return{
      area:1,
      phone:'',
      password:'',
      hobby:['看书','写代码'],
      isgrow:'',
    }
  }
}
</script>

<style>

</style>