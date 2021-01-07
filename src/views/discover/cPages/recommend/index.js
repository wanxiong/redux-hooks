import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { RecommendSwiper } from './style';
import { getBannerAction } from './store/actionCreators'

function Recommend() {
  const recommend = useSelector((state) => state.get('recommend'), shallowEqual)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBannerAction())
  }, [useDispatch])

  console.log(recommend.toJS())

  return (
    <RecommendSwiper>
      {/* 轮播区域 */}
      Recommend
    </RecommendSwiper>
  )
}

export default memo(Recommend)
