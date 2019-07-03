<template>
    <!-- 柱状图 -->
    <div id="chartmainbar" style="width:600px; height:400px;"></div>
</template>
<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default {
    name: 'chartbar',
    props: {
        items_bar: Object
    },
    data(){
        return {
           
            // 柱状图
            optionbar:{
                title:{
                    text:''
                },
                tooltip:{},
                legend:{
                    data:[]
                },
                xAxis:{
                    data:[]
                },
                yAxis:{

                },
                series:[{
                    name:'订单商品数',
                    type:'bar', //设置图表主题
                    data:[]
                }]
            },
        }
    },
    //DOM渲染完成，组件挂载完成执行
    mounted() {
            this.optionbar.title.text = this.$props.items_bar.title
            this.optionbar.legend.data=this.$props.items_bar.legendData
            this.optionbar.xAxis.data=this.$props.items_bar.xAxis
            this.optionbar.yAxis=this.$props.items_bar.yAxis
            this.optionbar.series[0].name=this.$props.items_bar.seriesName
            this.optionbar.series[0].data=this.$props.items_bar.seriesData
           let chartmainbar = echarts.init(document.getElementById("chartmainbar"),'light')
           chartmainbar.setOption(this.optionbar)
      
    },
}
</script>
