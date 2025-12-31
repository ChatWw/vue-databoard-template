import axios from 'axios'
import tool from './tool'
import { Message } from 'element-ui'

/*
 * 全局 axios 默认配置
 */
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL
// eslint-disable-next-line no-console
axios.defaults.timeout = 600000
axios.defaults.withCredentials = true
// 公共请求头
// get 请求头
axios.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers.get.Accept = 'application/json'
// post 请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
const jsonHeader = { 'Content-Type': 'application/json' }
// axios.defaults.headers.post['Content-Type'] = 'application/json';
const CancelToken = axios.CancelToken

// 添加请求前拦截器
axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const token = window.localStorage.getItem('token')
        const userId = window.localStorage.getItem('userId')
        if (token && userId) {
            config.headers.sysuserid = userId
            config.headers.systoken = token
        }
        return config
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error)
    }
)

// 添加响应拦截器
axios.interceptors.response.use(
    function (response) {
        let status = response.data.status ?? response.status
        status = status === 200 ? '0' : status
        if (status !== '0') {
            // const errStr = response.data.errstr;
        }
        return response
    },
    function (error) {
        return Promise.reject(error)
    }
)

function transformRequest(param) {
    return Object.keys(param)
        .map((key) => {
            const value = typeof param[key] === 'object' ? encodeURIComponent(JSON.stringify(param[key])) : param[key]
            return `${key}=${value}`
        })
        .join('&')
}

function request(axiosOpts) {
    return new Promise((resolve, reject) => {
        axios
            .request(axiosOpts)
            .then((res) => {
                if (res?.data !== undefined) {
                    resolve(res.data)
                } else {
                    resolve(res)
                }
            })
            .catch((err) => {
                if (axiosOpts.handleError ?? true) {
                    // _handleError(axiosOpts, err);
                }
                reject(err)
            })
    })
}

function _handleError(axiosOpts, err) {
    let msg = err
    let extendMsgs = [`url: ${axiosOpts.url}`, `request_time: ${tool.getTime('YYYY-MM-DD HH:mm:ss')}`]
    if (err.errstr) {
        msg = err.errstr
        extendMsgs.push(`trace_id: ${err.trcid}`)
    }
    Message({ type: 'error', message: msg, extendMsg: extendMsgs.join('\r\n') })
}

export default {
    get(url, params = {}, responseType, handleError = true, cancelToken) {
        const config = {
            url: url,
            method: 'get',
            responseType: responseType,
            params: params,
            handleError: handleError
        }

        if (cancelToken) {
            config.cancelToken = new CancelToken(function executor(c) {
                cancelToken.cancel = c
            })
        }

        return request(config)
    },

    /**
     * 发送post ajax请求
     * @param {*} url 请求地址
     * @param {*} body post body, 类型为：application/x-www-form-urlencoded
     * @param {*} params url params
     * @param {*} handleError 是否自动显示全局错误提示(对于chart/data这样的请求，如果出错不需要提示，只需要显示在图表中)
     * @param {*} fn 文件上传的回调函数
     * @returns axios.request Promise
     */
    post(url, body = {}, params = {}, handleError = true, fn, cancelToken, axiosOpts = true) {
        const formData = new FormData()
        Object.keys(body).forEach((key) => {
            formData.append(key, typeof body[key] === 'object' ? JSON.stringify(body[key]) : body[key])
        })
        let config = {
            url: url,
            method: 'post',
            data: formData,
            params: params,
            headers: axios.defaults.headers.post,
            handleError: handleError,
            onUploadProgress: fn
        }
        if (cancelToken) {
            config.cancelToken = new CancelToken(function executor(c) {
                cancelToken.cancel = c
            })
        }
        return request(config)
    },

    postJson(url, body = {}, params = {}, fn) {
        return request({
            url: url,
            method: 'post',
            data: body,
            params: params,
            headers: jsonHeader,
            onUploadProgress: fn
        })
    },

    postFormData(url, formData, config = {}) {
        return request({
            method: 'POST',
            url,
            data: formData,
            ...config
        })
    },

    delete(url, params) {
        return request({
            url: url,
            method: 'delete',
            params: params,
            paramsSerializer: function (params) {
                return transformRequest(params)
            }
        })
    },
    head(url, params) {},
    options(url, params) {},
    put(url, params) {},
    patch(url, params) {}
}
