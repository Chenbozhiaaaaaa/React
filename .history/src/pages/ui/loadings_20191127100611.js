import React, { Component } from 'react'
import {Card,Button,Spin,Icon,Alert} from 'antd'
export default class Loadings extends Component {
    render() {
        return (
            <div>
                <Card title="Spin的用法" class='card-wrap'>
                    <Spin size="small"></Spin>
                    <Spin></Spin>
                    <Spin size="large"></Spin>
                </Card>
            </div>
        )
    }
}
