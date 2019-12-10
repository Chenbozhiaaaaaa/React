import React, { Component } from 'react'
import Utils from './../../utils/utils';    
import { Input, Select, Form, Button, Checkbox, Radio, DatePicker } from 'antd'
import FormItem from 'antd/lib/form/FormItem';
const { Option } = Select
class FilterForm extends Component {
    handleFilterSubmit=()=>{
        let fieldsValue = this.props.getFieldsValue();
        this.props.filterSubmit(fieldsValue)
    }
    reset =()=>{
        this.props.form.resetFields();
    }
    initFormList = () => {
        //  实现数据双向绑定
        const { getFieldDecorator } = this.props.form;
        const formList = this.props.formList;
        const formItemList = []
        if (formList && formList.length > 0) {
            formList.forEach((item, i) => {
                let label = item.label;
                let field = item.field;
                let initialValue = item.initialValue || ''
                let placeholder = item.placeholder
                let width = item.width
                if(item.type == "时间查询"){
                    const begin_time =
                    <FormItem label='订单时间' key={field} >
                        {
                            getFieldDecorator('begin_time')(
                                <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss" />
                                )
                        }
                    </FormItem>;
                formItemList.push(begin_time)
                const end_time =
                    <FormItem label="~" colon={false} key={item.field1} >
                        {
                            getFieldDecorator('end_time')(
                                <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss" />
                                )
                        }
                    </FormItem>
                formItemList.push(end_time)
                }
                else if (item.type == "INPUT") {
                    const INPUT =
                        <FormItem label={label} key={field} >
                            {
                                getFieldDecorator(field,{ initialValue: initialValue })(
                                    <Input type='text' placeholder={placeholder}></Input>)
                            }
                        </FormItem>
                    formItemList.push(INPUT)
                }
                else if (item.type == "SELECT") {
                    const SELECT =
                        <FormItem label={label} key={field} >
                            {
                                getFieldDecorator(field, {initialValue: initialValue })(
                                    <Select placeholder={placeholder} style={{ width: width }}>
                                        {Utils.getOptionList(item.List)}
                                    </Select>)
                            }
                        </FormItem>
                    formItemList.push(SELECT)

                }
                else if (item.type == "CHECKBOX") {
                    const CHECKBOX =
                        <FormItem label={label} key={field} >
                            {
                                getFieldDecorator(field, {
                                    valuePropName: 'checked',
                                    initialValue: initialValue
                                })(
                                    <Checkbox>
                                        {label}
                                    </Checkbox>)
                            }
                        </FormItem>
                    formItemList.push(CHECKBOX)
                }
                else if (item.type == 'DATE') {
                    const Date = <FormItem label={label} key={field}>
                        {
                            getFieldDecorator([field])(
                                <DatePicker showTime={true} placeholder={placeholder} format="YYYY-MM-DD HH:mm:ss" />
                            )
                        }
                    </FormItem>;
                    formItemList.push(Date)
                }
            })
        }
        return formItemList
    }
    render() {
        return (
            <div>
                <Form layout='inline'>
                    {this.initFormList()}
                    <FormItem>
                        <Button type='primary' style={{ margin: '0 20px' }} onClick={this.handleFilterSubmit}>查询</Button>
                        <Button onClick={this.reset}>重置</Button>
                    </FormItem>
                </Form>
            </div>
        )
    }
}
export default Form.create({})(FilterForm);