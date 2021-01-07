import React, { memo } from 'react'
import { HotRecommendWrapper } from './hotRecommendStyle';

function HotRecommend() {
  return (
    <HotRecommendWrapper>
      {/* 顶部推荐 */}
      <div className="top-header">123</div>
    </HotRecommendWrapper>
  )
}
export default memo(HotRecommend)
