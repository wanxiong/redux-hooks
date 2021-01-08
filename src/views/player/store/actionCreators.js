import {
  getSongDetail,
} from '@/services/player'
import * as actionsTypes from './constants'

export const getSongDetailAction = (id) => async (dispatch) => {
  const status = await getSongDetail(id)
  dispatch({
    type: actionsTypes.SONG_DETAIL,
    data: {
      privileges: status.privileges,
      songs: status.songs,
    },
  })
}

export const changeSongAction = (id, index) => async (dispatch, getState) => {
  const state = getState()
  const { tracks } = state.getIn(['recommend', 'rankingList']).get(index)
  const itemIndex = tracks.findIndex((subItem) => subItem.id === id)
  if (itemIndex !== -1) {
    dispatch({
      type: actionsTypes.CURRENT_SONG,
      data: tracks[itemIndex],
    })
    dispatch({
      type: actionsTypes.CURRENT_INDEX,
      data: itemIndex,
    })
  }
}
