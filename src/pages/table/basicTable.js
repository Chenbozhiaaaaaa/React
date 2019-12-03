import React, { Component } from 'react'
import { Card, Table, Modal ,Button,message} from 'antd'
import Utils from './../../utils/utils';
import axios from './../../axios/index'

export default class BasicTable extends Component {
    // 定义数据源
    state = {
        dataSource2: [],
        selectedRows:[]
    }
    params = {
        page:1
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
    request = ()=>{
        let _this = this;
        axios.axios({
            url:'/table/list',
            data:{
                params:{
                    page:this.params.page
                }
            }
        }).then((res)=>{
            if(res.code == 0){
                console.log(res);
                
                res.result.List.map((item, index) => {
                    item.key = index;
                })
                this.setState({
                    dataSource2:res.result.List,
                    selectedRowKeys:[],
                    selectedRows:null,
                    pagination: Utils.pagination(res,(current)=>{
                        _this.params.page = current;
                        this.request();
                    })
                })
            }
        })
    }
    handleDelete=()=>{ 
        let rows =  this.state.selectedRows
        let ids =[]
        rows.map((item)=>{
            ids.push(item.id)
        })
        Modal.confirm({
            title:'删除提示',
            content:'确定要删除吗',
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
                    return sex == 1?'男':'女'
                },
            }
            ,
            {
                title: '状态',
                dataIndex: 'state',
                render(state) {
                    let config ={
                        '1':'搬砖工程师',
                        '2':'基础码农',
                        '3':'初级工程师',
                        '4':'中级大佬',
                        '5':'框架级大佬'
                    }
                    return config[state]
                },
            },
            {
                title: '爱好',
                dataIndex: 'interest',
                render(interest) {
                    let config ={
                        '1':'编程',
                        '2':'打蓝球',
                        '3':'群里吹水',
                        '4':'钻研技术',
                        '5':'读书',
                        '6':'写字',
                        '7':'桌球'
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
        const rowSelection ={
            type:'radio',
            onChange: (selectedRowKeys, selectedRows) => {
                Modal.info({
                    title:'信息',
                    content:`姓名:${selectedRows[0].userName},用户id:${selectedRows[0].id}`
                })
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
              },
        }
        const rowCheckSelection ={
            type:'checkbox',
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
              },
        }
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
                <Card title="mock-单选按钮表格" style={{ margin: '10px 0' }}>
                    <Table
                        rowSelection={rowSelection}
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="mock-复选按钮表格" style={{ margin: '10px 0' }}>
                    <Button type='primary' onClick={this.handleDelete}>删除</Button>
                    <Table
                        rowSelection={rowCheckSelection}
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="mock-表格分页" style={{ margin: '10px 0' }}>
                    <Table
                   
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )
    }
}
