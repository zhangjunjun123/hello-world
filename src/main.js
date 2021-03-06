import Vue from 'vue'
import App from '@/App.vue'
// 默认加载./router/index.js  相当于直接把index.js的内容写在main.js
import router from '@/router'
// 默认加载./store/index.js  相当于直接把index.js的内容写在main.js
import store from '@/store'

//引入element
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
//引入全局过滤器
import filters from './lib/filter'
//引用字体
import 'font-awesome/css/font-awesome.min.css'


Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  router, //引入路由index  
  store, //引入vuex
  render: h => h(App),
}).$mount('#app')
