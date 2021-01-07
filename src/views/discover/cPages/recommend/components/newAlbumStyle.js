import styled from 'styled-components';
import sprite02 from '@/assets/imgs/sprite_02.png'
// import spriteCover from '@/assets/imgs/sprite_cover.png'
// import spriteIcon from '@/assets/imgs/sprite_icon.png'

export const NewAlbumWrapper = styled.div`
  width: 100%;
  width: 980px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  margin: 0 auto;
  
  .new-album-container{
    margin-right: 251px;
    padding: 20px;
  }
  .top-header{
    background: url(${sprite02}) no-repeat 0 9999px;
    height: 33px;
    padding: 0 10px 0 34px;
    background-position: -225px -156px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #C10D0C;
    position: relative;
    .top-header-title{
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
    }
    .top-header-tab{
      margin-left: 20px;
      span{
        color: #666;
        margin: 0 10px;
        cursor: pointer;
      }
    }
    .top-header-right{
      position: absolute;
      right: 0px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      color: #666;
      font{
        background:  url(${sprite02}) no-repeat 0 9999px;
        display: inline-block;
        width: 12px;
        height: 12px;
        margin-left: 4px;
        vertical-align: middle;
        background-position: 0 -240px;
      }
    }
  }
  .new-album-list{
    position: relative;
    zoom: 1;
    height: 186px;
    margin: 20px 0 37px;
    border: 1px solid #d3d3d3;
    height: 184px;
    padding: 16px;
    background: #f5f5f5;
    display: flex;
    justify-content: space-between;
    .dotdot{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      width: 90%;
      line-height: 18px;
    }
    .new-album-list-item{
      width: 118px;
      height: 150px;
      margin-left: 11px;
      img{
        width: 100%;
        
      }
    }
  }
`
