import React, { Component } from 'react'
import { Card } from 'antd'
// import echarts from 'echarts'
import echartTheme from './../echartTheme'

// 按需加载
import echarts from 'echarts/lib/echarts'
// 导入柱形图
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/markPoint'

import ReactEcharts from 'echarts-for-react'
export default class Bar extends Component {
    componentWillMount() {
        echarts.registerTheme('Ire', echartTheme);
    }
    getOption = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '订单量',
                    type: 'bar',
                    data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
                }
            ]
        }
        return option;
    }
    getOption2 = () => {
        let option = {
            title: {
                text: '用户骑行订单'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend:{
                data:['ofo','摩拜','美团']
            },
            xAxis: {
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: 'ofo',
                    type: 'bar',
                    data: [1000, 3000, 5500, 8000, 8500, 9000, 10000]
                },
                {
                    name: '摩拜',
                    type: 'bar',
                    data: [1000, 1500, 2500, 3000, 3500, 9000, 8000]
                },
                {
                    name: '美团',
                    type: 'bar',
                    data: [1000, 2000, 1500, 3000, 2000, 1200, 800]
                }
            ]
        }
        return option;
    }
    render() {
        return (
            <div>
                <Card title="柱形图标1">
                    <ReactEcharts option={this.getOption()} theme="Ire" style={{height:500}} />
                </Card>
                <Card title="柱形图标2" style={{ marginTop: 10 }}>
                     <ReactEcharts option={this.getOption2()} theme="Ire" style={{height:500}} />
                </Card>
            </div>
        )
    }
}
