import {main as types} from '../mutation-types';

const state = {
  spaceId: '',
};

const mutations = {
  [types.SET_SPACE_ID](state, val){
    state.spaceId = val;
  }
};

export default {
  state,
  mutations
};
