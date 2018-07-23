//引入axios
import axios from 'axios'
let cancel ,promiseArr = {}
const CancelToken = axios.CancelToken;
//请求拦截器
axios.interceptors.request.use(config => {
    //发起请求时，取消掉当前正在进行的相同请求
    if (promiseArr[config.url]) {
        promiseArr[config.url]('操作取消')
        promiseArr[config.url] = cancel
    } else {
        promiseArr[config.url] = cancel
    }
      return config
}, error => {
    return Promise.reject(error)
})
 
//响应拦截器
axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.resolve(error.response)
})

let baseURL = 'http://localhost:8080'

if (process.env.NODE_ENV == 'development') {
    baseURL = 'http://localhost:8080';
    console.log("development")
}else if (process.env.NODE_ENV == 'production') {
    console.log("production")
    baseURL = 'http://101.132.90.6:99';
}

axios.defaults.timeout = 10000

export default {
  //get请求
  get (url,param) {
    return new Promise((resolve,reject) => {
      axios({
        method: 'get',
        url: baseURL + url,
        params: param,
        headers:{
          'X-Requested-With':'XMLHttpRequest'
        },
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res.data)
      })
      .catch(res =>{
        reject(res)
      })
    })
  },
  //post请求
  post (url,param) {
    return new Promise((resolve,reject) => {
      axios({
        method: 'post',
        url: baseURL + url,
        headers:{
          // 'Content-Type':'application/x-www-form-urlencoded'
          'Content-Type':'application/json',
        },
        contentType: "application/json",
        // dataType: 'json',
        data: param,
        cancelToken: new CancelToken(c => {
          cancel = c
        })
      }).then(res => {
        resolve(res.data)
      })
      .catch(res =>{
        reject(res)
      })
    })
   }
}


// async 
// cosnt [r, list] = await Promise.all([getTableList(data), getList(data)])
// console.log(r, list)