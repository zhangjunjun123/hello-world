import axios from 'axios'
import store from '../store'
import router from '../router'
import Vue from 'vue'

const apiRoot = "http://localhost:7051/api1"
const apiContentType = 'application/json;charset=UTF-8'
axios.defaults.baseURL = apiRoot
//引用element的消息框
import { MessageBox } from 'element-ui'

const axiosInstance = axios.create({
  baseURL: apiRoot,
  timeout: 30000
})

// loading框设置局部刷新，且所有请求完成后关闭loading框
let loading
let needLoadingRequestCount = 0 // 声明一个对象用于存储请求个数
function startLoading () {
  loading = Vue.prototype.$loading({
    lock: true,
    text: '努力加载中...',
    // background: 'rgba(0,0,0,0.5)',
    target: document.querySelector('.loading-area') // 设置加载动画区域
  })
}
function endLoading () {
  loading.close()
}
function showFullScreenLoading () {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}
function hideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}


// request请求前进行拦截 ：如果当前已经登录，调用时Header中自动携带JWT
axiosInstance.interceptors.request.use(
  config => {
    showFullScreenLoading() // 显示加载动画

    // 每次发送请求之前检测都vuex存有token,那么都要放在请求头发送给服务器
    if (store.state.token) { // store.state.user.jwt
      config.headers['Authorization'] = 'Bearer ' + store.state.token // store.state.user.jwt
    }
    if (config.method === 'POST') {
      config.headers['Content-Type'] = 'application/json;charset=UTF-8'
    }
    return config
  },
  error => {
    hideFullScreenLoading()
    return Promise.reject(error)
  })
 
// respone前拦截器 ： 如果返回值中有JWT，自动更新系统的JWT和用户信息
axiosInstance.interceptors.response.use(
  response => {
    hideFullScreenLoading()
    // 对响应数据做些事
    if (response.status === 200) {
      if (response.data.jwt) {
        localStorage.token = response.data.jwt // 检查Token，更新到本地storage??? 应该放到vuex中吧
      }
    }
    return Promise.resolve(response)
  },
  // 默认除了2XX之外的都是错误的，就会走这里
  error => {
    hideFullScreenLoading()
    if (error.response.status === 401) {
      MessageBox.alert('你已被登出，请重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        type: 'warning',
        callback:  ()=> {
          location.reload() // 为了重新实例化vue-router对象 避免bug
          router.replace({ // 跳转到登录页面
          path: '/login'
            // query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
        }
      })
      return Promise.reject(error.response)
    }
    if (error.response.status === 500) {
      return Promise.reject(error)
    }
  })

function httpInvoke (method, url, params, responseType) {
  let token = (store.state.token) ? 'Bearer ' + store.state.token : ''
  return axiosInstance({
    method: method,
    url: url,
    headers: {'Content-Type': apiContentType, 'Authorization': token},
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
    baseURL: apiRoot,
    withCredentials: false,
    responseType: responseType
  })
}

const Http = {
  get: function (url, params) {
    return httpInvoke('GET', url, params)
  },
  post: function (url, params, responseType) {
    return httpInvoke('POST', url, params, responseType)
  },
  put: function (url, params) {
    return httpInvoke('PUT', url, params)
  },
  delete: function (url, params) {
    return httpInvoke('DELETE', url, params)
  }
}

export default Http
