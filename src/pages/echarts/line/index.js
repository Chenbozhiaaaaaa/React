import React, { Component } from 'react'
import { Card } from 'antd'
// import echarts from 'echarts'
import echartTheme from './../themeLight'


// 按需加载
import echarts from 'echarts/lib/echarts'
// 导入饼形图表
import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'

import ReactEcharts from 'echarts-for-react'
export default class Line extends Component {
    componentWillMount() {
        echarts.registerTheme('Ire', echartTheme);
    }
    getOption = () => {
        let option = {
            title:{
                text: '用户骑行订单',
            },
            tooltip:{
                trigger:'axis',
            },
            xAxis: {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name:"订单量",
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }] 
        }
        return option;
    }
    getOption2 = () => {
        let option = {
            title:{
                text: '用户骑行订单',
            },
            tooltip:{
                trigger:'axis',
            },
            legend:{
                data:['ofo订单量','摩拜订单量']
            },
            xAxis: {
                type: 'category',
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                name:"ofo订单量",
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            },
            {
                name:"摩拜订单量",
                data: [860, 972, 901, 1004, 1290, 1630, 900],
                type: 'line'
            }
        ]
         
        
        }
        return option;
    }
    getOption3 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [
                    '周一', '周二', '周三', '周四', '周五', '周六', '周日'
                ]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'line',
                    data: [
                        1000,
                        2000,
                        1500,
                        3000,
                        2000,
                        1200,
                        800
                    ],
                    areaStyle: {}
                }
            ]
        }
        return option;
    }

    render() {
        return (
            <div>
                <Card title="折线图表1">
                    <ReactEcharts option={this.getOption()} theme="Ire" style={{height:500}} />
                </Card>
                <Card title="折线图表2" style={{ marginTop: 10 }}>
                     <ReactEcharts option={this.getOption2()} theme="Ire" style={{height:500}} />
                </Card>
                <Card title="折线图表3" style={{ marginTop: 10 }}>
                     <ReactEcharts option={this.getOption3()} theme="Ire" style={{height:500}} />
                </Card>
            </div>
        )
    }
}
