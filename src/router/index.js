// 路由入口文件 需要在main.js中引用
import Vue from 'vue'
import VueRouter from 'vue-router'
import base64 from 'js-base64'
import store from '@/store'
//引入页面组件 .vue可省略
import Login from '@/pages/Login.vue'
import Home from '@/pages/Home'
//引入 router 模块js文件 .js可省略
import ErrorRoutes from './Error'
import IndexRoutes from './Home'
import SystemRoutes from './system' 
import DealerRoutes from './dealer'


Vue.use(VueRouter)

let childrenRouters = ErrorRoutes.concat(IndexRoutes).concat(SystemRoutes).concat(DealerRoutes)
// 定义路由
let routes = [

  {
    path: '/login',
    component: Login, // 方式一：静态引入
    name: 'Login',
    meta: {
      auth: false //用于标志是否显示做菜单和头部用户信息 ，需要隐藏的标签上添加v-show="$route.meta.auth"即可
    }
  },
  
  {
    path: '/',
    component: Home, // 方式二：动态引入
    name: 'Home',
    meta: {
      auth: true 
    },
    children: childrenRouters// 子路由指定的.vue挂载到path="/"指定的Home中的el-main <router-view></router-view>中 
  },
  {
    path: '*',
    hidden: true,
    name: 'NotFound',
    redirect: { path: '/404' }
  }
  
]

//创建 router 实例，然后传 `routes` 配置
const router =  new VueRouter({
  mode: 'history', // history 模式时，URL 就像正常的 url，不会url末尾自动添加 #/ 号了
  base: __dirname, // base ：默认值: “/”,在vue.config.js中设置了
  linkActiveClass: 'active',
  routes: routes
})

//token串中获取过期时间
function parseValidTime (token) {
  let secs = token.split('.')
  if (secs === null || secs.length !== 3) {
    return []
  }
  let decoder = base64.Base64
  let claims = JSON.parse(decoder.decode(secs[1]))
  return claims.exp
}

//token中获取用户的权限
function parseRoles (token) {
  let secs = token.split('.')
  if (secs === null || secs.length !== 3) {
    return []
  }
  let decoder = base64.Base64
  let claims = JSON.parse(decoder.decode(secs[1]))
  return claims.roles
}

//判断路由用户权限是否包含路由
function matchRoles (routeRoles, userRoles) {
  // 路由不需要权限
  if (routeRoles === null || routeRoles === undefined) {
    return true
  }
  // 用户无任何权限-异常
  if (userRoles === null) {
    return false
  }
  let found = false
  if (routeRoles!=null && userRoles !=null ){
    routeRoles.forEach(rr => {
      userRoles.forEach(ur => {
        if (rr === ur) {
          found = true
        }
      })
    })
  }
  
  return found
}


//路由全局前置守卫：router.beforeEach ：路由发生变化时先调用全局前置守卫进行权限等判断
router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/401' || to.path === '/403' || to.path === '/404' || to.path === '/50x'){
    
    next() // next(): 进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
  }
  else {
    //查看路由是否需要登陆权限
    if(to.meta === null || !to.meta.auth){
      next()
    }else {
      //未登录的先进行登陆操做
      if (store.state.user === null || store.state.token === null) {
        next({
          path: '/login'
        })
      } else {
        // 已登陆，判断token是否过期
        let tokenExpired = parseValidTime(store.state.token)
        if (tokenExpired <= new Date().getTime() / 1000) {
          next({
            path: '/login'
          })
        }
        // 判断用户权限
        let roles = parseRoles(store.state.token)
        if (matchRoles(to.meta.roles, roles)) {
          next()
        } else {
          //跳权限不足页面403
          next({
            path: '/403'
          })
        }
      }
    }
  }
})

export default router;