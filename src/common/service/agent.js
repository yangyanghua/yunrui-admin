import qs from 'qs';
import {http,api} from '@/common/http/http.js';


export const  getAgentList =(params={}) =>{
	
    return http.post(api.getAgentList,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

