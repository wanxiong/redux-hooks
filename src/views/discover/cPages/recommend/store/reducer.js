import { fromJS, List } from 'immutable';
import * as actionTypes from './constants'

const defaultState = fromJS({
  banners: [],
  recommendList: [],
  newAlbumList: [],
  rankingList: [],
})

const actionHandlers = {
  [actionTypes.BANNER_LIST]: (state, action) => state.set('banners', action.data),
  [actionTypes.HOT_RECOMMEND_LSIT]: (state, action) => state.set('recommendList', action.data),
  [actionTypes.NEW_ALBUM]: (state, action) => state.set('newAlbumList', action.data),
  [actionTypes.RANKING_LIST]: (state, action) => {
    const list = state.get('rankingList').push(action.data)
    return state.set('rankingList', list)
  },
  [actionTypes.CLEAR_RANKING_LIST]: (state) => state.set('rankingList', List()),
};

function reducer(state = defaultState, action) {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
}

export default reducer
