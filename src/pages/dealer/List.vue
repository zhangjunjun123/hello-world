<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>经销商清单</span>
            <el-button style="float: right; " type='primary' size="mini" @click="handleDealerAdd">增加经销商</el-button>
        </div>
        <!--  gutter 栅格间隔-->
        <el-row :gutter="1">
            <el-col :span="4">
                <el-select v-model="queryParam.dealerType" @change="handleTypeChage" placeholder="请选择类型">
                    <el-option label="全部" :value="0" />
                    <el-option label="经销商" :value="1" />
                    <el-option label="微商" :value="2" />
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select v-model="queryParam.dealerStatus" @change="handleStatusChage" placeholder="请选择状态">
                    <el-option label="全部" :value="0" />
                    <el-option label="可用" :value="1" />
                    <el-option label="不可用" :value="2" />
                </el-select>
            </el-col>
        </el-row>
        <br/>
        <el-tabs type="border-card">
                <el-table
                :data="pageData.content" 
                border
                style="width: 100%">
                <el-table-column
                    prop='dealerName' sortable
                    label='经销商名称'>
                </el-table-column>
                <el-table-column label='状态'>
                    <template slot-scope="scope">
                        <span v-if="scope.row.dealerStatus">可用</span>
                        <span v-else>不可用</span>
                    </template>
                </el-table-column>
                <el-table-column label='经销商类型'>
                    <template slot-scope="scope">
                        <span v-if="scope.row.dealerType === 1">经销商</span>
                        <span v-else>微商/个体代理</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop='prepayRatio'
                    label='预付款比率'>
                </el-table-column>
                <el-table-column label='保证金额度'>
                    <template slot-scope="scope">
                        <span>{{scope.row.assurence | formatCNY}}</span>
                    </template>
                </el-table-column>
                <el-table-column
                    prop='accountLimit'
                    label='账号数量限制'>
                </el-table-column>
                <el-table-column label='签约/有效日期'>
                    <template slot-scope="scope">
                        <span>{{scope.row.signDate | formatDate}}</span>
                        <BR/>
                        <span>{{scope.row.validDate | formatDate}}</span>
                    </template>
                </el-table-column>
                <el-table-column label='操作'>
                    <template slot-scope="scope">
                        <el-dropdown size="mini" type="primary" split-button >详情
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item divided>
                                <el-button style type="text" size="mini" @click="handleEdit(scope.row)">修改经销商信息</el-button>
                                </el-dropdown-item>
                                <el-dropdown-item divided>
                                <el-button style type="text" size="mini" >经销商授权</el-button>
                                </el-dropdown-item>
                                <el-dropdown-item divided>
                                <el-button style type="text" size="mini" >经销商成员用户</el-button>
                                </el-dropdown-item>
                                <el-dropdown-item divided>
                                <el-button style type="text" size="mini" >配货地址管理</el-button>
                                </el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </template>
                </el-table-column>
            </el-table>
        </el-tabs>
        <br/>
        <el-row :gutter="24">
            <el-col :span="10" :offset="14">
                <!-- 分页： @size-change每页条数改变 @current-change当前页数改变  :current-page：绑定当前页  :page-sizes可选每页条数  :page-size绑定初始每页条数  :total数据总条数
                layout组件布局，子组件名用逗号分隔-->
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="pageData.pageNumber+1" 
                    :page-sizes="[10, 20, 40]"
                    :page-size="queryParam.pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="pageData.totalElements">
                </el-pagination>
            </el-col>
        </el-row>
        <!-- 引入添加经销商对话框 -->
        <dealerAdd title="新增经销商" :visible="showAdd" @cancel-submit="cancelAdd" @confirm-submit="confirmAdd"></dealerAdd>
        <dealerEdit title="修改经销商" :visible="showEdit" :data="selectDealer" @cancel-submit="cancelEdit" @confirm-submit="confirmEdit"></dealerEdit>
    </el-card>
</template>
<script>
    import DealerAPI from '@/api/dealer'
    import dealerAdd from './Add'
    import dealerEdit from './Edit'
    export default {
        name: 'DealerList',
        data() {
            return {
                queryParam: {
                    dealerStatus: 0,
                    dealerType: 0,
                    pageIndex: 0,
                    pageSize: 10
                },
                pageData: {},
                selectDealer: {},
                showAdd: false,
                showEdit: false
            }
        },
        
        created () {
            this.fetchData()
        },
        methods: {
            fetchData () {
                DealerAPI.list(this.queryParam).then(response => {
                    this.pageData = response.data
                })
            },
            //类型查询条件改变
            handleTypeChage(val){
                console.log(`类型： ${val}`);
                this.queryParam.dealerType = val
                this.fetchData()
            },
            //状态查询条件改变
            handleStatusChage(val){
                console.log(`状态 ${val}`);
                this.queryParam.dealerStatus = val
                this.fetchData()
            },
            //每页条数改变
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
                this.queryParam.pageSize = val
                this.fetchData()
            },
            //当前页改变：val为当前页数，pageIndex需要val-1取索引值
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
                this.queryParam.pageIndex = val-1
                this.fetchData()
            },
            //点击添加经销商
            handleDealerAdd(){
                console.log('addShow')
                this.showAdd = true
            },
            cancelAdd(){
                this.showAdd = false
            },
            confirmAdd (){
                this.showAdd = false
                this.fetchData()
            },
            //点击修改经销商
            handleEdit (dealer){
                this.selectDealer = dealer
                this.showEdit = true
            },
            cancelEdit(){
                this.showEdit = false
            },
            confirmEdit (){
                this.showEdit = false
                this.fetchData()
            }
        },
        components: {
            dealerAdd,
            dealerEdit
        }
        
    }
</script>


