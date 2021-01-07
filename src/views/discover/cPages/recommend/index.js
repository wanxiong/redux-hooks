import React, { memo } from 'react'

import { RecommendSwiper } from './style';
import Banner from './components/banner';
import HotRecommend from './components/hotRecommend';

function Recommend() {
  return (
    <RecommendSwiper>
      {/* 轮播区域 */}
      <Banner />
      {/* 热门推荐 */}
      <HotRecommend />
    </RecommendSwiper>
  )
}

export default memo(Recommend)
