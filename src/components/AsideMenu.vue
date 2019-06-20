
<template>
  <!-- 左侧导航栏：通过读取lib下的menu.js 定义的json数据进行渲染 -->
    <!--Element： router是使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
    <el-menu
      router  
      class="el-menu-vertical"
      
      background-color="#222d32"
      text-color="#fff"
      active-text-color="#ffd04b">
      <template v-for="(item, itemIndex) in menus" >
        <!-- 有子菜单 v-if='!item.leaf' 显示 -->
        <el-submenu :index="'submenu'+itemIndex" v-if='!item.leaf' :key='item.path'>
          <template slot="title"><i :key="item.icon"></i><span>{{item.name}}</span></template>
            <el-menu-item v-for="child in item.children" :index="child.path" :key='child.path'>
              <i :class="child.icon"></i><span slot="title"> {{child.name}}</span>
            </el-menu-item>
        </el-submenu>
        <!-- 没有子菜单 -->
        <el-menu-item v-else :index="item.path" :key='item.path'>
          <i :class="item.icon"></i><span slot='title'> {{item.name}}</span>
        </el-menu-item>
        
      </template>
    </el-menu>
</template>
<script>
  import menuItems from '../lib/menu.js'

  export default {
    name: "AsideMenu",
    data() {
      return {
        menus: menuItems
      }
    },
    methods: {
      handleOpen: function () {

      },
      handleClose: function () {

      }
    }
  }
</script>
<style>
/* 设置导航ul的宽度与el-aside一致 */
/* .el-menu {
    border: none!important;
  } */
.el-menu-vertical {
    display: inline-block;
    text-align: left;
    width: 240px;
    border: none!important;
  }
</style>



