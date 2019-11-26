import React, { Component } from 'react'
import {Card,Button,Icon,Modal} from 'antd'
import   './ui.css'
export default class Modals extends Component {
    state={
        showMadals1 :false
    }
    handleOpen=(type)=>{
        this.setState({
            showMadals1:true    
        })
    }
    render() {
        return (
            <div>
                <Card title='基础模态框' className='card-wrap'>
                    <Button type="primary" onClick={()=>this.handleOpen('showMadals1')} >Open</Button>
                    <Button type="primary"  onClick={()=>this.handleOpen('showMadals1')} >自定义页脚</Button>
                    <Button type="primary"  onClick={()=>this.handleOpen('showMadals1')} >顶部20px弹框</Button>
                    <Button type="primary"  onClick={()=>this.handleOpen('showMadals1')}> 水平垂直居中</Button>
                </Card>
                <Modal 
                    title="React"
                    visible={this.state.showMadals1}
                    onCancel={()=>{
                        this.setState({
                            showMadals1:false
                        })
                    }}
                >
                    <p>这是一个小弹窗</p>
                </Modal>
            </div>
        )
    }
}