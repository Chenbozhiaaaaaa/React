import React, { Component } from 'react'
import { Row, Col } from 'antd'
import './index.css'
import Util from '../../utils/utils'
import axios from '../../axios/index'
import Axios from 'axios'
export default class Header extends Component {
    componentWillMount() {
        this.setState({
            userName: '我的天呐'
        })
        setInterval(() => {
            let sysTime = Util.formateDate(new Date().getTime())
            this.setState({
                sysTime
            })
        }, 1000)
        this.getWeatherAPIData()
    }
    // 防止内存泄漏
    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
    }
    getWeatherAPIData() {
        let city = '北京'
        // axios.jsonp({
        //     url:`http://wthrcdn.etouch.cn/weather_mini?city=${city}`
        // }).then(res=>{
        //     if(res.status=='1000'){
        //         this.setState({
        //             weatherDatas:res.data.forecast[0].type,
        //             weatherDatash:(res.data.forecast[0].high).substring(2),
        //             weatherDatasl:(res.data.forecast[0].low).substring(2)
        //         })
        //     }
        // })
        // 这里单独引入了一个axios 因为天气接口是第三方的 封装的jsonp不能满足格式
        Axios.get(`https://www.tianqiapi.com/api/?appid=58984568&appsecret=6i21A53n&version=v6&city=%E5%8C%97%E4%BA%AC`).then(res => {
            let meta = res.data
            console.log(meta);
            if (res.status == '200') {
                this.setState({
                    weatherCity:meta.city,
                    weatherDatas: meta.wea,
                    weatherDatash: meta.tem1,
                    weatherDatasl: meta.tem2
                })
            }
        })
    }
    render() {
        const menuType = this.props.menuType;
        return (
            <div className="header">
                <Row className="header-top">
                    {
                        menuType?    
                            <Col span={6} className='logo'>
                                <img src="/assets/logo.gif" alt=""/>
                                <span style={{marginLeft:8}}>通用头部组件</span>
                        </Col>:''
                    }
                    <Col span={menuType?18:24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="">退出</a>
                    </Col>
                </Row>
                {
                    menuType?'':
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className='weather'>
                        <span className="date">{this.state.sysTime}</span>
                        <span className="date">{this.state.weatherCity}</span>
                        <span className='weather-detail'>{this.state.weatherDatas} </span>
                        <span className='weather-detail'> 气温:{this.state.weatherDatash}&#176;/{this.state.weatherDatasl}&#176;</span>

                    </Col>
                </Row>
                }
            </div>
        )
    }
}
