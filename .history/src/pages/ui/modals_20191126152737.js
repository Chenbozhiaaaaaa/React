import React, { Component } from 'react'
import {Card,Button,Icon,Radio} from 'antd'
import   './ui.css'
export default class Modals extends Component {
    render() {
        return (
            <div>
                <Card title={基础模态框} className='card-wrap'>
                    <Button>Open</Button>
                    <Button>自定义页脚</Button>
                    <Button>顶部20px弹框</Button>
                    <Button>水平垂直居中</Button>
                </Card>
            </div>
        )
    }
}
