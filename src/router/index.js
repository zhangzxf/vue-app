
import VueRouter from 'vue-router'

import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShopcarContainer from '../components/tabbar/ShopcarContainer'
import SearchContainer from '../components/tabbar/SearchContainer'


// 创建路由对象
var router = new VueRouter({
  routes:[ 
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomeContainer },
    { path: "/member", component: MemberContainer },
    { path: "/shopcar", component: ShopcarContainer },
    { path: "/search", component: SearchContainer }
  ],
  linkActiveClass:'mui-active' //覆盖默认的路由高亮的类，默认的类叫 router-link-active
})

// 把路由对象暴露出去
export default router
