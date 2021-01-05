import {request} from './request';


const url = 'http://121.199.9.36:4000/'


export const loginAPI = {
  getToken: () => {
    return request({
     url: `${url}getToken`
    });
  },
  signUp: (token: string, data: string) => {
    return request({
      
      url:`${url}signUp`,
      headers: { authorization: token},
      data: {
        data
      },
    })
  },
  signIn: (token: string, data: string) => {
    return request({
      url:`${url}signIn`,
      headers: { authorization: token},
      data: {
        data
      },
    })
  }
};
