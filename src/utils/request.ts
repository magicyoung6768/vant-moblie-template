import axios from 'axios';
import { showToast } from 'vant';

// 创建 axios 实例
const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || '',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 请求拦截器
request.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么，比如添加 token
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const res = response.data;
    
    // 假设约定的成功状态码是 200
    if (res.code !== 200) {
      showToast(res.msg || '请求失败');
      return Promise.reject(new Error(res.msg || '请求失败'));
    }
    return res;
  },
  (error) => {
    // 对响应错误做点什么
    console.error('响应错误:', error);
    showToast(error.msg || '网络错误');
    return Promise.reject(error);
  }
);

export default request;
