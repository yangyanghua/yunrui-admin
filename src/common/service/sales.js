import qs from 'qs';
import {http,api} from '@/common/http/http.js';


export const  allOrderList =(params={}) =>{
	
    return http.post(api.allOrderList,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 