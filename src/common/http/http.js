import axios from 'axios';
import * as api from './api.js';
import NProgress from 'nprogress'
let httpService = '';
var currentHost = location.host;


//if (currentHost == 'localhost:8090'||currentHost == '192.168.9.243:8080' || currentHost == '192.168.9.218:8380') {
//		httpService='132123';
//
//} else if (currentHost == '132123') {
//httpService = '132123'; //測試/預生產
//} else if (currentHost == '132123') {
//httpService = '132123'; //生產
//}



const getToken = () => {
  return JSON.parse(localStorage.getItem('user'));
};
let http = axios.create({
  baseURL: httpService,
  //   headers:{
  //     'Content-Type':'application/x-www-form-urlencoded'
  // },
  //   transformRequest: [function (data) {
  //     data = Qs.stringify(data);
  //     return data;
  // }],
  // withCredentials: true //加了这段就可以跨域了
});
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

http.interceptors.request.use(function (config) {
  // Do something before request is sent 
	NProgress.start();
//let Token = getToken() ? getToken().token : '';
  //config.headers.Authorization = Token;
    // let storeId = '';
  // let params = {
  //   storeId
  // };
  // config.params = Object.assign(config.params || {}, params);
  
 // let accessToken = getToken() ? getToken().accessToken : '';
  let params = {};
  config.params = Object.assign(config.params || {}, params);
  return config;
});
http.interceptors.response.use(function (response) {
  NProgress.done(); 
  let data = response.data || {};
  if (data.status == '0') {
    console.log("请求成功：" + data.message);
    return response.data.data;

  }

  let tipMessage = {
    code: data.code,
    message: data.message
  }
  return Promise.reject(tipMessage);
}, function (error) {
  let tipMessage = {
    code: '-1',
    message: '网络或系统错误'
  }

  return Promise.reject(tipMessage);
});
export default http;

export {
  api,
  http,
  httpService,
  currentHost
};
