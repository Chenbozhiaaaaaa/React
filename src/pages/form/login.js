import React, { Component } from 'react'
import { Card, Button, Icon, Input, Form, message,Checkbox } from 'antd'
const FormItem = Form.Item
class Logins extends Component {
    handleSubmit = () => {
        let uesrInfo = this.props.form.getFieldsValue();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                message.success(`${uesrInfo.userName}通过验证！`)
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="登录内联表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary" >登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单" style={{ marginTop: 10 }}>
                    <Form layout="horizontal" style={{ width: 300 }}>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: 'jack',
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(<Input placeholder="请输入用户名" />)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('userPwd', {
                                    initialValue: 'w123456',
                                    rules: [
                                        { required: true, message: 'Please input your username!' },
                                        { min: 5, max: 11, message: '长度不满足要求!' },
                                        { pattern: new RegExp('^\\w+$', 'g'), message: '只能是字母或者数字!' },
                                    ],
                                })(<Input type="password" placeholder="请输入密码" />)
                            }
                        </FormItem>
                        <Form.Item>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(<Checkbox>Remember me</Checkbox>)}
                            <a style={{float:'right'}} className="login-form-forgot" href="">
                                Forgot password
                                </a>
                        </Form.Item>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="带图标的表单" style={{ marginTop: 10 }}>
                    <Form layout="inline">
                        <FormItem>
                            <Input prefix={<Icon type="user"></Icon>} placeholder="请输入用户名" />
                        </FormItem>
                        <FormItem>
                            <Input prefix={<Icon type="lock"></Icon>} placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary" >登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Logins);