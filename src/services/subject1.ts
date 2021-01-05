import { request } from './request';

export const subject1API = {
    getSubjects: () => {
            return request({           
                url:'http://47.95.145.72:8083/subject/getSubjects',
                //headers: { authorization: token },
                method:'GET',
            });
        },
    getDomains: (subjectName: string) => {
        return request({
            url: 'http://47.95.145.72:8083/domain/getDomainsBySubject',
            params: {
                subjectName,
            },
            method: 'GET',
        });
    },
};