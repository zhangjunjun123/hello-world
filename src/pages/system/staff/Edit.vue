<template>
  <el-row >
    <el-col :span="12" :offset="6">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <h3>编辑员工-详细信息</h3>
        </div>
        <div class="grid-content">
          <el-form :model="staffUser" :rules="rules" ref="staffUser" label-width="100px" >
            <el-form-item label="登录名" prop="username" >
              <el-input v-model="staffUser.username" :readonly='true' :maxlength='16'></el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="nickName">
              <el-input v-model="staffUser.nickName"></el-input>
            </el-form-item>
            <el-form-item label="省份证号码" prop="idNumber">
              <el-input v-model="staffUser.idNumber"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="mobile">
              <el-input v-model="staffUser.mobile"></el-input>
            </el-form-item>
            <el-form-item label="有效期" prop="expiredTime">
              <el-date-picker type="date" placeholder="选择日期" v-model="staffUser.expiredTime" style="width: 100%;"></el-date-picker>
            </el-form-item>
            <el-form-item label="性别" prop="gender">
              <!-- 【Element单选按钮】v-model的值==label的值则选中-->
              <el-radio v-model="staffUser.gender" label="1">男</el-radio>
              <el-radio v-model="staffUser.gender" label="2">女</el-radio>
            </el-form-item>
            <el-form-item label="权限" prop="roles">
              <!--【Element多选框组】 v-model绑定一个数组， :label指定的值在v-model中存在则选中状态 -->
              <el-checkbox-group v-model="staffUser.roles">
                <el-checkbox  v-for="authority in allRoles" v-bind:key="authority.authority" :label="authority.authority" >{{ authority.description }}</el-checkbox>  
              </el-checkbox-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click.native.prevent='handleSubmit' :loading='loading'>提交</el-button>
              <el-button @click.native.prevent='goBack'>返回</el-button>
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
    data() {
      return {
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
        allRoles: [], // 全部权限
        loading: false, // 加载动画
        rules: {
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
      };
    },
    created: function () {
      let userId = this.$route.params.userId
      this.staffUser.userId = userId
      StaffAPI.get(userId).then(response => {
        this.staffUser = response.data
        delete this.staffUser.authorities
        this.staffUser.password = ''
        StaffAPI.listRoles().then(response => {
          this.allRoles = response.data
        })
      })
    },
    methods: {
      handleSubmit(){
        this.$refs.staffUser.validate(valid => {
          if(valid){
            this.loading = true
            StaffAPI.update(this.staffUser).then(() => {
              this.loading = false
              this.$router.push({ path: '/system/staff/list' })
            }).catch(error=>{
              this.$message.info('保存用户数据错误，请稍后重试.' + error)
              this.loading = false
            })
          } else {
            this.$message.error('用户数据错误，请按照提示完善后重试.')
            this.loading = false
            return false
          }
        })
      },
      goBack(){
        this.$router.push({ path: '/system/staff/list' })
      },
      handleAvatarSuccess(res, file) {
        this.staffUser.logo = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    }
  }
</script>

