import React, { Component } from 'react'
import { Row, Col } from 'antd';
import Header from './compontents/Header/index.js'
import Footer from './compontents/Footer/index.js'
import NavLeft from './compontents/NavLeft/index.js'
import  './style/commen.css'
import Home from './pages/home'
export default class Admin extends Component {
    render() {
        return (
            <div>
                <Row className="container">
                    <Col span={3} className="nav-left">
                    <NavLeft />
                    </Col>
                    <Col span={21} className="main">
                        <Header />
                        <Row className="content">
                          {/* <Home /> */}
                          {this.props.children}
                        </Row>
                        <Footer></Footer>
                    </Col>
                </Row>
            </div>
        )
    }
}