import { AxiosError } from 'axios';
declare interface SubjectAPI {
    getSubjects:
        | AxiosError
        | {
              userId: number;
              subjectList: string;
            
          }[];
    getDomains:
        | AxiosError
        | {
           data:string;
          }[];
}

declare const subjectAPI: SubjectAPI;
