import React, { Component } from 'react'
import { Card, Button, Spin, Icon, Alert } from 'antd'
import './ui.css'
export default class Loadings extends Component {
    render() {
        const icon = <Icon type="loading" style={{fontSize:24}} />
        return (
            <div>
                <Card title="Spin的用法" className='card-wrap'>
                    <Spin size="small"></Spin>
                    <Spin></Spin>
                    <Spin size="large"></Spin>
                </Card>
                <Card title="内容遮罩" className='card-wrap'>
                    <Alert message="react" type="info" description="人间不值得"></Alert>
                    <Alert message="react" type="warning" description="人间不值得"></Alert>
                    <Spin>
                        <Alert message="react" type="warning" description="人间不值得"></Alert>
                    </Spin>
                    <Spin tip='搁那等会...'>
                        <Alert message="react" type="warning" description="人间不值得"></Alert>
                    </Spin>
                    <Spin tip='搁那等会...' indicator={icon}>
                        <Alert message="react" type="warning" description="人间不值得"></Alert>
                    </Spin>
                </Card>
            </div>
        )
    }
}
