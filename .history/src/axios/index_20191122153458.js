import JsonP from 'jsonp'
// import { resolve, reject } from 'q'
export default class Axios{
    static jsonp(){
       return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function(err,response){
                console.log(response);
                
            })
        })
    }
}