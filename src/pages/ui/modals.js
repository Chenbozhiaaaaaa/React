import React, { Component } from 'react'
import {Card,Button,Icon,Modal} from 'antd'
import   './ui.css'
export default class Modals extends Component {
    state={
        showMadals1 :false,
        showMadals2 :false,
        showMadals3 :false,
        showMadals4 :false
    }
    handleOpen=(type)=>{
        this.setState({
            [type]:true    
        })
    }
    handleConfirm=(type)=>{
        Modal[type]({
            title:'确认',
            content:'否是想好',
            onOk(){
                console.log('ok');
                
            },
            onCancel(){
                console.log('cancel');
                
            }

        })
    }
    render() {
        return (
            <div>
                <Card title='基础模态框' className='card-wrap'>
                    <Button type="primary" onClick={()=>this.handleOpen('showMadals1')} >Open</Button>
                    <Button type="primary"  onClick={()=>this.handleOpen('showMadals2')} >自定义页脚</Button>
                    <Button type="primary"  onClick={()=>this.handleOpen('showMadals3')} >顶部20px弹框</Button>
                    <Button type="primary"  onClick={()=>this.handleOpen('showMadals4')}> 水平垂直居中</Button>
                </Card>
                <Card title='信息确认框' className='card-wrap'>
                    <Button type="primary" onClick={()=>this.handleConfirm('confirm')} >Confirm</Button>
                    <Button type="primary"  onClick={()=>this.handleConfirm('info')} >Info</Button>
                    <Button type="primary"  onClick={()=>this.handleConfirm('success')} >Success</Button>
                    <Button type="primary"  onClick={()=>this.handleConfirm('warning')}> Warning</Button>
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
                <Modal 
                    title="React"
                    visible={this.state.showMadals2}
                    okText="nice"
                    cancelText  ="bad"
                    onCancel={()=>{
                        this.setState({
                            showMadals2:false
                        })
                    }}
                >
                    <p>这是一个小弹窗</p>
                </Modal>
                <Modal 
                    title="React"
                    visible={this.state.showMadals3}
                    okText="nice"
                    style={{top:20}}
                    cancelText="bad"
                    onCancel={()=>{
                        this.setState({
                            showMadals3:false
                        })
                    }}
                >
                    <p>这是一个小弹窗</p>
                </Modal>
                <Modal 
                    title="React"
                    visible={this.state.showMadals4}
                    okText="nice"
                    cancelText="bad"
                    wrapClassName="vertical-center-modal"
                    onCancel={()=>{
                        this.setState({
                            showMadals4:false
                        })
                    }}
                >
                    <p>这是一个小弹窗</p>
                </Modal>
            </div>
        )
    }
}
