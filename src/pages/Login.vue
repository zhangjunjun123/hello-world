<template>
    <!-- 登录页面 -->
  
      <el-row type='flex' justify='center' align='middle' style='margin-top: 50px'>
        <el-col :xs='24' :sm='18' :md='10' :lg='8' :xl='6'>
          <el-card class='box-card'>
            <div slot='header' class='clearfix'>
              <span>请登录</span>
            </div>
            <div class='' style='color: red'></div>
            <el-form  ref='loginForm' label-position='left' label-width='0px' >
              <el-form-item prop='username'>
                <el-input  type='text'  :maxlength='32' placeholder='账号'>
                  <template slot="prepend"><i class='fa fa-fw fa-user'></i></template>
                </el-input>
              </el-form-item>
              <el-form-item prop='pwd'>
                <el-input  type='password' :maxlength='32' placeholder='密码'>
                  <template slot="prepend"><i class='fa fa-fw fa-key'></i></template>
                </el-input>
              </el-form-item>
              <el-form-item prop='code'>
                <el-input type='number'  placeholder='验证码'>
                  <template slot="prepend"><i class='fa fa-fw fa-th'></i></template>
                </el-input>
              </el-form-item>
              <el-form-item style='width: 100%'>
                <el-row :gutter='0'>
                  <el-col :span='24' >
                    <el-button type='primary' class='btn-block'  >登录</el-button>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
  
</template>
<style scoped>
/* input[type='checkbox'] {
    margin-left: 0;
  } */
.login-box {
  padding: 20px 30px;
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #eee;
}
.login-box-body {
  background: none;
}
.login-logo {
  margin-top: 25px;
}

.btn-block {
  width: 100%;
}

</style>