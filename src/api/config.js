
export let myUrl = '';
// 本地运行的接口  npm run dev
if(process.env.NODE_ENV === 'development'){
     myUrl = '/api'
}
// 生成环境 npm run build--prod
if(process.env.NODE_ENV === 'production'){
     myUrl = 'http://adminapi.qdama.cn'
}
// 测试环境 npm run build--test
if(process.env.NODE_ENV === 'testing'){
     myUrl = 'http://sitadminapi.qdama.cn'
}

// export const myUrl = '/xiaolin';
export const qdm = {
  //登录
  getLogin: '/api/v1/article/login',

  home : {
   getHomeData : '/'
  },

  //  获取签名
  policySign : '/api/v1/article/sign',

  // 活动文章管理
  activityConfiguration: {
    //新增活动
    addActivity: '/api/v1/article/add',
    //更新活动
    updateActivity: '/api/v1/article/update',
    //删除活动
    deleteActivity: '/api/v1/article/delete',
    //获取活动
    listarticleActivity: '/api/v1/article/listarticle',
    //更新排序
    changeorderActivity: '/api/v1/article/changeorder'
  }
};


