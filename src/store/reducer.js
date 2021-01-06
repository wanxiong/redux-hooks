import { combineReducers } from 'redux'
import { reducer as recommendReducer } from '../views/discover/cPages/recommend/store'

export default combineReducers({
  recommend: recommendReducer,
})
