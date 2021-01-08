import { fromJS, Map } from 'immutable';
import * as actionTypes from './constants'

const defaultState = fromJS({
  songDetail: {
    privileges: [],
    songs: [],
  },
  currentSong: {},
  currentIndex: '',
})

const actionHandlers = {
  [actionTypes.SONG_DETAIL]: (state, action) => state.set('songDetail', action.data),
  [actionTypes.CURRENT_SONG]: (state, action) => state.set('currentSong', Map(action.data)),
  [actionTypes.CURRENT_INDEX]: (state, action) => state.set('currentIndex', action.data),
};

function reducer(state = defaultState, action) {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
}

export default reducer
