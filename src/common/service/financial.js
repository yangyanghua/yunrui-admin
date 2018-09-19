
import qs from 'qs';
import {http,api} from '@/common/http/http.js';


export const  financeAccount =(params={}) =>{
	
    return http.post(api.financeAccount,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 




export const  financePageByAccount =(params={}) =>{
	
    return http.post(api.financePageByAccount,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

export const  financePageByAccountAndTime =(params={}) =>{
	
    return http.post(api.financePageByAccountAndTime,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 



export const  financeTotalInOut =(params={}) =>{
	
    return http.post(api.financeTotalInOut,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 



export const  financeTrade =(params={}) =>{
	
    return http.post(api.financeTrade,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

