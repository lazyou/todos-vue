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
      // timeout: 2000,
      // 自定义配置项
      handleThen: null,
      handleCatch: null,
      handleFinally: null,

      // handleCatch 的 Message 配置
      catchConfig: null
    }

    // 配置项覆盖
    this.config = Object.assign(defaultConfig, config)
    this.axios = axios(this.config)
  }

  run () {
    store.commit('showLoading')

    this.handle()
  }

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
      return (error) => {
        let catchConfig = Object.assign({
          message: error,
          type: 'error',
          center: true
        }, this.config.catchConfig)

        Message(catchConfig)
      }
    } else {
      return this.config.handleCatch
    }
  }

  // finally 处理
  setHandleFinally () {
    if (this.config.handleFinally === null) {
      return () => {
        store.commit('hiddenLoading')
      }
    } else {
      return this.config.handleFinally
    }
  }
}
