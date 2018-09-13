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

export const  RegularActivity =(params={}) =>{
	
    return http.post(api.RegularActivity,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

export const  RegularActivitySave =(params={}) =>{
	
    return http.post(api.RegularActivitySave,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

export const  getArea =(params={}) =>{
	
    return http.get(api.getArea,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 
export const  upload =(params={}) =>{
	
    return http.post(api.upload,params,{
	    headers:{
	          'Content-Type': 'multipart/form-data'
	    }
      
    })
} 


export const  RedPacketList =(params={}) =>{
	
    return http.post(api.RedPacketList,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

export const  RedPacketRefund =(params={}) =>{
	
    return http.post(api.RedPacketRefund,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

export const  RedPacketSave =(params={}) =>{
	
    return http.post(api.RedPacketSave,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

