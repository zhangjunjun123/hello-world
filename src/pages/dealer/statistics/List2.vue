<template>
<!-- vue中echarts中的数据API动态请求，并将不用类型的图封装成组件，通过传入公共参数进行控制 -->
    <div>
        <!-- 柱状图 -->
        <!--问题： 子组件用父组件 异步获取的数据 解决办法1：v-if pageData数据 -->
        <chartbar  v-if="pageData.length != 0" :items_bar="items_bar"></chartbar>
        <!-- 折线图 -->
        <!--解决办法2： 子组件通过watch 监听items_line的seriesData 发生变化则渲染option-->
        <chartline :items_line="items_line"></chartline>
    </div>
</template>
<script>
import chartbar from '@/components/ChartBar'
import chartline from '@/components/ChartLine'
import OrderAPI from '@/api/order';
export default {
    components: {chartbar, chartline},
    data(){
        return{
            items_bar: {
                title: '订单统计',
                legendData: ['用户来源'],
                xAxis: [],
                yAxis: {},
                seriesName: '订单商品数',
                seriesData: [],
            },
            items_line: {
                title: '订单统计2',
                xAxisData: [],
                seriesData: [],
            },
           
            //查询条件
            queryParams: {
                orderNumber: '',
                orderStatus: '',
                pageIndex: 0,
                pageSize: 10,
                warehouseIds: [],
                online: '',
                memberId: 0,
                shopId: 0,
                beginTime: '', // 60天
                endTime: new Date() // 2018年6月29日
            },
            pageData: [],
            
        }
    },
    
    created () {
    console.log('父组件的created')
      this.fetchData()
      console.log('父组件的created执行完毕')
    },
    methods: {
      fetchData () {
        OrderAPI.list(this.queryParams).then(response => {
          this.pageData = response.data.content
          for (let i = 0; i < this.pageData.length; i++) {
             //柱状图
            this.items_bar.xAxis.push(this.pageData[i].orderId)
            this.items_bar.seriesData.push(this.pageData[i].products)
            //折线图
            this.items_line.xAxisData.push(this.pageData[i].orderId)
            this.items_line.seriesData.push(this.pageData[i].products)
            
          }
        })
      }
    }
    
}

</script>
