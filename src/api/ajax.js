import Axios from 'axios';
import qs from 'querystring';

const instance = Axios.create({
  timeout:20000,
  baseURL:'/api'
})

//请求拦截器
instance.interceptors.request.use((config)=>{
  const data = config.data;
  // if(data instanceof Object){
  //   config.data = qs.stringify(data)
  // }
  return config
})

//响应拦截器
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    console.log(error,'请求失败');
    
  }
)

export default instance