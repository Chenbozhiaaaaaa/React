import jsonP from 'jsonp'
// import { resolve, reject } from 'q'
export default class Axios{
    static jsonp(){
        new Promise((resolve,reject)=>{
            jsonP(options.url,{
                param:'callback'
            })
        })
    }
}