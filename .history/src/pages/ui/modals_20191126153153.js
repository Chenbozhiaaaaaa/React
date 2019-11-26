import React, { Component } from 'react'
import {Card,Button,Icon,Radio} from 'antd'
import   './ui.css'
export default class Modals extends Component {
    render() {
        return (
            <div>
                <Card title='基础模态框' className='card-wrap'>
                    <Button type="primary" >Open</Button>
                    <Button type="primary" >自定义页脚</Button>
                    <Button type="primary" >顶部20px弹框</Button>
                    <Button type="primary"> 水平垂直居中</Button>
                </Card>
            </div>
        )
    }
}
