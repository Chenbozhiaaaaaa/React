import React, { Component } from 'react'
import { Card, Button, Spin, Icon, Alert } from 'antd'
import './ui.css'

export default class Notice extends Component {
    openNotification=()=>{
        
    }
    render() {
        return (
            <div>
                <Card title='通知提醒框' className='card-wrap'>
                    <Button type="primary" onClick={this.openNotification}>
                        Success
                    </Button>
                </Card>
            </div>
        )
    }
}
