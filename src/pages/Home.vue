
<template>
    <!-- paht="/"含有子路由，则子路由全部挂载到该页面，所以该页面只能有子路由页面公共的内容 -->
    <router-view></router-view>
    
</template>
<script>
export default {
    name: "Home"
}
</script>

