import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'

// import { resolve, reject } from 'q'
export default class Axios{
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
        let baseApi = 'http://yapi.demo.qunar.com/mock/48900'
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
                           content:res.data.msg
                       }) 
                    }
                }else{
                    reject(response.data)
                }
            })
        })
    }
}