import React, { Component } from 'react'
import { Row,Col } from 'antd'
import './index.css'
import Util from '../../utils/utils'
export default class Header extends Component {
    componentWillMount() {
        this.setState({
            userName: '我的天呐'
        })
        setInterval(()=>{
            let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        },1000)
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className='weather'>
                        <span className="date">{this.state.sysTime}</span>
                        <span className='weather-detail'>雾霾</span>
                    </Col>
                </Row>
            </div>
        )
    }
}
