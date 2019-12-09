import JsonP from 'jsonp'
import axios from 'axios'
import Utils from '../utils/utils'
import { Modal } from 'antd'

// import { resolve, reject } from 'q'
export default class Axios{
    static requestList(_this,url,params,isMock){
        var data ={
            params:params,
            isMock
        }
        this.axios({
            url,
            data
        }).then((data)=>{
            if(data && data.result){
                   let list = data.result.item_list.map((item, index) => {
                item.key = index;
                return item;
            });
            _this.setState({
                list: list,
                pagination: Utils.pagination(data, (current) => {
                    _this.params.page = current;
                    _this.requestList();
                })
            })
            }
         
        })
    }
    static jsonp(options){
       return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function(err,response){
                if(response.status=='1000'){
                    resolve(response)
                }else{
                    reject(response.message)
                }
            })
        })
    }
    static axios (options){
        let loading;
        if(options.data && options.data.isShowLoading !==false){
            loading = document.getElementById('ajaxLoading');
            loading.style.display = 'block'
        }
        let baseApi = ''
        if(options.isMock){
            baseApi = 'http://yapi.demo.qunar.com/mock/48900';
        }else{
            baseApi = 'http://yapi.demo.qunar.com/mock/48900';
        }
        return new Promise((resolve,reject)=>{
            axios({
                url:options.url,
                method:'get',
                baseURL:baseApi,
                timeout:5000,
                params:(options.data&&options.data.params) || ''
            }).then((response)=>{
                if(options.data && options.data.isShowLoading !==false){
                    loading = document.getElementById('ajaxLoading');
                    loading.style.display = 'none'
                }
                if(response.status=='200'){
                    let res = response.data
                    if(res.code =='0'){
                        resolve(res)
                    }else{
                       Modal.info({
                           title:'提示',
                           content:res.msg
                       }) 
                    }
                }else{
                    reject(response.data)
                }
            })
        })
    }
}