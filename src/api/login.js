/**
 * Created by 704664846 on 2017/12/22.
 */
import myAxios from "./myAxios";
import {myUrl, qdm} from "./config";


//登录
export const getLogin = function (data) {
  const url = myUrl + qdm.getLogin;
  return myAxios.post(url, data);
};
