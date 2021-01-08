import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { changeSongAction } from '@/views/player/store/actionCreators';
import { getRankingListAction, clearRankingListAction } from '../store/actionCreators'
import { RankingListWrapper } from './rankingListStyle'

function RankingList() {
  const data = useSelector((state) => state.getIn(['recommend', 'rankingList']), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRankingListAction(0))
    dispatch(getRankingListAction(2))
    dispatch(getRankingListAction(3))
    return () => {
      dispatch(clearRankingListAction())
    }
  }, [])

  const changeSong = (item, index) => {
    dispatch(changeSongAction(item.id, index))
  }

  return (
    <RankingListWrapper>
      <div className="ranking-container">
        <div className="top-header">
          <span className="top-header-title">榜单</span>
          <div className="top-header-right">
            更多
            <font />
          </div>
        </div>
        {/* 列表 */}
        <div className="ranking-list">
          {
            data.map((item, index) => (
              <div
                className="ranking-list-item"
                key={item.name}
              >
                <h2 className="ranking-list-item-title">
                  ---
                  {item.name}
                  ---
                </h2>
                <div className="ranking-list-item-content">
                  {
                    item.tracks.slice(0, 10).map((subitem, i) => (
                      <div
                        key={subitem.name}
                        className="ranking-list-item-subitem"
                      >
                        <span>{i + 1}</span>
                        <span>
                          {subitem.name}
                          <font
                            className="ranking-list-item-icon"
                            onClick={() => changeSong(subitem, index)}
                          />
                        </span>

                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </RankingListWrapper>
  )
}

export default memo(RankingList)
