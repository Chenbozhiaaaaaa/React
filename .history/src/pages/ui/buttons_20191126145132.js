import React, { Component } from 'react'
import {Card,Button,Icon,Radio} from 'antd'
import   './ui.css'
export default class Buttons extends Component {
    state={
        loading:true
    }
    handleCloseloading=()=>{
        this.setState({
            loading:false,
            size:'default'
        })
    }
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
                <Card title="Loaing按钮">
                    <Button type="primary"  loading={this.state.loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button loading={this.state.loading}>点击加载</Button>
                    <Button  shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" onClick={this.handleCloseloading}>关闭</Button>
                </Card>
                <Card title="按钮组">
                    <Button.Group>
                        <Button type="primary" >
                        <Icon type="left" />返回</Button>
                        <Button type="primary">前进<Icon type="right" /></Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸">
                    <Radio.Group>
                        <Radio value='samll'>小</Radio>
                        <Radio value='default'>中</Radio>
                        <Radio value='large'>大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>button</Button>
                    <Button>button</Button>
                    <Button type="dashed">button</Button>
                    <Button type="danger">button</Button>   
                </Card>
            </div>
        )
    }
}
