import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

// 响应时间
axios.defaults.timeout = 5 * 1000
// 配置cookie
// axios.defaults.withCredentials = true
// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 静态资源
Vue.prototype.$static = ''

// 配置接口地址
axios.defaults.baseURL = 'http://www.z.cn/api/v1'
var loadingInstance
// POST传参序列化(添加请求拦截器)
axios.interceptors.request.use(
  config => {
    if (config.method === 'post') {
      if (config.url == '/upLoadImg') {
        config.headers['Content-Type'] = 'multipart/form-data'
        
      } else {
        // config.headers['Content-Type'] = 'application/json'
        config.data = qs.stringify(config.data)
      }
    }
    config.headers.token='abcd'
    return config
  },
  err => {
    Message.error('请求错误')
    return Promise.reject(err)
  }
)
// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use(
  res => {
    if (res.status === 200) {
      loadingInstance.close()
      return res
    } else {
      return res.data
    }
  },
  err => {
    return Promise.reject(err)
  }
)
// post请求
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(
        res => {
          resolve(res.data)
        },
        err => {
          reject(err.data)
        }
      )
      .catch(err => {
        reject(err.data)
      })
  })
}

//get请求
export  function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}