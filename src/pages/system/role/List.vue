<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>权限清单</span>
            <el-button style="float: right; " type='primary' size="mini" @click="handleAdd">增加新权限</el-button>
        </div>
        <el-tabs type="border-card">
                <el-table
                :data="RoleList" 
                border
                style="width: 100%">
                <el-table-column
                    prop='description' sortable
                    label='描述'>
                </el-table-column>
                <el-table-column
                    prop='authority'
                    label='权限'>
                </el-table-column>
                <el-table-column label='操作' class='text-center'>
                    <template slot-scope='scope'>
                    <el-button type='danger' size='mini' @click="delRole(scope.row)"
                    >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-tabs>
        
        <!-- 组件引用 title visible 是传进去的参数 -->
        <!-- @cancel-submit 用来接收子组件关闭对话框前冒泡上来的 this.$emit("cancel-submit");-->
        <StaffRoleAdd title='新增权限'  :visible='showAdd' @cancel-submit="closeAdd" @confirm-submit="confirmAdd"> </StaffRoleAdd>
    </el-card>
</template>
<script>
    import RoleAPI from '@/api/role'
    import StaffRoleAdd from './Add'
    export default {
        name: 'RoleList',
        data() {
            return {
                RoleList: [],
                showAdd: false
            }
        },
        created () {
            this.fetchData()
        },
        methods: {
            fetchData () {
                RoleAPI.list().then(response => {
                    this.RoleList = response.data
                })
            },
            //删除
            delRole (role){
                RoleAPI.delete(role.authority).then(()=>{
                    this.$message.info('权限删除成功')
                    this.fetchData()
                }).catch(error=>{
                    this.$message.info('权限删除失败:'+error)
                })
            },
           // 新增
            handleAdd () {
                this.showAdd = true
            },
            closeAdd (){
                this.showAdd = false
            },
            confirmAdd(){
                this.showAdd = false
                this.fetchData()
            }
        },
        components: {
            StaffRoleAdd
        }
    }
</script>
