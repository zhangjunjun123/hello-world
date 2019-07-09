/*
    通过mutation间接更新state的多个方法对象
*/
import LoginAPI from '@/api/login'

export default {
  //定义登录的方法
  STAFF_LOGIN ({ commit }, userInfo) {
    const name = userInfo.username.trim()
    const password = userInfo.password.trim()
    return new Promise((resolve, reject) => {
      // 调用Api登录获取用户信息
      LoginAPI.login(name, password).then(response => {
        const data = response.data
        if(data != null){
          commit("ADD_LOGIN_USER", {data}) // 通过commit调用mutations中的方法
        }
        resolve(response) // 请求成功响应
      }).catch(error => {
        reject(error) // 请求异常响应
      })
    })
  },
  // 定义登出的方法
  STAFF_LOGOUT ({ commit }) {
    return new Promise((resolve) => {
      commit("SIGN_OUT")
      
      resolve()
    })
  },
  // roter的index.js 调用
  SET_USER({commit}, user) {
    commit("SET_USER", {user})
  },
  SET_TOKEN({commit}, token) {
    commit("SET_TOKEN", token)
  },
}
