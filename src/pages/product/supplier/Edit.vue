<template>
    <el-dialog :title="title" :visible.sync="visible" @open="openDialog" :before-close="closeDialog">
         <el-card class="box-card">
            <div class="grid-content">
                <el-form :model='supplierInfo' :rules='supplierRules' ref='supplierForm' label-position='left' label-width='100px' >
                    <el-form-item prop='supplierName' label="供应商名称">
                        <el-input v-model="supplierInfo.supplierName" type="text"  :maxlength='32' placeholder="供应商名称">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop='companyName' label="企业名称">
                        <el-input v-model="supplierInfo.companyName" type="text" :maxlength='32' placeholder="企业名称">
                        </el-input>
                    </el-form-item>
                    <el-form-item prop='companyAddress' label="企业地址">
                        <el-input type='text' v-model='supplierInfo.companyAddress' :maxlength='32'  placeholder='企业地址'></el-input>
                    </el-form-item>
                    <el-form-item style='width: 100%'>
                        <el-row :gutter="0">
                        <el-col :span="12" :offset="3">
                            <el-button type='primary' style='width: 100%' @click.native.prevent='handleSubmit' :loading='loading'>提交</el-button>
                        </el-col>
                        <el-col :span="6" :offset="3">
                            <el-button type='info' style='width: 100%' @click.native.prevent='closeDialog'>返回</el-button>
                        </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
            </div>
         </el-card>
    </el-dialog>
</template>
<script>
import SupplierAPI from '@/api/supplier'
export default {

    name: 'SupplierEditDialog',
    props: {
        title: {type: String},
        visible: {type: Boolean},
        data: {type: Object}
    },
    created() {

    },
    data() {
        return {
            loading: false,
            supplierInfo: {
                supplierId: 0,
                supplierName: '',
                companyName: '',
                companyAddress: ''
            },
            supplierRules: {
                psupplierName: [{required: true, message: '请输入供应商名称', trigger: 'blur' }],
                companyName: [{required: true, message: '请输入企业名称', trigger: 'blur' }],
                companyAddress: [{required: true, message: '请输入企业地址', trigger: 'blur' }],
            },
        }
    },
    methods: {
        openDialog(){
            // this.supplierInfo = JSON.parse(JSON.stringify(this.$props.data))
            this.supplierInfo = this.$props.data
        },
        closeDialog() {
            this.$emit('cancel-submit')
        },
        handleSubmit() {
            this.$refs.supplierForm.validate(valid => {
                if(valid) {
                    this.loading = true
                    SupplierAPI.update(this.supplierInfo).then(() => {
                        this.loading = false
                        this.$message.success('恭喜，供应商已经更新成功。')
                        this.$emit("confirm-submit")
                    }).catch(error => {
                        this.$message.error('保存供应商数据错误，请稍后重试.' + error)
                        this.loading = false
                    })
                }else{
                    this.$message.error('供应商数据错误，请按照提示完善后重试.')
                    this.loading = false
                    return false
                }
            })
        }
    }

}
</script>

