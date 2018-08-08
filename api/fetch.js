/**
 * Created by ydiego on 7/8/2018.
 */
import axios from 'axios'
import qs from 'qs'


//设置axios全局配置
axios.defaults.baseURL = 'http://devwebapi.sdhwlw.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 10000;


export default {
  //post请求
  post(url, param) {

    return new Promise((resolve, reject) => {
      if (! (param instanceof Object) ) {
        param = {};
      }
      param.Token = '89305349129f09a32b134842069db152';
      param.MemberID = '9ea75fde5e0e4343907c2dde03ec393e';
      param.Version = '1.0.62';
      axios({
        method: 'post',
        url,
        data: qs.stringify(param)
      }).then(res => {
        if (!res) {
          resolve('http-error');
          return;
        }
        resolve(res);
      })
    })
  }
}
