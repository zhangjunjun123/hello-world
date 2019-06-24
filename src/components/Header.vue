// 头部组件
<template>
    <div class="header">
        <!-- 公司logo -->
        <img src="@/assets/logo.png" alt="logo" class="logo">
        <!-- <router-link to="/"><img src="@/assets/logo.png" alt="logo" class="logo"></router-link> -->
        <!-- 登录着信息 -->
        <el-dropdown v-if="showSide">
            <div class="el-dropdown-link" >
                <img v-bind:src="currentUser.logo" class="user-image" v-if="currentUser.logo">
                <img src='@/assets/user.png' class="user-image" v-else/>
                <span class="username">{{currentUser.username}}</span>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><el-button size="mini" >个人中心</el-button></el-dropdown-item><br>
                <el-dropdown-item><el-button size="mini" >安全退出</el-button></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: "Header",
    computed: {
    // 获取getters的属性值 ...mapGetters语法糖
     ...mapGetters([
      // ...函数名 使用对象展开运算符将此对象混入到外部对象中
        'currentUser'
    ]),
    
    showSide() {
      let show = (this.currentUser === undefined || this.currentUser === null)
      return !(show)
    }
  }
}
</script>
<style>
    .logo {
        width: 55px;
        height: 55px;
        margin-left: 20px!important;
        vertical-align: middle;
    }
    .el-dropdown-link {
        right: 10px;
    }
    .user-image {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        vertical-align: middle;
    }
    .username {
        font-size: 16px;
        color: #fff;
        line-height: 60px;
    }
</style>

