<template>
  <div id="app">
    <div>
      <h1>{{ msg }}</h1>
      <h1>{{ obj.name }}</h1>
      <h1>{{ obj.age }}</h1>
      <h1>{{ obj.age >= 18 ? '成年了' : '未成年' }}</h1>

      <br />
      <img :src="urlImg" />
      <a v-bind:href="href">去百度</a>
      <br />
      <p>你要购买商品的数量: {{ count }}</p>
      <button v-on:click="count = count + 1">+1</button>
      <button v-on:click="addFn">+1</button>
      <button v-on:click="addCountFn(5)">+5</button>
      <button @click="subFn">减少1</button>
    </div>
    <!-- ================================ -->
    <br />
    <br />
    <div>
      <span>用户名:</span>
      <input type="text" v-model="username" />
    </div>
    <div>
      <span>密码:</span>
      <input type="password" v-model="pass" />
    </div>
    <div>
      <span>来自于: </span>
      <!-- 下拉菜单要绑定在select上 -->
      <select v-model="from">
        <option value="北京市">北京</option>
        <option value="南京市">南京</option>
        <option value="天津市">天津</option>
      </select>
    </div>
    <div>
      <!-- (重要)
      遇到复选框, v-model的变量值
      非数组 - 关联的是复选框的checked属性
      数组   - 关联的是复选框的value属性
       -->
      <span>爱好: </span>
      <input type="checkbox" v-model="hobby" value="抽烟" />抽烟
      <input type="checkbox" v-model="hobby" value="喝酒" />喝酒
      <input type="checkbox" v-model="hobby" value="写代码" />写代码
    </div>
    <div>
      <span>性别: </span>
      <input type="radio" value="男" name="sex" v-model="gender" />男
      <input type="radio" value="女" name="sex" v-model="gender" />女
    </div>
    <div>
      <span>自我介绍</span>
      <textarea v-model="intro"></textarea>
    </div>
    <br />
    <br />
    <!-- ========================================== -->
    <div>
      <span>年龄:</span>
      <input type="text" v-model.number="a" />
    </div>
    <div>
      <span>人生格言:</span>
      <input type="text" v-model.trim="m" />
    </div>
    <div>
      <span>自我介绍:</span>
      <textarea v-model.lazy="i"></textarea>
    </div>
  </div>
</template>

<script>
import urlImg from './assets/logo.png';
export default {
  name: 'App',
  data() {
    return {
      msg: 'App',
      obj: {
        age: 18,
        name: 'zs',
      },
      // url: './assets/logo.png', //不会显示
      urlImg: urlImg,
      href: 'http://www.baidu.com',
      count: 0,
      username: '',
      pass: '',
      from: '',
      hobby: [],
      sex: '',
      intro: '',
      gender: '',
      a: '',
      m: '',
      i: '',
    };
  },
  methods: {
    addFn() {
      this.count++;
    },
    addCountFn(val) {
      this.count = this.count + val;
    },
    subFn() {
      this.count--;
    },
  },
};
</script>

<style></style>
