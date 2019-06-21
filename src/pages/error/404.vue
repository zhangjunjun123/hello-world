<template>
  <div class="">
      <div class="">
        <p>您好，您访问的内容已被移除或暂不可用，请稍后重试或联系系统管理员，谢谢 ！</p>
        <p>The page you reqeust is not found or temporary moved, please retry later or get help from the system administrator.</p>
      </div>
      <div class="">
        <p><router-link to="/">返回首页</router-link></p>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
 computed: {
    invalidRoute () {
      return !this.$route.matched || this.$route.matched.length === 0;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
