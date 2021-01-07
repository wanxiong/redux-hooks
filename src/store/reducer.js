import { combineReducers } from 'redux-immutable'
import { reducer as recommendReducer } from '../views/discover/cPages/recommend/store'

export default combineReducers({
  recommend: recommendReducer,
})
