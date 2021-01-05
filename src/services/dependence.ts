import {request} from './request';

export const dependenceAPI = {
  getDependence: (domainName: string) => {
    return request({
      url: 'http://47.95.145.72:80/dependences/',
      params: {
        domainName,
      },
      method: 'GET',
    });
  }
};
