import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../views/discover/cPages/recommend/store'
import { reducer as songReducer } from '../views/player/store';

export default combineReducers({
  recommend: recommendReducer,
  player: songReducer,
})
