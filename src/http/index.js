import axios from 'axios'
import { message } from 'antd';

const baseUrl = 'http://123.207.32.32:9001';
const timeout = 5000;

const instance = axios.create({
  baseURL: baseUrl,
  timeout,
})

instance.interceptors.request.use((config) => config,
  (err) => {
    message.error(err.message || '未知错误');
  });

instance.interceptors.response.use((res) => {
  if (res.status === 200) {
    return Promise.resolve(res.data)
  }
  return Promise.resolve(res.status)
}, (err) => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        message.error('请求错误');
        break;
      case 401:
        message.error('未授权访问');
        break;
      default:
        message.error('其他错误信息');
    }
  }
  return err;
});

export default instance
