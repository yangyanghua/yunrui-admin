import qs from 'qs';
import {http,api} from '@/common/http/http.js';


export const  agentList =(params={}) =>{
	
    return http.post(api.agentList,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 


export const  agentApply =(params={}) =>{
	
    return http.post(api.agentApply,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 


export const  agentApplyList =(params={}) =>{
	
    return http.post(api.agentApplyList,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 



export const  agentApplyCheck =(params={}) =>{
	
    return http.post(api.agentApplyCheck,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 


export const  agentProfitRecord =(params={}) =>{
	
    return http.post(api.agentProfitRecord,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 



export const  agentPageByUser =(params={}) =>{
	
    return http.post(api.agentPageByUser,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

export const  agentStatistics =(params={}) =>{
	
    return http.post(api.agentStatistics,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 


export const  agentStatisticsByid =(params={}) =>{
	
    return http.post(api.agentStatisticsByid,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

