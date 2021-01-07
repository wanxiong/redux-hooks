import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'
import { getNewAlbumAction } from '../store/actionCreators'
import { NewAlbumWrapper } from './newAlbumStyle'

function NewAlbum() {
  const data = useSelector((state) => state.getIn(['recommend', 'newAlbumList']), shallowEqual)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewAlbumAction())
  }, [])
  return (
    <NewAlbumWrapper>
      {/*  */}
      <div className="new-album-container">
        <div className="top-header">
          <span className="top-header-title">新碟上架</span>
          <div className="top-header-right">
            更多
            <font />
          </div>
        </div>
        {/* 列表 */}
        <div className="new-album-list">
          {
            data.map((item) => (
              <div
                key={item.id}
                className="new-album-list-item"
              >
                <img
                  src={`${item.picUrl}?param=120y120`}
                  alt={item.company}
                />
                <p className="dotdot">{item.name}</p>
                <p className="dotdot">{item.artist.name}</p>
              </div>
            ))
          }
        </div>
      </div>
    </NewAlbumWrapper>
  )
}

export default memo(NewAlbum)
