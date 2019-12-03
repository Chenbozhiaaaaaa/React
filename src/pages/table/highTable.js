import React, { Component } from 'react'
import { Card, Table, Modal, Button, message, Badge } from 'antd';
import axios from './../../axios/index'
import Utils from './../../utils/utils';
export default class HighTable extends Component {
    state = {
        dataSource: [],
        selectedRows: []
    }
    params = {
        page: 1
    }
    componentDidMount() {
        this.request()
    }
    request = () => {
        let _this = this;
        axios.axios({
            url: '/table/high/list',
            data: {
                params: {
                    page: this.params.page
                }
            }
        }).then((res) => {
            if (res.code == 0) {
                res.result.List.map((item, index) => {
                    item.key = index;
                })
                this.setState({
                    dataSource: res.result.List,
                })
            }
        })
    }
    handleChange = (pagination, filters, sorter) => {
        console.log("::" + sorter.order)
        this.setState({
            sortOrder: sorter.order
        })
    }
    handleDelete = (item)=>{
        let id = item.id;
        Modal.confirm({
            title:'确认',
            content:'您确认要删除此条数据吗？',
            onOk:()=>{
                message.success('删除成功');
                this.request();
            }
        })
    }
    render() {
        const columns = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                },
            }
            ,
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '搬砖工程师',
                        '2': '基础码农',
                        '3': '初级工程师',
                        '4': '中级大佬',
                        '5': '框架级大佬'
                    }
                    return config[state]
                },
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': '编程',
                        '2': '打蓝球',
                        '3': '群里吹水',
                        '4': '钻研技术',
                        '5': '读书',
                        '6': '写字',
                        '7': '桌球'
                    }
                    return config[interest]
                },
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ]
        const columns2 = [
            {
                title: 'id',
                dataIndex: 'id',
                fixed: 'left',
                width: 100,
            },
            {
                title: '用户名',
                dataIndex: 'userName',
                fixed: 'left',
                width: 100,

            }, {
                title: '用户名1',
                dataIndex: 'userName1'
            }, {
                title: '用户名2',
                dataIndex: 'userName2'
            }, {
                title: '用户名3',
                dataIndex: 'userName3'
            }, {
                title: '用户名4',
                dataIndex: 'userName4'
            }, {
                title: '用户名5',
                dataIndex: 'userName5'
            }, {
                title: '用户名6',
                dataIndex: 'userName6'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                },
            }
            ,
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '搬砖工程师',
                        '2': '基础码农',
                        '3': '初级工程师',
                        '4': '中级大佬',
                        '5': '框架级大佬'
                    }
                    return config[state]
                },
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': '编程',
                        '2': '打蓝球',
                        '3': '群里吹水',
                        '4': '钻研技术',
                        '5': '读书',
                        '6': '写字',
                        '7': '桌球'
                    }
                    return config[interest]
                },
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ]
        const columns3 = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                },
            },
            {
                title: '年龄',
                dataIndex: 'age',
                sorter: (a, b) => a.age - b.age,
                sortOrder: this.state.sortOrder
            }
            ,
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '搬砖工程师',
                        '2': '基础码农',
                        '3': '初级工程师',
                        '4': '中级大佬',
                        '5': '框架级大佬'
                    }
                    return config[state]
                },
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': '编程',
                        '2': '打蓝球',
                        '3': '群里吹水',
                        '4': '钻研技术',
                        '5': '读书',
                        '6': '写字',
                        '7': '桌球'
                    }
                    return config[interest]
                },
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                dataIndex: 'time'
            }
        ]
        const columns4 = [
            {
                title: 'id',
                dataIndex: 'id'
            },
            {
                title: '用户名',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                dataIndex: 'sex',
                render(sex) {
                    return sex == 1 ? '男' : '女'
                },
            }
            ,
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config = {
                        '1': '搬砖工程师',
                        '2': '基础码农',
                        '3': '初级工程师',
                        '4': '中级大佬',
                        '5': '框架级大佬'
                    }
                    return config[state]
                },
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(interest) {
                    let config = {
                        '1': <Badge text="编程" status="success" />,
                        '2': <Badge text="打蓝球" status="success" />,
                        '3': <Badge text="群里吹水" status="error" />,
                        '4': <Badge text="钻研技术" status="success" />,
                        '5': <Badge text="读书" status="default" />,
                        '6': <Badge text="写字" status="success" />,
                        '7': <Badge text="桌球" status="warings" />
                    }
                    return config[interest]
                },
            },
            {
                title: '生日',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                render:(text,item)=>{
                    return <Button size="small" onClick={(item) => { this.handleDelete(item) }}>删除</Button>
                }
            }
        ]
        return (
            <div>
                <Card title="头部固定">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{ y: 240 }}
                    />
                </Card>
                <Card title="左侧固定" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{ x: 2500 }}
                    />
                </Card>
                <Card title="表格排序" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
                <Card title="操作" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns4}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}
