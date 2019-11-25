import JsonP from 'jsonp'
// import { resolve, reject } from 'q'
export default class Axios{
    static jsonp(options){
       return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function(err,response){
                console.log(response);
                if(response.status=='1000'){
                    resolve(response)
                }
            })
        })
    }
}