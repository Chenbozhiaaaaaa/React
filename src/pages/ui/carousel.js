import React, { Component } from 'react'
import './ui.css'
import { Card, Row, Col, Modal, Carousel  } from 'antd'
const { Meta } = Card;
export default class Carousels extends Component {
    render() {
        return (
            <div>
                <Card title='文字轮播'>
                    <Carousel autoplay>
                        <div>
                            <h3>窗前明月光</h3>
                        </div>
                        <div>
                            <h3>疑是地上霜</h3>
                        </div>
                        <div>
                            <h3>举头邀明月</h3>
                        </div>
                        <div>
                            <h3>低头思故乡</h3>
                        </div>
                    </Carousel>
                </Card>      
                <Card title='图片轮播 没有合适的图'>
                    <Carousel autoplay className="slider-wrap">
                        <div>
                           <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt=""/>
                        </div>
                        <div>
                        <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt=""/>

                        </div>
                        <div>
                        <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt=""/>

                        </div>
                        <div>
                        <img src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" alt=""/>

                        </div>
                    </Carousel>
                </Card>

            </div>
        )
    }
}
