// 头部组件
<template>
    <div class="header">
        <!-- 公司logo -->
        <router-link to="/"><img src="../assets/logo.png" alt="logo" class="logo"></router-link>
        <!-- 登录着信息 -->
        <el-dropdown v-show="showSide">
            <div class="el-dropdown-link">
                <img src="../assets/user.png" alt="" class="userimg">
                <span class="username">zjj</span>
            </div>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><el-button size="mini" >个人中心</el-button></el-dropdown-item><br>
                <el-dropdown-item><el-button size="mini" >安全退出</el-button></el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>
<script>
export default {
    name: "Header",
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
    .userimg {
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

