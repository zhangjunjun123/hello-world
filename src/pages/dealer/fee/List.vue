<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>费用清单</span>
        </div>
        <!--  gutter 栅格间隔-->
        <el-row :gutter="1">
            <el-col :span="4">
                <el-select v-model="queryParam.dealerId" @change="handleDealerChage" placeholder="请选择经销商">
                    <el-option label="全部" :value="0" />
                    <el-option v-for='dealer in dealerList' :key='dealer.dealerId' :label='dealer.dealerName' :value='dealer.dealerId'/>
                </el-select>
            </el-col>
            <el-col :span="4">
                <el-select v-model="queryParam.feeStatus" @change="handleStatusChage" placeholder="请选择状态">
                    <el-option label='全选' :value="0" />
                    <el-option label='待审核' :value="1" />
                    <el-option label='已审核' :value="2" />
                    <el-option label='已通过' :value="4" />
                    <el-option label='已拒绝' :value="256" />
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
                <el-table-column
                    prop='salesMemberStaffName' sortable
                    label='申请人'>
                </el-table-column>
                <el-table-column label='状态'>
                    <template slot-scope="scope">
                        <span v-if="scope.row.feeStatus===1">待审核</span>
                        <span v-if="scope.row.feeStatus===2">已审核</span>
                        <span v-if="scope.row.feeStatus===4">已通过</span>
                        <span v-if="scope.row.feeStatus===256">已拒绝</span>
                    </template>
                </el-table-column>
                <el-table-column label='金额'>
                    <template slot-scope="scope">
                        <span>{{scope.row.feeAmount | formatCNY}}</span>
                    </template>
                </el-table-column>
                <el-table-column label='描述/详情'>
                    <template slot-scope="scope">
                        <span>{{scope.row.memo}}</span> <BR/>
                        <span>{{scope.row.description}}</span>
                    </template>
                </el-table-column>
                <el-table-column label='发生日期/申请日期'  width="200">
                    <template slot-scope='scope'>
                        <span>{{scope.row.occurDate | formatTime}}</span>  <BR/>
                        <span>{{scope.row.applyDate | formatTime}}</span>
                    </template>
                </el-table-column>
            </el-table>
        </el-tabs>
        <br/>
        <el-row :gutter="1">
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
    </el-card>
</template>
<script>
    import DealerAPI from '@/api/dealer'
    export default {
        name: 'Feelist',
        data(){
            return {
                queryParam: {
                    dealerId: 0,
                    feeStatus: 0,
                    begin: null,
                    end: null,
                    pageIndex: 0,
                    pageSize: 10
                },
                pageData: {},
                dealerList:{}
            }
        },
        created () {
            this.fetchData()
        },
        methods: {
            fetchData(){
                //获取全部经销商
                let dealerParams = {
                    dealerStatus: 0,
                    dealerType: 0,
                    pageIndex: 0,
                    pageSize: 100
                }
                DealerAPI.list(dealerParams).then(response => {
                    this.dealerList = response.data.content
                })
                //获取经销商费用
                DealerAPI.listFee(this.queryParam).then(response => {
                    this.pageData = response.data
                })  
            },
            //条件查询
            handleDealerChage(val){
                this.queryParam.dealerId = val
                this.fetchData()
            },
            handleStatusChage(val){
                this.queryParam.feeStatus = val
                this.fetchData()
            },
            //分页
            handleSizeChange(val){
                this.queryParam.pageSize = val
                this.fetchData()
            },
            handleCurrentChange(val){
                this.queryParam.pageIndex = val-1
                this.fetchData()
            }
        }
    }    
</script>