import './banner.js';
import './tab.js';
import $ from 'jquery';
$('#swiper').css('background-color', 'red');

// import './styles/index.css'
import './styles/index.less';

// index.js
import imgUrl2 from './assets/logo_small.png';

let img2 = document.createElement('img');
img2.src = imgUrl2;
document.body.appendChild(img2);

// 引入图片-使用
import imgUrl from './assets/1.gif';
const theImg = document.createElement('img');
theImg.src = imgUrl;
document.body.appendChild(theImg);

import './assets/fonts/iconfont.css';

class App {
  static a = 123;
}

console.log(App.a);

import vue from './app.vue';
