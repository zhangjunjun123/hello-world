<template>
    <!-- 登录页面 -->
  
      <el-row type='flex' justify='center' align='middle' style='margin-top: 50px'>
        <el-col :xs='24' :sm='18' :md='10' :lg='8' :xl='6'>
          <el-card class='box-card'>
            <div slot='header' class='clearfix'>
              <span>请登录</span>
            </div>
            <div class='' style='color: red'>{{message}}</div>
            <!--【Element】:model绑定表单绑定数据对象  ； :rules指定表单验证规则 ; ref指定表单名称-->
            <el-form :model='loginForm' :rules='loginRules' ref='loginForm' label-position='left' label-width='0px' >
              <!--【Element】 prop:表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 -->
              <el-form-item prop='username'>
                <!-- 【vue】 v-model数据绑定  -->
                <el-input v-model='loginForm.username' type='text'  :maxlength='32' placeholder='账号'>
                  <template slot="prepend"><i class='fa fa-fw fa-user'></i></template>
                </el-input>
              </el-form-item>
              <el-form-item prop='pwd'>
                <el-input v-model='loginForm.pwd' type='password' :maxlength='32' placeholder='密码'>
                  <template slot="prepend"><i class='fa fa-fw fa-key'></i></template>
                </el-input>
              </el-form-item>
              <el-form-item prop='code'>
                <el-input type='number' v-model='loginForm.code' placeholder='验证码'>
                  <template slot="prepend"><i class='fa fa-fw fa-th'></i></template>
                </el-input>
              </el-form-item>
              <el-form-item style='width: 100%'>
                <el-row :gutter='0'>
                  <el-col :span='24' >
                    <!-- 【W3C 标准中有如下规定】 @click.native.prevent ：在该输入框中按下回车应提交该表单。如果希望阻止这一默认行为 -->
                    <!--【Element】 :loading 加载图标是否显示-->
                    <el-button type='primary' class='btn-block'   @click.native.prevent='handleLogin' :loading='loading'>登录</el-button>
                  </el-col>
                </el-row>
              </el-form-item>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
  
</template>
<script>
export default {
  name: 'Login',
  // 数据
  data () {
    return {
      message: '',
      loginForm: {
        username: 'kylin',
        pwd: 'ping1234',
        code: 123456
      },
      loading: false,
      // 定义表单验证规则 key为prop的值
      loginRules: {
        username: [
          { required: true, message: '请输入账号', trigger: 'blur' },
          {
            min: 5, max: 16, message: '请输入有效账号', trigger: 'blur'
          }
          // { validator: validaePass }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 8, max: 16, message: '请输入有效密码', trigger: 'blur'
          }
        ],
        // validator 自己定义的验证函数
        code: [
          { validator: this.checkCode, trigger: 'blur' }
        ]
      },

    }  
  },
  // 函数
  methods: {
    // 对code进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise
    checkCode (rule, value, callback) {
      if (!value) {
        return callback(new Error('验证码不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入有效的验证码！'));
        } else {
          if (value < 1000 || value > 999999) {
            callback(new Error('请输入有效的验证码！'));
          } else {
            callback();
          }
        }
      }, 500);
    },
    // 点击登录
    handleLogin () {
      //  this.$refs.loginForm.validate()检查loginForm表单上添加的表单验证是否正确
      // 1，el-form-item prop属性必须绑定   2 .el-form 必须添加 rules，model属性绑定，ref标识
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 验证通过
          this.loading = true //登录按钮上显示加载图标
          let loginParams = {
            username: this.loginForm.username,
            password: this.loginForm.pwd,
            code: this.loginForm.code
          }
          // user、token数据用vuex管理，供全局使用。则登录方法需要放在vuex中
          this.$store.dispatch('STAFF_LOGIN', loginParams).then(this.loginSuccess).catch(this.loginFailure)
        }
      })
    },
    // 登陆成功
    loginSuccess () {
      this.loading = false
      // localStorage.token = data.token
      // this.$store.state.user.currentStaff = data.staffUser
      // this.$store.state.user.jwt = data.token
      this.$router.push({ path: '/' })
    },
    //登陆失败
    loginFailure () {
      this.loading = false
      this.message = '登录失败，用户名/密码错误'
    }
  }
}
</script>

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