import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'
// 导入Vue单文件组件
import App from './components/App.vue'

$(function () {
  $("li:odd").css('backgroundColor', 'pink');
  $("li:even").css("backgroundColor", 'lightblue');
})

class Person {
  static info = 'aaa';
}

console.log(Person.info);