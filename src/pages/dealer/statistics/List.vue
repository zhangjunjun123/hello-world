<template>
<!-- echarts 静态使用：①安装echats ②可以在main中全局引用echarts但是这样打包太大，可以在vue文件中单独引用所需  ③ 指定dom设置option即可 -->
    <div>
        <!-- 柱状图 -->
        <div id="chartmainbar" style="width:600px; height:400px;"></div>
        <div id="chartmainline" style="width:600px; height:400px;"></div>
        <div id="chartmainpie" style="width:600px; height:400px;"></div>
    </div>
</template>
<script>
//注意： main.js中引入是将eacharts全部引入，打包太大，则不再main.js中引入。直接用到哪些直接在vue文件中引用即可

// 引入 ECharts 主模块
var echarts = require('echarts/lib/echarts');
// 引入柱状图
require('echarts/lib/chart/bar');
// 引入折线图
require('echarts/lib/chart/line');
// 引入饼图
require('echarts/lib/chart/pie');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');

export default {
    data(){
        return{
            // 柱状图
            optionbar:{
                title:{
                    text:'ECharts 数据统计'
                },
                tooltip:{},
                legend:{
                    data:['用户来源']
                },
                xAxis:{
                    data:["Android","IOS","PC","Ohter"]
                },
                yAxis:{
 
                },
                series:[{
                    name:'访问量',
                    type:'bar', //设置图表主题
                    data:[500,200,360,100]
                }]
            },
            // 折线图
            optionline: {
                title:{
                    text:'ECharts 数据统计'
                },
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [{
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line'
                }]
            },
            // 饼图
            optionpie : {
                title : {
                text: '某站点用户访问来源',
                subtext: '纯属虚构',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},
                        {value:234, name:'联盟广告'},
                        {value:135, name:'视频广告'},
                        {value:1548, name:'搜索引擎'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
            }
            
        }
    },
    
    //挂载前初始化echarts实例
    mounted() {
       this.drawLine()
    },
    methods: {
      drawLine: function(){
        //ECharts4 开始，除了一贯的默认主题外，新内置了两套主题，分别为 'light' 和 'dark'
        let chartmainbar = echarts.init(document.getElementById("chartmainbar"),'light');
        let chartmainline = echarts.init(document.getElementById("chartmainline"),'light');
        let chartmainpie = echarts.init(document.getElementById("chartmainpie"));
        //绘制图表
        chartmainbar.setOption(this.optionbar);
        chartmainline.setOption(this.optionline);
        chartmainpie.setOption(this.optionpie)
      }  
    }
}
</script>
