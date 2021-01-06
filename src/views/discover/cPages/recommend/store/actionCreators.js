import { getBanner } from '@/services/recommend'
import * as actionsTypes from './constants'

export const getBannerAction = () => async (dispatch) => {
  const status = await getBanner()
  console.log(status)
  dispatch({ type: actionsTypes.BANNER_LIST, data: status.banners })
}
