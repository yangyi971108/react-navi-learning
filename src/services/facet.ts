import {request} from './request';

export const facetAPI = {
  getFacetNameAndParentFacetNameByFacetId: (facetId: number) => {
    return request({
      url: 'http://47.95.145.72:8083/facet/getFacetNameAndParentFacetNameByFacetId',
      params: {
        facetId,
      },
      method: 'GET',
    });
  }
};
