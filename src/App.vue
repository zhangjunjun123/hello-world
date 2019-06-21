// main.js 将整个App.vue 文件挂载到入口页面index.html上
<template>
  <!-- 左上下布局参考Element文档：container布局容器 -->
  <el-container id="app">
    <!-- 引用Header组件【标签名对应compents中的组件名即可饮用】，可传参数：组件内props定义接受的参数 -->
    <el-header>
      <Header></Header>
    </el-header>
    <el-container>
      <!-- 左侧菜单 -->
      <el-aside style="width: 240px;" v-show="showSide">
        <AsideMenu></AsideMenu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view></router-view>
        </el-main>
        <!-- 引用Footer组件，可传参数：组件内props定义接受的参数 -->
        <el-footer>
          <Footer copyright="©中科粮 保留所有权利。" author="zhangjunjun" icpCert="1111"></Footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// @指src目录
import Footer from "@/components/Footer.vue"; // 引入Footer.vue

import Header from "@/components/Header.vue"; // 引入Header.vue

import AsideMenu from "@/components/AsideMenu"; // 引入左侧菜单

// import { mapState } from 'vuex'

export default {
  name: "app",
  components: {
    // 引入的组件
    Footer,
    Header,
    AsideMenu
  },
  computed: {
    // 判断是否为登录页面，不显示头部右侧用户信息
     showSide() {
      let show = (this.$route.path).search("login") == -1
      return show
    },
    
    //引入全局参数
    // ...mapState(["user", "token"]),
    // showSide() {
    //   let show = (this.user === undefined || this.user === null)
    //   return !(show)
    // }
  }
};
</script>

<style>
/* 整体布局样式 */

body {
  margin: 0 0 auto;
  padding: 0 0;
}
body > .el-container {
  margin-bottom: 0px;
}
/* 整个页面撑开，设置100% 是index.html中设置了html和body高度 */
.el-container {
  height: auto;
  min-height: 100%;
}
/* 底部样式 */
.el-footer {
  background-color: #555;
  color: #fff;
  text-align: center;
  line-height: 30px;
  height: 30px;
  padding: 0 !important;
}
/* 头部样式 */
.el-header {
  background-color: #3c8dbc;
  height: 60px;
  padding: 0;
  line-height: 60px;
}
.el-dropdown {
  float: right;
  margin-right: 20px;
}
/* 侧边菜单 */
.el-aside {
  background-color: #222d32;
  color: #333;
  text-align: left;
  line-height: 35px;
}

/* 主题内容 */
.el-main {
  background-color: #fff;
  height: 100%;
}
</style>
