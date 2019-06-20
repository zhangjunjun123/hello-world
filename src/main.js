import Vue from 'vue'
import App from '@/App.vue'
// 默认加载./router/index.js  相当于直接把index.js的内容写在main.js
import router from '@/router'

//引入element
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)

Vue.config.productionTip = false

new Vue({
  router, //引入路由index  
  render: h => h(App),
}).$mount('#app')
