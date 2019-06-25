<template>
    <!--【Element】 before-close 关闭前的回调，会暂停 Dialog 的关闭-->
    <el-dialog :title="title" :visible.sync="visible"   :before-close="closeDialog">
        <el-card class="box-card">
            <el-form
            :model="StaffRole"
            :rules="StaffRoleRules"
            ref="StaffRoleInfo"
            label-position="left"
            label-width="150px"
            style="text-align: left;">
                <el-form-item label="权限名称">
                <el-input v-model="StaffRole.authority"></el-input>
                </el-form-item>
               <el-form-item label="权限描述">
                <el-input v-model="StaffRole.description"></el-input>
                </el-form-item>
                <el-form-item style="width: 100%">
                    <el-row :gutter="0">
                    <el-col :span="12" :offset="0">
                        <el-button
                        type="primary"
                        style="width: 100%"
                        @click.native.prevent="handleSubmit"
                        :loading="loading"
                        >提交</el-button>
                    </el-col>
                    <el-col :span="8" :offset="4">
                        <el-button type="info" style="width: 100%" @click.native.prevent="closeDialog">返回</el-button>
                    </el-col>
                    </el-row>
                </el-form-item>
            </el-form>
         </el-card>
    </el-dialog>
</template>
<script>
  import RoleAPI from '@/api/role'
  export default {
    name: "StaffRoleAdd",
    //允许接收的参数
    props: {
        title: {
            type: String
        },
        visible: {
            type: Boolean
        }
    },
    data() {
      return {
        loading: false, // 加载动画
        StaffRole: {
            authority: '',
            description: ''
        },
        StaffRoleRules:{
            authority: [
                { required: true, message: '请输入权限名称', trigger: 'blur' }
            ],
            description: [
                { required: true, message: '请输入权限描述', trigger: 'blur' }
            ]
        }
      }
    },
    methods: {
        // 关闭对话框，$emit冒泡指定执行父组件cancel-submit事件
        //父组件在引用Add组件上添加@cancel-submit="方法名"
        //作用：子组件通知父组件它做了什么操作。
        closeDialog() {
            this.$emit("cancel-submit");
        },
        //提交
        handleSubmit() {
            this.$refs.StaffRoleInfo.validate(valid => {
                if(valid){
                    this.loading = true
                    RoleAPI.add(this.StaffRole).then(()=>{
                        this.loading = false;
                        this.$message.info("恭喜，权限数据保存成功。");
                        this.$emit("confirm-submit");
                    }) .catch(error => {
                        this.$message.info("保存权限数据错误，请稍后重试." + error);
                        this.loading = false;
                    });
                }else{
                    this.$message.info('权限数据输入有误，请重新输入');
                    this.loading=false
                }
            })
        }
    }
  };
</script>