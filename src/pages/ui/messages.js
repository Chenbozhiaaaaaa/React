import React, { Component } from 'react'
import { Card, Button, Spin, Icon, message } from 'antd'
import './ui.css'

export default class Messages extends Component {
    showMessage=(type)=>{
        message[type]('This is a  message')
    }
    render() {
        return (
            <div>
                <Card title="全局提示框" className='card-wrap'>
                    <Button type='primary' onClick={()=>{this.showMessage('success')}}>Success</Button>
                    <Button type='primary' onClick={()=>{this.showMessage('info')}}>Info</Button>
                    <Button type='primary' onClick={()=>{this.showMessage('warning')}}>Warning</Button>
                    <Button type='primary' onClick={()=>{this.showMessage('error')}}>Error</Button>
                    <Button type='primary' onClick={()=>{this.showMessage('loading')}}>Loadings</Button>
                </Card>
            </div>
        )
    }
}
