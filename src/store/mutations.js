/*
    由actions出发，直接更新state的多个方法对象
*/

export default {
  // UPDATE_STAFF 方法名
  //修改state
  ['UPDATE_STAFF'] (state, {user}) {
    state.user = user
  },
  
  ['UPDATE_TOKEN'] (state, token) {
    state.token = token
  },
 
}
