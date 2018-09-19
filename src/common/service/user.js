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


export const  userRecord =(params={}) =>{
	
    return http.post(api.userRecord,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 


export const  userOrder =(params={}) =>{
	
    return http.post(api.userOrder,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 



export const  userCard =(params={}) =>{
	
    return http.post(api.userCard,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 


export const  userLeaflet =(params={}) =>{
	
    return http.post(api.userLeaflet,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

export const  userCardCollection =(params={}) =>{
	
    return http.post(api.userCardCollection,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 


export const  userLeafletCollection =(params={}) =>{
	
    return http.post(api.userLeafletCollection,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 

export const  userCardShare =(params={}) =>{
	
    return http.post(api.userCardShare,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 


export const  userLeafletShare =(params={}) =>{
	
    return http.post(api.userLeafletShare,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 



export const  userComment =(params={}) =>{
	
    return http.post(api.userComment,qs.stringify(params),{
      headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
      }})		
} 


