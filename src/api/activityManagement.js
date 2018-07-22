import myAxios from "./myAxios";
import {myUrl, qdm} from "./config";
let uploadUrl = '';
// 获取签名
export const policySign = function (data) {
  const url = myUrl + qdm.policySign;
  return myAxios.get(url, data);
};

//上传图片接口
export const getUploadImg = (params = {}) => {
  return myAxios.http.post(uploadUrl,params,{
    headers:{
          'Content-Type': 'multipart/form-data'
    }
    });
}

 export const get_suffix = (filename) => {
            var pos = filename.lastIndexOf('.')
            var  suffix = ''
            if (pos != -1) {
                suffix = filename.substring(pos)
            }
            return suffix;
       };
export const  random_string = (len) => {
            var len = len || 32;
            var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
            var maxPos = chars.length;
            var pwd = '';
            for (var i = 0; i < len; i++) {
                pwd += chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return pwd;
       };


export const getUploadImgSrc = (file) => {
	let content_len = Math.round(file.size * 100 / 1024) / 100;
  let fd = new FormData();
  let name =  'mallH5/' + random_string(32) + get_suffix(file.name);
  let promise = new Promise(function(resolve, reject){
  	policySign().then((res)=>{
  		let data = res.data.data;
  		uploadUrl = res.data.data.host;
      fd.append('Content-Length', content_len);
      fd.append('key',name);
      fd.append('policy',data.policy);      
			fd.append('OSSAccessKeyId',data.accessid);
		  fd.append('success_action_status','200'); 
			fd.append('signature',data.signature);
			fd.append('expire',data.expire);
			fd.append('file',file);
	    getUploadImg(fd).then(res => {
		     let imgSrc = uploadUrl + '/' + name;
		     resolve(imgSrc);
	    }).catch(res => {
	      reject(res);
	    }); 
  	}).catch((res)=>{
  		
  		reject(res);
  	})
  	
  });
  return promise;
};


/*活动文章管理开始*/
//新增活动
export const addActivity = function (data) {
  const url = myUrl + qdm.activityConfiguration.addActivity;
  return myAxios.post(url, data);
};
//更新活动
export const updateActivity = function (data) {
  const url = myUrl + qdm.activityConfiguration.updateActivity;
  return myAxios.post(url, data);
};
//删除活动
export const deleteActivity = function (data) {
  const url = myUrl + qdm.activityConfiguration.deleteActivity;
  return myAxios.post(url, data);
};
//获取活动
export const listarticleActivity = function (data) {
  const url = myUrl + qdm.activityConfiguration.listarticleActivity;
  return myAxios.post(url, data);
};
//更新排序
export const changeorderActivity = function (data) {
  const url = myUrl + qdm.activityConfiguration.changeorderActivity;
  return myAxios.post(url, data);
};

/*活动文章管理结束*/
