import React from 'react'
import { Pagination, Select } from "antd";
const {Option} =Select
export default{
    formateDate(time){
        if(!time) return ''
        let date = new Date(time)
        return  date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+ ' '+ date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    },
    pagination(data,callback){
        return {
            onChange:(current)=>{
                callback(current)
            },
            current:data.result.page,
            pageSize:data.result.page_size,
            total: data.result.total_count,
            showTotal:()=>{
                return `共${data.result.total_count}条`
            },
            showQuickJumper:true
        }
    
    },
    getOptionList(data){
        if(!data){
            return []
        }
        // let options=[<Option value='0' key='all_key'>全部</Option> ]
        let options=[]
        data.map((item=>{
        options.push(<Option value={item.id} key={item.id}>{item.name}</Option>)
        }))
        return options
    },
    updataSelectedItem(selectedRowKeys,selectedItem,selectedIds) {
        if (selectedIds){
            this.setState({
                selectedRowKeys,
                selectedItem,
                selectedIds
            })
        }else{
            this.setState({
                selectedRowKeys,
                selectedItem
            })
        }
    }
}