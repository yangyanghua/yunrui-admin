import myAxios from "./myAxios";
import {myUrl, qdm} from "./config";
//获取首页数据
export const getHomeData = function (data) {
  const url = myUrl + qdm.home.getHomeData;
  return myAxios.post(url, data, true);
};
