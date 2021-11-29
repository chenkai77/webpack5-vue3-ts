import Axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import { ElMessageBox, ElMessage } from 'element-plus'
import getBaseURL from './baseURL'

const baseURL = getBaseURL()

const axios: AxiosInstance = Axios.create({
  baseURL,
  timeout: 20000, // 请求超时 20s
})

interface IAxiosRequestConfig extends AxiosRequestConfig {
  showError?: boolean
}

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  (config: IAxiosRequestConfig): IAxiosRequestConfig => {
    const configProps = config || {}
    configProps.params = config.params ? config.params : {}
    let params = config.data || undefined
    params = params ? JSON.stringify(params) : ''
    return configProps
  },
  (error) => Promise.reject(error)
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  (response) => {
    return response.data.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default axios
