import qs from 'qs';
import {http,api} from '@/common/http/http.js';


export const  messageList =(params={}) =>{
	
    return http.post(api.messageList,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

export const  sendMessage =(params={}) =>{
	
    return http.post(api.massMessageList,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

