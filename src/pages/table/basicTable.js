import React, { Component } from 'react'
import { Card, Table } from 'antd'
import axios from './../../axios/index'
export default class BasicTable extends Component {
    // 定义数据源
    state = {
        dataSource2: []
    }
    componentDidMount() {
        const dataSource = [
            {
                id: '0',
                key: '',
                userName: 'jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-1-1',
                address: '北京市丰台区',
                time: '9:00'
            }
        ]
        this.setState({
            dataSource
        })
        this.request()
    }
    // 动态获取数据
    request = () => {
        axios.axios({
            url: '/table/list',
            data: {
                params: {
                    data: {
                        page: 1
                    }
                }
            }
        }).then((res => {
            if (res.code == 0) {
                this.setState({
                    dataSource2: res.result.List
                })
            }
        }))
        // axios.get('http://yapi.demo.qunar.com/mock/48900/table/list').then(
        //     (res)=>{
        //          console.log(res);

        //         if(res.status==200){
        //             this.setState({
        //                 dataSource2:res.data.result.List
        //             })
        //         }
        //     }
        // )
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
                dataIndex: 'sex'
            }
            ,
            {
                title: '状态',
                dataIndex: 'state'
            },
            {
                title: '爱好',
                dataIndex: 'interest'
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
        return (
            <div>
                <Card title="基础表格">
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据渲染表格" style={{ margin: '10px 0' }}>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}
