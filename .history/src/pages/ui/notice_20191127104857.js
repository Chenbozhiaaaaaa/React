import React, { Component } from 'react'
import { Card, Button, Spin, Icon, Alert } from 'antd'
import './ui.css'

export default class Notice extends Component {
    render() {
        return (
            <div>
                <Card title='通知提醒框' className='card-wrap'>
                    <Button type="primary">
                        Success
                    </Button>
                </Card>
            </div>
        )
    }
}
