import { fromJS } from 'immutable';
import * as actionTypes from './constants'

const defaultState = fromJS({
  songDetail: {
    privileges: [],
    songs: [],
  },
  currentSong: {},
  rankListIndex: '', // 榜单的下标
  currentIndex: '', // 播放到哪一首的下标
})

const actionHandlers = {
  [actionTypes.SONG_DETAIL]: (state, action) => state.set('songDetail', action.data),
  [actionTypes.CURRENT_SONG]: (state, action) => state.set('currentSong', fromJS(action.data)),
  [actionTypes.CURRENT_INDEX]: (state, action) => state.set('currentIndex', action.data),
  [actionTypes.RANKLIST_INDEX]: (state, action) => state.set('rankListIndex', action.data),
};

function reducer(state = defaultState, action) {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
}

export default reducer
