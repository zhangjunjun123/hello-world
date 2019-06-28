<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>用户清单</span>
            <router-link style="float: right; padding: 3px 0" to='/system/staff/add'>增加新员工</router-link>
        </div>
        <el-tabs type="border-card">
            <el-tab-pane label="员工列表">
                <!--【Element】 :data="staffUsers" 绑定data中的对象，
                1.通过prop='字段名'绑定数据 -->
                 <el-table
                    :data="staffUsers" 
                    border
                    style="width: 100%">
                     <el-table-column label='头像' width='60' >
                        <template slot-scope='scope'>
                        <img :src='scope.row.logo' class="img-circle" width="35px" style="" v-if='scope.row.logo' />
                        <img src='@/assets/user.png' class="img-circle" width="35px" style="" v-else />
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop='mobile' sortable
                        label='手机号码'>
                    </el-table-column>
                    <el-table-column
                        prop='username'
                        label='登录名'>
                    </el-table-column>
                    <el-table-column
                        prop='nickName'
                        label='姓名/昵称'>
                    </el-table-column>
                    <!--【Element】2， slot-scope='scope' 可通过scope.row获取当前行对象数据 -->
                    <el-table-column
                        label='性别' width='60' >
                        <template slot-scope='scope'>
                        {{ scope.row.gender | formatGender }}
                        </template>
                    </el-table-column>
                    <el-table-column
                        prop='idNumber'
                        label='身份证'>
                    </el-table-column>
                    <el-table-column
                        label='状态' width='80' >
                        <template slot-scope='scope'>
                        {{ scope.row.enabled | formatUserStatus }}
                        </template>
                    </el-table-column>
                    <el-table-column
                        label='有效期' >
                        <template slot-scope='scope'>
                        {{ scope.row.expiredTime | formatDate }}
                        </template>
                    </el-table-column>
                    <el-table-column label='操作' class='text-center'>
                        <template slot-scope='scope'>
                        <el-button type='primary' size='mini'
                            @click='handleEdit(scope.row)'>编辑</el-button>
                        <el-button type="warning" size="mini" v-if="scope.row.enabled" @click="switchUserStatus(scope.row)">禁用</el-button>
                        <el-button type="warning" size="mini" v-else @click="switchUserStatus(scope.row)">启用</el-button>
                        
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </el-card>
</template>
<script>
    import StaffAPI from '@/api/staff'
  export default {
    data() {
      return {
        staffUsers: [],
      }
    },
    created () { // created: function(){} 简写 ： vue实例创建后执行
        StaffAPI.list().then(response => {
            this.staffUsers = response.data // 生命周期钩子函数中的this指vue实例
        })
    },
    methods: {
       handleEdit(user) {
            // 注意：如果提供了 path，params 会被忽略需要
            // 方式1：只用path：将参数拼接到路径后边
            // 方式2：可以name【定义路由时指定的name】和param组合使用 。  
            this.$router.push({
                name: 'StaffEdit', 
                params: { userId: user.staffId }
            })
       },
       switchUserStatus(user){
           if(user.enabled){
               //禁用操作
               StaffAPI.disable(user.staffId).then(()=>{
                   user.enabled = !user.enabled
                   this.$message.info('用户禁用成功')
               }).catch(function (error) {
                    console.log(error)
                })
           }else {
               //启用操作
               StaffAPI.enable(user.staffId).then(()=>{
                   user.enabled = !user.enabled
                   this.$message.info('用户启用成功')
               }).catch(function (error) {
                    console.log(error)
                })
           }
       }
    }
  }
</script>
