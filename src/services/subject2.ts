import { request } from './request';

export const subject2API = {
    getSubjects: (userName: string) => {
            return request({           
                url:'http://47.95.145.72:8083/userSubjectList/getUserSubjectListByUserName',
                params:{
                    userName,
                },
                //headers: { authorization: token },
                method:'GET',
            });
        },
    getDomains: (userName: string,subjectName: string) => {
        return request({
            url: 'http://47.95.145.72:8083/domain/getDomainsBySubject',
            params: {
                subjectName,
            },
            method: 'GET',
        });
    },
};