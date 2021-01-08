import {
  getBanner, getHotRecommend, getNewAlbum, getRankingList,
} from '@/services/recommend'
import * as actionsTypes from './constants'

export const getBannerAction = () => async (dispatch) => {
  const status = await getBanner()
  dispatch({ type: actionsTypes.BANNER_LIST, data: status.banners })
}

export const getHotRecommendAction = () => async (dispatch) => {
  const status = await getHotRecommend()
  dispatch({ type: actionsTypes.HOT_RECOMMEND_LSIT, data: status.result })
}

export const getNewAlbumAction = () => async (dispatch) => {
  const status = await getNewAlbum()
  dispatch({ type: actionsTypes.NEW_ALBUM, data: status.albums })
}

export const getRankingListAction = (id) => async (dispatch) => {
  const status = await getRankingList(id)
  dispatch({ type: actionsTypes.RANKING_LIST, data: status.playlist })
}

export const clearRankingListAction = (data = []) => async (dispatch) => {
  dispatch({ type: actionsTypes.CLEAR_RANKING_LIST, data })
}
