import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getHotRecommendAction } from '../store/actionCreators';
import { HotRecommendWrapper } from './hotRecommendStyle';

function HotRecommend() {
  const data = useSelector((state) => state.getIn(['recommend', 'recommendList']), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendAction())
  }, [])

  console.log(data)

  return (
    <HotRecommendWrapper>
      <div className="hot-container">
        {/* 顶部推荐 */}
        <div className="top-header">
          <span className="top-header-title">热门推荐</span>
          <div className="top-header-tab">
            <span>华语</span>
            <span>流行</span>
            <span>摇滚</span>
            <span>民谣</span>
            <span>电子</span>
          </div>
          <div className="top-header-right">
            更多
            <font />
          </div>
        </div>
        {/* 推荐具体 */}
        <ul className="center-list">
          {
            data.map((item) => (
              <li key={item.id}>
                <div className="center-list-bg">
                  <img
                    src={`${item.picUrl}?param=140y140`}
                    alt={item.copywriter}
                  />
                  <div className="center-list-bg-bottom">
                    <span className="center-list-bg-bottom-left" />
                    <span>
                      {Math.floor(item.playCount / 10000)}
                      万
                    </span>
                    <span className="center-list-bg-bottom-right" />
                  </div>
                </div>
                <p>{item.name}</p>
              </li>
            ))
          }

        </ul>
      </div>
    </HotRecommendWrapper>
  )
}
export default memo(HotRecommend)
