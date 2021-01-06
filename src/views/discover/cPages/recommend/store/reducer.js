import * as actionTypes from './constants'

const defaultState = {
  banners: [],
}

const actionHandlers = {
  [actionTypes.BANNER_LIST]: (state, action) => ({ ...state, banners: action.data }),
};

function reducer(state = defaultState, action) {
  const handler = actionHandlers[action.type];
  return handler ? handler(state, action) : state;
}

export default reducer
