import React, { Component } from 'react'
import { Card, Button, Spin, Icon, Alert } from 'antd'
import './ui.css'
export default class Loadings extends Component {
    render() {
        return (
            <div>
                <Card title="Spin的用法" className='card-wrap'>
                    <Spin size="small"></Spin>
                    <Spin></Spin>
                    <Spin size="large"></Spin>
                </Card>
                <Card title="内容遮罩" className='card-wrap'>
                    <Alert message="react" type="info" description="人间不值得"></Alert>
                    <Alert message="react" type="waring" description="人间不值得"></Alert>
                </Card>
            </div>
        )
    }
}
