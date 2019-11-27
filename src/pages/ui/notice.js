import React, { Component } from 'react'
import { Card, Button, notification , Icon, Alert } from 'antd'
import './ui.css'

export default class Notice extends Component {
    openNotification=(type,direction)=>{
        if(direction){
            notification.config({
                placement: direction,
                
              });
        }
        notification[type]({
            message:'工资涨了',
            description:'给你涨工资小兄弟'
        })
    }
    render() {
        return (
            <div>
                <Card title='通知提醒框' className='card-wrap'>
                    <Button type="primary" onClick={()=>{this.openNotification('success')}}>Success</Button>
                    <Button type="primary" onClick={()=>{this.openNotification('info')}}>Info</Button>
                    <Button type="primary" onClick={()=>{this.openNotification('warning')}}>Warning</Button>
                    <Button type="primary" onClick={()=>{this.openNotification('error')}}>Error</Button>
                </Card>    
                <Card title='通知提醒框带方向' className='card-wrap'>
                    <Button type="primary" onClick={()=>{this.openNotification('success',"topLeft")}}>Success 上左</Button>
                    <Button type="primary" onClick={()=>{this.openNotification('info',"topRight")}}>Info 上右</Button>
                    <Button type="primary" onClick={()=>{this.openNotification('warning',"bottomLeft")}}>Warning 下左</Button>
                    <Button type="primary" onClick={()=>{this.openNotification('error',"bottomRigh")}}>Error 下右</Button>
                </Card>
            </div>
        )
    }
}
