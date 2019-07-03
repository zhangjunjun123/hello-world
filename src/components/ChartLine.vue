<template>
    <!-- 柱状图 -->
    <div id="chartmainline" style="width:600px; height:400px;" ></div>
</template>
<script>
// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入折线图
require('echarts/lib/chart/line');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
export default {
    name: 'chartline',
    props: ['items_line'],
    data(){
        
        return {
           // 折线图
            optionline: {
                title:{
                    text:''
                },
                xAxis: {
                    type: 'category',
                    data: []
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [],
                    type: 'line'
                }]
            },
        }
    },
    watch: {
         items_line:{
            handler(val, oldVal){ // 监听到变化执行的回调函数
                console.log("xAxisData: "+val.xAxisData, oldVal.xAxisData);//但是这两个值打印出来却都是一样的
                this.setOption( val)
            },
            deep: true //深度监听，可监听到对象、数组的变化
        }
           
    },
    methods: {
        setOption(data){

            this.optionline.title.text = data.title
           this.optionline.xAxis.data = data.xAxisData
            this.optionline.series[0].data = data.seriesData
           let chartmainline = echarts.init(document.getElementById("chartmainline"),'light')
           chartmainline.setOption(this.optionline)
        }
    }
   
}
</script>
