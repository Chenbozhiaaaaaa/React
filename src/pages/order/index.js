import React, { Component } from 'react'
import { Card, Table, Modal, Select, Button, message, Form, DatePicker } from 'antd'
import axios from './../../axios/index'
import Utils from './../../utils/utils';
import FormItem from 'antd/lib/form/FormItem';
const { Option } = Select;

export default class Order extends Component {
    state = {}
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
            data:{
                param:this.param.page
            }
        }).then((res)=>{
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
                dataIndex: 'status'
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
        return (
            <div>
                <Card>
                    <FilterForm />
                </Card>
                <Card style={{ marginTop: 10 }}>
                    <Button>订单详情</Button>
                    <Button>结束详情</Button>
                </Card>
                <div className="content-wrap">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.list}
                        pagination={this.state.pagination}
                    />
                </div>
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