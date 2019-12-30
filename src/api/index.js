import Ajax from './ajax'

//手机页面数据请求
export const reqPhone = ()=>Ajax('/phone')

//分类列表数据请求
export const reqCategory = ()=>Ajax('/category')