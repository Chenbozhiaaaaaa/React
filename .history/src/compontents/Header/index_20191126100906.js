import React, { Component } from 'react'
import { Row,Col } from 'antd'
import './index.css'
import Util from '../../utils/utils'
import axios from '../../axios/index'
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
        this.getWeatherAPIData()
    }
    componentWillUnmount(){
        this.setState = (state, callback) => {
            return;
          };
    }
    getWeatherAPIData(){
        let city = '北京'
        axios.jsonp({
            url:`http://wthrcdn.etouch.cn/weather_mini?city=${city}`
        }).then(res=>{
            if(res.status=='1000'){
                this.setState({
                    weatherDatas:res.data.forecast[0].type,
                    weatherDatash:(res.data.forecast[0].high).substring(2),
                    weatherDatasl:(res.data.forecast[0].low).substring(2)
                })
            }else{
                
            }
        }).catch(err=>{

        })
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
                        <span className='weather-detail'>{this.state.weatherDatas} </span>
                        <span className='weather-detail'> 气温:{this.state.weatherDatash}/{this.state.weatherDatasl}</span>
                     
                    </Col>
                </Row>
            </div>
        )
    }
}
