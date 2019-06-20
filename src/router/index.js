// 路由入口文件
import Vue from 'vue'
import VueRouter from 'vue-router'
//引入页面组件 .vue可省略
import Login from '@/pages/Login.vue'
//引入 router 模块js文件 .js可省略
// import SystemRoutes from './system' 

Vue.use(VueRouter)
// 定义路由
let routes = [
  {
    path: '/login',
    component: Login,
    meta: {
      auth: false //用于标志是否显示做菜单和头部用户信息 ，需要隐藏的标签上添加v-show="$route.meta.auth"即可
    }
  },
  {
    path: '/',
    component: resolve => require(['@/pages/Index'], resolve), //也可以采用以下方式（不用import了）
    meta: {
      auth: true 
    },
    children: [
      {
        path: 'system/staff/list',
        component: resolve => require(['@/pages/system/staff/List'], resolve),
        meta: {
          auth: true
        }
      },
      {
        path: 'system/role/list',
        component: resolve => require(['@/pages/system/role/List'], resolve),
        meta: {
          auth: true
        }
      }
    ]
  },
  
]

//创建 router 实例，然后传 `routes` 配置
export default new VueRouter({
  mode: 'history', // history 模式时，URL 就像正常的 url，不会url末尾自动添加 #/ 号了
  base: __dirname, // base ：默认值: “/”,在vue.config.js中设置了
  linkActiveClass: 'active',
  routes
})