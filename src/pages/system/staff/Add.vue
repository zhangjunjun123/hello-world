<template>
  <el-row :gutter="20">
    <el-col :span="12" :offset="6">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h3>添加员工-详细信息</h3>
        </div>
        <div class="grid-content">
          <el-form :model='staffUser' :rules='staffRules' ref='staffUser' label-position='left' label-width='150px' >
            <el-form-item prop='username' label="登录名">
              <el-input v-model="staffUser.username" type="text"  :maxlength='16' placeholder="登录名">
              </el-input>
            </el-form-item>
            <el-form-item prop='nickName' label="姓名">
              <el-input v-model="staffUser.nickName" type="text" :maxlength='16'  placeholder="姓名">
              </el-input>
            </el-form-item>
            <el-form-item prop='idNumber' label="身份证号码">
              <el-input v-model="staffUser.idNumber" type="text"  :maxlength='18' placeholder="身份证号码">
              </el-input>
            </el-form-item>
            <el-form-item prop='mobile' label="手机号">
              <el-input type='text' v-model='staffUser.mobile' :maxlength='11'  placeholder='手机号（国内）'></el-input>
            </el-form-item>
            <el-form-item prop='expiredTime' label="账号截止有效日期">
              <el-date-picker v-model="staffUser.expiredTime" type="date" placeholder="账号截止有效日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item prop='gender' label="性别">
              <el-radio v-model="staffUser.gender" label="1">男</el-radio>
              <el-radio v-model="staffUser.gender" label="2">女</el-radio>
            </el-form-item>
            <el-form-item prop='roles' label="权限">
              <el-checkbox-group v-model="staffUser.roles">
                <el-checkbox v-bind:key="authority.authority" :label="authority.authority" v-for="authority in allRoles">{{ authority.description }}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item style='width: 100%'>
              <el-row :gutter="10">
                <el-col :span="12" :offset="6">
                  <el-button type='primary' style='width: 100%' @click.native.prevent='handleSubmit' :loading='loading'>提交</el-button>
                </el-col>
                <el-col :span="3" :offset="3">
                  <el-button type='info' style='width: 100%' @click.native.prevent='goBack'>返回</el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
import StaffAPI from '@/api/staff'

export default {
  name: 'StaffAdd',
  data () {
    return {
      loading: false, // 加载动画
      showDialog: false,
      // 所有可选角色
      allRoles: [],
      staffUser: {
        staffId: 0,
        mobile: '',
        username: '',
        nickName: '',
        password: '',
        logo: '',
        gender: '1',
        enabled: true,
        idNumber: '',
        expiredTime: '',
        memo: '',
        roles: []
      },
      staffRules: {
        mobile: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          {
            min: 11,
            max: 11,
            required: true,
            message: '手机号码为11位',
            trigger: 'blur'
          }
        ],
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          {
            min: 5,
            max: 16,
            required: true,
            message: '用户名至少为5位',
            trigger: 'blur'
          }
        ],
        nickName: [
          { required: true, message: '请输入用户昵称', trigger: 'blur' },
          {
            min: 2,
            max: 16,
            required: true,
            message: '用户昵称至少为2位',
            trigger: 'blur'
          }
        ]
        
      }
    }
  },
  created: function () {
    StaffAPI.listRoles().then(response => {
        this.allRoles = response.data
    })
  },
  methods: {
    goBack () {
      this.$router.push({ path: '/system/staff/list' })
    },
    // 点击登录
    handleSubmit () {
      this.$refs.staffUser.validate(valid => {
        if (valid) {
          this.loading = true
          // 用户信息
          StaffAPI.add(this.staffUser).then(() => {
            this.$message.success('保存用户数保存成功')
            this.loading = false
            this.$router.push({ path: '/system/staff/list' })
          }).catch(error => {
            this.$message.error('保存用户数据错误，请稍后重试.' + error)
            this.loading = false
          })
          // 保存用户数据
          // requestLogin (loginParams).then(data => {
          //   console.log(data)
          // })
        } else {
          this.$message.error('用户数据错误，请按照提示完善后重试.')
          this.loading = false
          return false
        }
      })
    }
  },
  
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
 
