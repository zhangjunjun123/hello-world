/*
    由actions出发，直接更新state的多个方法对象
*/

export default {
 
  ['ADD_LOGIN_USER'] (state, {data}) {
      // 更新state中数据 
      state.user = data.staffUser
      state.token = data.token
      //更新sessionStrorage数据
      sessionStorage.setItem("user", JSON.stringify(data.staffUser));
      sessionStorage.setItem("token",data.token);
      sessionStorage.setItem("isLogin",true); 
    },
    ['SIGN_OUT'] (state) {
      // 更新state中数据 
      state.user = null
      state.token = null
      //删除sessionStrorage数据
      sessionStorage.removeItem("user");
      sessionStorage.removeItem("token"); 
      sessionStorage.setItem("isLogin",false); 
    },

    ['SET_USER'] (state, {user}){
      state.user = user
    },
    ['SET_TOKEN'] (state, token){
      state.token = token
    }
    
}
