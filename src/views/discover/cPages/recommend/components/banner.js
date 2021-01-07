import React, {
  memo, useEffect, useState, useCallback,
} from 'react'
import { Carousel } from 'antd';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { getBannerAction } from '../store/actionCreators'
import { BannerWrapper } from './bannerStyle';

function Banner() {
  const [index, setIndex] = useState(0)

  const banner = useSelector((state) => state.getIn(['recommend', 'banners']), shallowEqual)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBannerAction())
  }, [useDispatch])

  const changeSwiper = useCallback((from, to) => {
    setIndex(to)
  }, [])

  const bgImage = banner[index] && banner[index].imageUrl
  return (
    <BannerWrapper bgImage={bgImage}>
      <Carousel
        autoplay
        beforeChange={changeSwiper}
        className="swiper-box"
      >
        {
          banner.map((item) => (
            <div
              key={item.imageUrl}
              className="swiper-box-item"
              style={{ color: 'red' }}
            >
              <div style={{ backgroundImage: `url(${item.imageUrl})` }} />
            </div>
          ))
        }
      </Carousel>
    </BannerWrapper>
  )
}

export default memo(Banner)
