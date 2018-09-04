import qs from 'qs';
import {http,api} from '@/common/http/http.js';


export const  SpecialActivity =(params={}) =>{
	
    return http.post(api.SpecialActivity,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

export const  SpecialActLeaflet =(params={}) =>{
	
    return http.post(api.SpecialActLeaflet,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 


export const  addSpecialActivity =(params={}) =>{
	
    return http.post(api.addSpecialActivity,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

export const  getSpecialActivity =(params={}) =>{
	
    return http.post(api.getSpecialActivity,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 
