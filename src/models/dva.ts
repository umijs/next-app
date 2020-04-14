import { Reducer } from 'redux';
import { Effect } from 'umi';
import { queryHello } from '@/services/api'

export interface DvaModelState {
  name: string;
}

export interface DvaModelType {
  namespace: 'dva';
  state: DvaModelState;
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<DvaModelState>;
  };
}

const DvaModel: DvaModelType = {
  namespace: 'dva',

  state: {
    name: '',
  },

  effects: {
    *query({ payload }, { call, put }) {
      const data = yield queryHello();
      yield put({
        type: 'save', payload: {
          name: data.data
        }
      })
    },
  },
  reducers: {
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
};

export default DvaModel;
