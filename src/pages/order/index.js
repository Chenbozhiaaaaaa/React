import React, { Component } from 'react'
import { Card, Table, Modal, Select, Button, message, Form, DatePicker } from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils';
import FormItem from 'antd/lib/form/FormItem';
const { Option } = Select;

export default class Order extends Component {
    state = {
        orderConfirmVisble: false,
        orderInfo: {},  
    }
    param = {
        page: 1
    }
    componentDidMount() {
        this.requsetList()
    }
    requsetList = () => {
        let _this = this
        axios.axios({
            url: "/order/list",
            data: {
                param: this.param.page
            }
        }).then((res) => {
            let list = res.result.item_list.map((item, index) => {
                item.key = index;
                return item;
            });
            this.setState({
                list: list,
                pagination: Utils.pagination(res, (current) => {
                    _this.params.page = current;
                    _this.requestList();
                })
            })
        })
    }
    handleConfirm = () => {
        // 拿到id 请求后台数据
        let id = this.state.selectedItem.id;
        console.log(this.state.selectedItem);
        
        if(!id){
            Modal.info({
                title:'信息',
                content:'请选择一条订单'
            })
            return
        }
        axios.axios({
            url: '/order/ebike_info',
            data: {
                param: id
            }
        }).then((res) => {
            if (res.code == 0) {
                this.setState({
                    orderInfo: res.result,
                    orderConfirmVisble: true
                })
            }
        }

        )
    }
    handleFinishOrder = () => {
        let id = this.state.selectedItem.id;
        axios.axios({
            url: '/order/finish_order',
            data: {
                param: id
            }
        }).then((res) => {
            if (res.code == 0) {
                message.success(res.result)
                this.setState({
                    orderConfirmVisble: false
                })
                this.requsetList()
            }
        }

        )
    }
    onRowClick = (record,index)=>{
        let selectKey=[index]
        console.log(record,index);
        this.setState({
            selectedRowKeys:selectKey,
            selectedItem:record
        })
    }
    openOrderDetail=()=>{
              // 拿到id 请求后台数据
              let item = this.state.selectedItem;
              console.log(this.state.selectedItem);
              
              if(!item){
                  Modal.info({
                      title:'信息',
                      content:'请选择一条订单'
                  })
                  return
              }
              window.open(`/#/common/order/detail/${item.id}`,'_blank')
            //   window.location.href =`/#/common/order/detail/${item.id}`
    }
    render() {
        const columns = [
            {
                title: '订单编号',
                dataIndex: 'order_sn'
            },
            {
                title: '车辆编号',
                dataIndex: 'bike_sn'
            },
            {
                title: '用户名',
                dataIndex: 'user_name'
            },
            {
                title: '手机号',
                dataIndex: 'mobile'
            },
            {
                title: '里程',
                dataIndex: 'distance',
                render(distance) {
                    return distance / 1000 + 'Km';
                }
            },
            {
                title: '行驶时长',
                dataIndex: 'total_time'
            },
            {
                title: '状态',
                dataIndex: 'status',
                render(status) {
                    return status == 1 ? '进行中' : '结束行程'
                },
            },
            {
                title: '开始时间',
                dataIndex: 'start_time'
            },
            {
                title: '结束时间',
                dataIndex: 'end_time'
            },
            {
                title: '订单金额',
                dataIndex: 'total_fee'
            },
            {
                title: '实付金额',
                dataIndex: 'user_pay'
            }
        ]
        const formItemLayout = {
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
        }
        const  selectedRowKeys = this.state.selectedRowKeys
        const rowSelection ={
            type:'radio',
            selectedRowKeys
        }
        return (
            <div>
                <Card>
                    <FilterForm />
                </Card>
                <Card style={{ marginTop: 10 }}>
                    <Button type='primary' onClick={this.openOrderDetail}>订单详情</Button>
                    <Button type='primary' style={{ marginLeft: 10 }} onClick={this.handleConfirm}>结束订单</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                        rowSelection={rowSelection}
                        onRow={(record,index)=>{
                            return {
                                onClick:()=>{
                                    this.onRowClick(record,index)
                                }
                            }
                        }}
                    />
                </div>
                <Modal
                    title='结束订单'
                    visible={this.state.orderConfirmVisble}
                    onCancel={() => {
                        this.setState({
                            orderConfirmVisble: false
                        })
                    }}
                    onOk={this.handleFinishOrder}
                    width={600}
                >
                    <Form layout='horizontal'>
                        <FormItem label='车辆编号' {...formItemLayout}>
                            {this.state.orderInfo.bike_sn}
                        </FormItem>
                        <FormItem label='剩余电量' {...formItemLayout}>
                            {this.state.orderInfo.battery + '%'}
                        </FormItem>
                        <FormItem label='行程开始时间' {...formItemLayout}>
                            {this.state.orderInfo.start_time}
                        </FormItem>
                        <FormItem label='当前位置' {...formItemLayout}>
                            {this.state.orderInfo.location}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

class FilterForm extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label='城市'>
                    {
                        getFieldDecorator('city_id')(
                            <Select placeholder='全部' style={{ width: '80px' }}>
                                <Option value="">全部</Option>
                                <Option value="1">北京</Option>
                                <Option value="2">上海</Option>
                                <Option value="3">深圳</Option>
                                <Option value="4">广州</Option>
                            </Select>)
                    }
                </FormItem>
                <FormItem label='订单时间'>
                    {
                        getFieldDecorator('start_time')(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
                        )
                    }
                </FormItem>
                <FormItem >
                    {
                        getFieldDecorator('end_time')(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />,
                        )
                    }
                </FormItem>
                <FormItem label='订单状态'>
                    {
                        getFieldDecorator('op_mode')(
                            <Select placeholder='全部' style={{ width: '80px' }}>
                                <Option value="">全部</Option>
                                <Option value="1">进行中</Option>
                                <Option value="2">结束行程</Option>
                            </Select>)
                    }
                </FormItem>

                <FormItem>
                    <Button type='primary' style={{ margin: '0 20px' }}>查询</Button>
                    <Button>重置</Button>
                </FormItem>
            </Form>
        )
    }
}
FilterForm = Form.create({})(FilterForm)