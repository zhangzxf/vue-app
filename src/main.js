// 入口文件
import Vue from 'vue'

// 导入 App 根组件
import app from './App'

// 导入自己的index.js 路由模块
import router from './router/index'

//  导入路由的包
import VueRouter from 'vue-router'
//  安装路由
Vue.use(VueRouter)

// 导入Vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 导入格式化时间的插件
 import moment from 'moment'

//  定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
  return moment(dataStr).format(pattern)
})
// 设置请求的根路径
Vue.http.options.root = 'http://www.lovegf.cn:8899'
// 设置全局post请求表单数据格式组织形式
Vue.http.options.emulateJSON = true;

// 配置vue-resource的请求根域名
// Vue.http.options.root = 'http://www.lovegf.cn:8899/'
// 配置post请求以传统表单形式提交参数 application/x-www-form-urlencoded
// Vue.http.options.emulateJSON = true; 

// Vue.config.productionTip = false

//  导入 MUI  的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import './lib/mui/css/golbal.css'
 
// 全局导入 Mint-UI 中的组件
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
Vue.use(MintUI)

import VuePreview from 'vue-preview'
Vue.use(VuePreview)


// 按需导入 Mint-UI 中的组件 
// import {
//   Header,
//   Swipe,
//   SwipeItem,
//   Button,
//   // Lazyload
// } from 'mint-ui'

// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)

var vm = new Vue( {
el:'#app', 
router, //挂载路由器对象到VM实例上
render:c => c(app)

})