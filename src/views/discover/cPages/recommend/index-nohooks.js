import React, { memo, useEffect } from 'react'
import { connect } from 'react-redux'
import { RecommendSwiper } from './style';
import { getBannerAction } from './store/actionCreators'

function Recommend(props) {
  const { getBanner, banners } = props

  useEffect(() => {
    getBanner()
  }, [])

  console.log(banners)

  return (
    <RecommendSwiper>
      {/* 轮播区域 */}
      Recommend
    </RecommendSwiper>
  )
}

const mapStateToProps = (state) => ({
  banners: state.recommend.banners,
})

const mapDispatchToProps = (dispatch) => ({
  getBanner: () => {
    dispatch(getBannerAction())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
