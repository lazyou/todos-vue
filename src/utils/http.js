import axios from 'axios'
import store from '../store'
import { Message } from 'element-ui'
import { API_BASE_URL } from '../config/config'

/**
 * axios: http://www.axios-js.com/zh-cn/docs
 */
export default class Http {
  constructor (config) {
    let defaultConfig = {
      // axios 配置项
      url: '',
      method: 'GET',
      headers: {},
      baseURL: API_BASE_URL,
      timeout: 2000,
      // 自定义配置项
      handleThen: null,
      handleCatch: null,
      handleFinally: null,
      useShowLoading: true
    }

    this.config = Object.assign(defaultConfig, config)
    this.axios = axios(this.config)
    // TODO: 这里处理失败
    this.interceptors()
    this.handle()
  }

  run () {}

  handle () {
    this.axios
      .then(this.setHandleThen())
      .catch(this.setHandleCatch())
      .finally(this.setHandleFinally())
  }

  // then 处理 （请求成功）
  setHandleThen () {
    if (this.config.handleThen === null) {
      throw new Error('handleThen 函数必须定义')
    }

    return this.config.handleThen
  }

  // catch 处理 （异常）
  setHandleCatch () {
    if (this.config.handleCatch === null) {
      console.log('setHandleCatch:')

      return (error) => {
        Message({
          message: error,
          type: 'error',
          center: true
        })
      }
    } else {
      return this.config.handleCatch
    }
  }

  // finally 处理
  setHandleFinally () {
    if (this.config.handleFinally === null) {
      console.log('setHandleFinally：')

      store.state.showLoading = false
    } else {
      return this.config.handleFinally
    }
  }

  // axios 拦截器
  interceptors () {
    this.requestInterceptors()
    this.responseInterceptors()
  }

  // 请求拦截器
  requestInterceptors () {
    if (this.config.useShowLoading) {
      this.axios.interceptors.request.use(function (config) {
        console.log('requestInterceptors:')
        console.log(store.state.showLoading)

        store.state.showLoading = true
        return config
      })
    }
  }

  // 响应拦截器
  responseInterceptors () {
    if (this.config.useShowLoading) {
      this.axios.interceptors.response.use(function (config) {
        console.log('responseInterceptors:')
        console.log(store.state.showLoading)

        store.state.showLoading = false
        return config
      })
    }
  }
}
