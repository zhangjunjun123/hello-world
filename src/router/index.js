// 路由入口文件 需要在main.js中引用
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入页面组件 .vue可省略
import Login from '@/pages/Login.vue'
//引入 router 模块js文件 .js可省略
import ErrorRoutes from './Error'
import IndexRoutes from './Home'
import SystemRoutes from './system' 

Vue.use(VueRouter)

let childrenRouters = ErrorRoutes.concat(IndexRoutes).concat(SystemRoutes)
// 定义路由
let routes = [
  {
    path: '/login',
    component: Login, // 方式一：静态引入
    meta: {
      auth: false //用于标志是否显示做菜单和头部用户信息 ，需要隐藏的标签上添加v-show="$route.meta.auth"即可
    }
  },
  
  {
    path: '/',
    component: resolve => require(['@/pages/Home'], resolve), // 方式二：动态引入
    meta: {
      auth: true 
    },
    children: childrenRouters// 子路由指定的.vue挂载到path="/"指定的Home中的el-main <router-view></router-view>中 
  },
  
]

//创建 router 实例，然后传 `routes` 配置
export default new VueRouter({
  mode: 'history', // history 模式时，URL 就像正常的 url，不会url末尾自动添加 #/ 号了
  base: __dirname, // base ：默认值: “/”,在vue.config.js中设置了
  linkActiveClass: 'active',
  routes
})