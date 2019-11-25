import React, { Component } from 'react'
import { Row } from 'antd'

export default class Header extends Component {
    componentWillMount() {
        this.setState({
            userName: '我的天呐'
        })
    }
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href=""></a>
                    </Col>
                </Row>
                <Row>
                    <Col span={4}>
                        首页
                    </Col>
                    <Col span={20}>
                        <span>2019-9-9</span>
                        <span>雾霾</span>
                    </Col>
                </Row>
            </div>
        )
    }
}
