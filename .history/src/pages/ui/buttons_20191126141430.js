import React, { Component } from 'react'
import {Card,Button} from 'antd'
import   './ui.css'
export default class Buttons extends Component {
    render() {
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary">button</Button>
                    <Button>button</Button>
                    <Button type="dashed">button</Button>
                    <Button type="danger">button</Button>
                    <Button disabled>button</Button>
                </Card>
                <Card title="图形按钮">
                    <Button icon='plus'>创建</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete' type="dashed">删除</Button>
                    <Button shape="circle" icon='search'></Button>
                    <Button type="primary" icon='search'>搜索</Button>
                    <Button type="primary" icon='download'>下载</Button>
                </Card>
                <Card title="图形按钮">
                    <Button icon='plus'>创建</Button>
                    <Button icon='edit'>编辑</Button>
                    <Button icon='delete' type="dashed">删除</Button>
                    <Button shape="circle" icon='search'></Button>
                    <Button type="primary" icon='search'>搜索</Button>
                    <Button type="primary" icon='download'>下载</Button>
                </Card>
            </div>
        )
    }
}
