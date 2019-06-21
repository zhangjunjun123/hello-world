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
          commit("UPDATE_STAFF", data.staffUser) // 请求mutation.js 进行set state中的user属性
          commit("UPDATE_TOKEN", data.token) // 请求mutation.js 进行set state中的token属性
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
      commit("UPDATE_STAFF", null)
      commit("UPDATE_TOKEN", null)
      resolve()
    })
  }
}
