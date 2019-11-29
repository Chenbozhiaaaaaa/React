import React, { Component } from 'react'
import { Card, Button,InputNumber, Icon, Input, Form, message, Checkbox, Switch, Radio, Select, DatePicker, TimePicker, Upload } from 'antd'
import moment from 'moment'
const FormItem = Form.Item
const RadioGroup = Radio.Group
const { Option } = Select;
 class Register extends Component {
    render() {
        const { getFieldDecorator } = this.props.form;
        const formItemLayout = {
            labelCol:{
                xs:24,
                sm:4,

            },
            wrapperCol:{
                xs:24,
                sm:12,
            }
        }
        return (
            <div>
                <Card title='注册表单'>
                    <Form>
                        <FormItem label="用户名" {...formItemLayout}>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: 'jack',
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(<Input placeholder="请输入用户名" />)
                            }
                        </FormItem>                        
                        <FormItem label="密码" {...formItemLayout}>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: '',
                                    rules: [{ required: true, message: 'Please input your userPwd!' }],
                                })(<Input placeholder="请输入密码" />)
                            }
                        </FormItem>
                        <FormItem label="性别" {...formItemLayout}>
                            {
                                getFieldDecorator('sex', {
                                    initialValue: '1',
                                })(<RadioGroup>
                                    <Radio value="1">男</Radio>
                                    <Radio value="2">女</Radio>     
                                </RadioGroup>)
                            }
                        </FormItem>            
                        <FormItem label="年龄" {...formItemLayout}>
                            {
                                getFieldDecorator('age', {
                                    initialValue: '18',
                                })(<InputNumber min={1} max={10} />)
                            }
                        </FormItem>
                        <FormItem label="当前状态" {...formItemLayout}>
                            {
                                getFieldDecorator('state', {
                                    initialValue: '1',
                                })(<Select>
                                    <Option value="1">高级前端</Option>
                                    <Option value="2">中级前端</Option>
                                    <Option value="3">搬砖前端</Option>
                                    <Option value="4">垃圾前端</Option>
                                </Select>)
                            }
                        </FormItem>      
                        <FormItem label="爱好" {...formItemLayout}>
                            {
                                getFieldDecorator('interest', {
                                    initialValue: ['1','3'],
                                })(<Select mode='multiple'>
                                    <Option value="1">编程</Option>
                                    <Option value="2">学习</Option>
                                    <Option value="3">篮球</Option>
                                    <Option value="4">K歌</Option>
                                    <Option value="5">骑行</Option>
                                </Select>)
                            }
                        </FormItem>               
                        <FormItem label="是否帅气" {...formItemLayout}>
                            {
                                getFieldDecorator('isOk', {
                                    valuePropName: 'checked',
                                    initialValue: true,

                                })(<Switch />)
                            }
                        </FormItem>
                        <FormItem label="生日" {...formItemLayout}>
                            {
                                getFieldDecorator('data', {
                                    
                                    initialValue: moment('2018-8-8'),

                                })( <DatePicker 
                                    style={{ width: '100%' }}
                                    showTime
                                    />)
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Register);