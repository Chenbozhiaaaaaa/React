import React, { Component } from 'react'
import './ui.css'
import { Card, Row, Col, Modal, message } from 'antd'
const { Meta } = Card;
export default class Gallery extends Component {
    render() {
        return (
            <div>
                <Row gutter={10}>
                    <Col span={5}>  
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="这是一个美女" description="这个美女有大长腿" />
                    </Card>
                    <Card
                        hoverable
                        style={{ height: 140 ,width: 240}}
                        cover={<img style={{ height: 140 ,width: 240}} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="这是一个美女6" description="这个美女有大长腿" />
                    </Card>
                    </Col>
                    <Col span={5}>  
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img style={{ height: 340 ,width: 240}}  alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="这是一个美女1" description="这个美女有大长腿" />
                    </Card></Col>
                    <Col span={5}>  <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="这是一个美女2" description="这个美女有大长腿" />
                    </Card></Col>
                    <Col span={5}>  <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="这是一个美女3" description="这个美女有大长腿" />
                    </Card></Col>
                    <Col span={4}>  
                    <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
                    >
                        <Meta title="这是一个美女4" description="这个美女有大长腿" />
                    </Card></Col>
                </Row>
                
            </div>
        )
    }
}
