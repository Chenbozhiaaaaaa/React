import React, { Component } from 'react'
import { Card, Button, notification , Icon, Alert } from 'antd'
import './ui.css'

export default class Notice extends Component {
    openNotification=()=>{
        notification.success({
            message:'工资涨了',
            description:'给你涨工资小兄弟'
        })
    }
    render() {
        return (
            <div>
                <Card title='通知提醒框' className='card-wrap'>
                    <Button type="primary" onClick={this.openNotification}>
                        Success
                    </Button>
                    <Button type="primary" onClick={()=>{this.openNotification('type')}}>
                        Success
                    </Button>
                </Card>
            </div>
        )
    }
}
