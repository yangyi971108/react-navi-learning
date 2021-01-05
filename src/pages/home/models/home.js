import { subjectAPI } from '../../../services/subject';
import { subject2API } from '../../../services/subject2';
import { history } from 'umi';
export default {
  namespace: 'home',
  state: {
    subjects: [],
    currentSubjectName: '',
    domains: [],
    graph:'',
  },
  effects: {
    *getSubjects(action, {call, select, put}) {
      //  const authToken = yield select(state => state.userData.authToken);
      const userName = yield select(state => state.login.username);
      
        try {
          const res = yield call(subject2API.getSubjects,userName);
          // 将res中的subjectList转换为数组
          var res1 = new Array();
          if(res.subjectList){
            res1 = res.subjectList.split(",");
          }

          yield put({
            type: 'updateSubjects',
            payload: {
              subjects: res1,
            },
          });
        } catch (e) {
          if (e.code === 401) {
            history.push('/login');
          }
          console.log(e);
        }
      },
      *getDomains({payload: {currentSubjectName}}, {call, put}) {
      try {
        const domains = yield call(subjectAPI.getDomains, currentSubjectName);
        console.log('domainssssss',domains);
        yield put({
          type: 'updateDomains',
          payload: {
            domains,
          }
        })
      } catch (e) {
        
      }
    },
 
    },
    
  reducers: {
    updateSubjects(state, {payload: {subjects}}) {
      return { ...state, subjects};
    },
    updateCurrentSubjectName(state, {payload: {currentSubjectName}}) {
      return { ...state, currentSubjectName };
    },
    updateDomains(state, {payload: {domains}}) {
      return { ...state, domains };
    },
    updateUserName(state,{payload:{userName}}){
      return { ...state,userName};
    }
  },
  subscriptions: {},
}
