import {request} from './request';

export const assembleAPI = {
  getAssemblesByFacetId: (facetId: number) => {
    return request({
      url: 'http://47.95.145.72:8083/assemble/getAssemblesByFacetId',
      params: {
        facetId,
      },
      method: 'GET',
    });
  }
};
