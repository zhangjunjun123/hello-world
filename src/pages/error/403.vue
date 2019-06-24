<template>
  <div class='box'>
    <div class='box-header'>
      <h3 class='box-title'>权限不足</h3>
      <h3 class='pull-right box-title'><router-link class='btn btn-sm btn-flat btn-primary' to="/">返回首页</router-link></h3>
    </div>
    <div class="box-body">
      <div class="">
        <p>抱歉，由于您的权限不足，暂时无法访问，请及时联系管理员。</p>
        <p>Sorry，insuffient permission. Your access is forbidden, for any help, please contact administrator.</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccessForbidden',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
