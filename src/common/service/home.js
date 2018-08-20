import qs from 'qs';
import {http,api} from '@/common/http/http.js';


export const  navigation_getAll =(params={}) =>{
	
    return http.post(api.navigation_getAll,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

