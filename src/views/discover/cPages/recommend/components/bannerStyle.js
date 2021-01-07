import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  height: 285px;
  .swiper-box{
    position: relative;
    height: 285px;
    .swiper-box-item{
      width: 100%;
      height: 285px;
      background-image: url(${(props) => props.bgImage});
      background-position: center;
      background-size: 60000px;
    > div{
      height: 100%;
      width: 982px;
      height: 285px;
      margin: 0 auto;
      background-size: cover;
      background-position: center;
    }
    }
  }
`
