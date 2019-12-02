import React, { Component } from 'react'
import { Card, Button,InputNumber, Icon, Input, Form, message, Checkbox, Switch, Radio, Select, DatePicker, TimePicker, Upload } from 'antd'
import moment from 'moment'
const FormItem = Form.Item
const RadioGroup = Radio.Group
const { Option } = Select;
const { TextArea } = Input;
 class Register extends Component {
     getBase64=(img, callback)=> {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
      handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
                userImg:imageUrl,
              loading: false,
            }),
          );
        }
      }
      handleSubmit=()=>{
        let uesrInfo = this.props.form.getFieldsValue();
        
      }
      state={}
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
        const offsetLayout={
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
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
                                getFieldDecorator('switch', {
                                    valuePropName: 'checked',
                                    initialValue: true,

                                })(<Switch  />)
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
                        <FormItem label="联系地址" {...formItemLayout}>
                            {
                                getFieldDecorator('address', {
                                    
                                    initialValue: '北京市丰台区',

                                })( <TextArea
                                    autoSize={{ minRows: 2, maxRows: 6 }}
                                    />)
                            }
                        </FormItem>
                        <FormItem label="头像" {...formItemLayout}>
                            {
                                getFieldDecorator('userImg',
                                {
                                    valuePropName: 'fileList',
                                    getValueFromEvent: this.normFile,
                                  })(<Upload  
                                    listType="picture-card"
                                    showUploadList={false}
                                    onChange={this.handleChange}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                > 
                                {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus" />}
                                </Upload>)
                            }
                        </FormItem>
                        <FormItem  {...offsetLayout}>
                            {
                                getFieldDecorator('userImg',{
                                    valuePropName: 'checked',

                                })(
                                    <Checkbox >我已经阅读过<a href="#">安全协议</a></Checkbox>
                            )
                            }
                        </FormItem>
                        <FormItem  {...offsetLayout}>
                            {
                                getFieldDecorator('userImg')(
                                    <Button type='primary' onClick={this.handleSubmit}>注册</Button>
                            )
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(Register);