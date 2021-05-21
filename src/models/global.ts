/*
 * @Descripttion: 这里定义一些可以全局使用的Model
 * @Author: linkenzone
 * @Date: 2020-09-06 21:24:32
 */

import type { Reducer } from 'umi';
import { Effect } from 'umi';
import { message } from 'antd';

export interface StateType {}

export interface ModelType {
  namespace: string;
  state: StateType;
  effects: {};
  reducers: {
    save: Reducer<StateType>;
  };
}

const Model: ModelType = {
  namespace: 'global',

  state: {
    inGroupInfo: undefined,
  },

  effects: {},

  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

export default Model;
