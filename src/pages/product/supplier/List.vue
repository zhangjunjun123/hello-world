<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>供应商清单</span>
            <el-button style="float: right; " type='primary' size="mini" @click="handleAdd">增加供应商</el-button>
        </div>
        <el-tabs type="border-card">
                <el-table
                :data="SupplierList" 
                border
                style="width: 100%">
                <el-table-column
                    prop='supplierName' sortable
                    label='名称'>
                </el-table-column>
                <el-table-column
                    prop='supplierName'
                    label='公司名称'>
                </el-table-column>
                <el-table-column
                    prop='companyAddress'
                    label='公司地址'>
                </el-table-column>
                <el-table-column label='操作' class='text-center'>
                    <template slot-scope='scope'>
                    <el-button type='warning' size='mini' @click="editSupplier(scope.row)"
                    >编辑</el-button>
                    <el-button type='primary' size='mini' @click="viewProducts(scope.row)"
                    >产品清单</el-button>
                    <el-button type='success' size='mini' @click="chooseAddress(scope.row)"
                    >配置发货点</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-tabs>
        
        <!-- 组件引用 title visible 是传进去的参数 -->
        <!-- @cancel-submit 用来接收子组件关闭对话框前冒泡上来的 this.$emit("cancel-submit");-->
        <SupplierAdd title='新增供应商'  :visible='showAdd' @cancel-submit="closeAdd" @confirm-submit="confirmAdd"> </SupplierAdd>

        <SupplierEdit title='修改供应商' :visible='showEdit' :data='selectRow' @cancel-submit="closeEdit" @confirm-submit="confirmEdit"></SupplierEdit>
    </el-card>
</template>
<script>
    import SupplierAPI from '@/api/supplier'
    import SupplierAdd from './Add'
    import SupplierEdit from './Edit'
    export default {
        name: 'Supplierist',
        data() {
            return {
                SupplierList: [],
                showAdd: false,
                showEdit: false,
                selectRow: null
            }
        },
        created () {
            this.fetchData()
        },
        methods: {
            fetchData () {
                SupplierAPI.list().then(response => {
                    this.SupplierList = response.data
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
            },
            // 修改
            editSupplier(supplier) {
                this.showEdit = true
                this.selectRow = supplier
            },
            closeEdit() {
                this.showEdit = false   
            },
            confirmEdit(){
                this.showEdit = false
                this.fetchData()
            }
        },
        components: {
            SupplierAdd,
            SupplierEdit
        }
    }
</script>
