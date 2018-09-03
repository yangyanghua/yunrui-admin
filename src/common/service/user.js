import qs from 'qs';
import {http,api} from '@/common/http/http.js';


export const  userList =(params={}) =>{
	
    return http.post(api.userList,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

export const  cardList =(params={}) =>{
	
    return http.post(api.cardList,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 
export const  leafletList =(params={}) =>{
	
    return http.post(api.leafletList,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

