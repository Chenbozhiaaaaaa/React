import React, { Component } from 'react'
import {Card,Button,Icon,Modal} from 'antd'
import   './ui.css'
export default class Modals extends Component {
    handleOpen=(type)=>{
        this.setState({

        })
    }
    render() {
        return (
            <div>
                <Card title='基础模态框' className='card-wrap'>
                    <Button type="primary" onClick={this.handleOpen()} >Open</Button>
                    <Button type="primary" onClick={this.handleOpen()} >自定义页脚</Button>
                    <Button type="primary" onClick={this.handleOpen()} >顶部20px弹框</Button>
                    <Button type="primary" onClick={this.handleOpen()}> 水平垂直居中</Button>
                </Card>
                <Modal title="React">

                </Modal>
            </div>
        )
    }
}