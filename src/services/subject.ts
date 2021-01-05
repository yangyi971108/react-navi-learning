import {request} from './request';

export const subjectAPI = {
  getSubjects: (token: string) => {
    return request({
      url:'http://121.199.9.36:4000/getSubjects',
      headers: { authorization: token},
    })
  },
  getDomains: (subjectName: string) => {
    return request({
      url: 'http://47.95.145.72:8083/domain/getDomainsBySubject',
      params: {
        subjectName,
      },
      method: 'GET',
    });
  }
};
