import React, { memo } from 'react'

import { RecommendSwiper } from './style';
import Banner from './components/banner';
import HotRecommend from './components/hotRecommend';
import NewAlbum from './components/newAlbum';
import RankingList from './components/rankingList';

function Recommend() {
  return (
    <RecommendSwiper>
      {/* 轮播区域 */}
      <Banner />
      {/* 热门推荐 */}
      <HotRecommend />
      {/* 新碟上架 */}
      <NewAlbum />
      {/* 榜单 */}
      <RankingList />
    </RecommendSwiper>
  )
}

export default memo(Recommend)
