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
    dispatch({
      type: actionsTypes.RANKLIST_INDEX,
      data: index,
    })
  }
}

export const changeNextAction = (step) => async (dispatch, getState) => {
  const state = getState()
  const rankListIndex = state.getIn(['player', 'rankListIndex'])
  const { tracks } = state.getIn(['recommend', 'rankingList']).get(rankListIndex)
  let currentIndex = state.getIn(['player', 'currentIndex']) - 0
  if (step === 'next') {
    currentIndex++
  } else {
    currentIndex--
  }

  const item = tracks[currentIndex]
  if (item) {
    dispatch({
      type: actionsTypes.CURRENT_SONG,
      data: item,
    })
    dispatch({
      type: actionsTypes.CURRENT_INDEX,
      data: currentIndex,
    })
  } else if (step === 'next') {
    dispatch({
      type: actionsTypes.CURRENT_SONG,
      data: tracks[0],
    })
    dispatch({
      type: actionsTypes.CURRENT_INDEX,
      data: 0,
    })
  } else {
    dispatch({
      type: actionsTypes.CURRENT_SONG,
      data: tracks[tracks.length - 1],
    })
    dispatch({
      type: actionsTypes.CURRENT_INDEX,
      data: tracks.length - 1,
    })
  }
}
