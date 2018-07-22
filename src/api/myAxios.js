/**
 * Created by 704664846 on 2017/12/7.
 自定义封装axios请求
 */
import axios from "axios";
import qs from "qs";
let httpService = '';



	let http = axios.create({
	  baseURL: httpService,
	});
	axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
	
	http.interceptors.request.use(function (config) {
	  // Do something before request is sent 
	
	 // config.params = Object.assign(config.params || {}, params, {storeId: 0});
	  return config;
	});
	http.interceptors.response.use(function (response) {
	
//	  let data = response|| {};
//	  if (data.code == '0') {
//	    console.log("请求成功：" + data.message);
//	    return response.data.data;
//	  }
	   return response;
	  
//	  let tipMessage = {
//	    code: data.code,
//	    message: data.message
//	  }
//	  return Promise.reject(tipMessage);
	}, function (error) {
	  let tipMessage = {
	    code: '-1',
	    message: '网络或系统错误'
	  }
	
	  return Promise.reject(tipMessage);
	});



function get(getUrl, params = {}) {
  return axios.get(getUrl,{
    params: params,
    timeout: 60000
  }).then((res)=>{
    return Promise.resolve(res);
  }).catch((err)=>{
    return Promise.reject(err);
  })
}

function post(postUrl, data = {}, withCredentials = false, timeout ) {
    axios.defaults.headers = {
        "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    };
    // 是否携带cookie
  if(withCredentials){
    axios.defaults.withCredentials = true;
  }else{
    axios.defaults.withCredentials = false;
  }
  return axios({
    method: 'post',
    url: postUrl,
    data: qs.stringify(data),
    timeout: timeout || 60000
  }).then((res)=>{
    return Promise.resolve(res);
  }).catch((err)=>{
    console.log(err);
    return Promise.reject(err);
  })
}

const myAxios = {
  get : get,
  post : post,
  http:http,
};
export  default myAxios
