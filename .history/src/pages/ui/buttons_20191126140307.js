import React, { Component } from 'react'
import {Card,Button} from 'antd'
export default class Buttons extends Component {
    render() {
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary">button</Button>
                    <Button>button</Button>
                    <Button type="dashed">button</Button>
                    <Button type="danger">button</Button>
                    

                </Card>
            </div>
        )
    }
}
