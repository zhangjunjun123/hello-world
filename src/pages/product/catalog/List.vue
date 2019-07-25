
<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>品类清单</span>
            <el-button style="float: right;" type='primary' size="mini" @click='handleAdd'>增加新品类</el-button>
        </div>
        <div class='box-body'>
            <el-table border striped fit class="catalog-table" :data='catalogs' style='width: 100% '>
                <el-table-column label='图标' width='80'>
                    <template slot-scope='scope'>
                        <img :src='scope.row.logoUrl' class="img-circle" width="35px" style="" />
                    </template>
                    </el-table-column>
                    <el-table-column prop='catalogName' label='名称'>
                    </el-table-column>
                    <el-table-column  label='状态' width='100' >
                        <template slot-scope='scope'>
                            {{ scope.row.status | formatStatus }}
                        </template>
                    </el-table-column>
                    <el-table-column label='操作' class='text-center'>
                        <template slot-scope='scope'>
                            <el-button type='primary' size='mini' @click='handleEdit(scope.row)'>编辑</el-button>
                            <el-button type='success' size='mini' v-if='scope.row.status === 0' @click='switchStatus(scope.row)'>启用</el-button>
                            <el-button type='warning' size='mini'  v-else  @click='switchStatus(scope.row)'>禁用</el-button>
                            <span class="btn-group">
                                <!-- 置顶 -->
                                <el-button type="primary" size="small" circle @click='orderToTop(scope.row)'><i class="fa fa-lg fa-angle-double-up"></i></el-button>
                                <!-- 上移动 -->
                                <el-button type="primary" size="small" circle @click='orderUp(scope.row)'><i class="fa fa-lg fa-angle-up"></i></el-button>
                                <!-- 下移动 -->
                                <el-button type="primary" size="small" circle @click='orderDown(scope.row)'><i class="fa fa-lg fa-angle-down"></i></el-button>
                                <!-- 置底 -->
                                <el-button type="primary" size="small" circle @click='orderToBottom(scope.row)'><i class="fa fa-lg fa-angle-double-down"></i></el-button>
                
                            </span>
                        </template>
                    </el-table-column>
            </el-table>
        </div>
    </el-card>
</template>
<script>
import catalogAPI from '@/api/catalog'
export default {
    name: 'CatalogList',
    data(){
        return{
            catalogs: [],
        }
    },
    created() {
        this.fetchData()
    },
    methods: {
        fetchData() {
            catalogAPI.list().then(response => {
                this.catalogs = response.data
            }).catch(function (error) {
                this.$message.error('获取数据失败，请稍后重试.' + error)
            })
        },
        handleAdd(){

        },
        handleEdit(catalog) {
            console.log(catalog)
        },
        switchStatus(catalog) {
            console.log(catalog)
        },
        orderToTop(catalog) {
            let params = {
                catalogId: catalog.catalogId,
                up: true, // 上移
                down: false,
                step: -1 //置顶或置地
            }
            catalogAPI.updateOrder(params).then(() => {
                this.fetchData()
            }).catch(function (error) {
                this.$message.error('获取数据失败，请稍后重试.' + error)
            })
        },
        orderUp(catalog) {
            let params = {
                catalogId: catalog.catalogId,
                up: true, // 上移
                down: false,
                step: 1 
            }
            catalogAPI.updateOrder(params).then(() => {
                this.fetchData()
            }).catch(function (error) {
                this.$message.error('获取数据失败，请稍后重试.' + error)
            })
        },
        orderDown(catalog) {
            let params = {
                catalogId: catalog.catalogId,
                up: false, 
                down: true,
                step: 1 
            }
            catalogAPI.updateOrder(params).then(() => {
                this.fetchData()
            }).catch(function (error) {
                this.$message.error('获取数据失败，请稍后重试.' + error)
            })
        },
        orderToBottom(catalog) {
            let params = {
                catalogId: catalog.catalogId,
                up: false, 
                down: true,
                step: -1 
            }
            catalogAPI.updateOrder(params).then(() => {
                this.fetchData()
            }).catch(function (error) {
                this.$message.error('获取数据失败，请稍后重试.' + error)
            })
        }
    },
    filters: {
        formatStatus(status){
            return status === 1 ? '启用' : '禁用'
        }
    }
}
</script>
<style scoped>
    .btn-group {
        display: inline-block;
        padding-left: 16px;
        font-size: 1.25em;
    }
</style>

