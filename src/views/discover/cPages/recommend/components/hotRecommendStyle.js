import styled from 'styled-components';
import sprite02 from '@/assets/imgs/sprite_02.png'
import spriteCover from '@/assets/imgs/sprite_cover.png'
import spriteIcon from '@/assets/imgs/sprite_icon.png'

export const HotRecommendWrapper = styled.div`
  width: 100%;
  width: 980px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  margin: 0 auto;
  .hot-container{
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
  .center-list{
    margin: 20px 0 0 -42px;
    li{
      display: inline-block;
      width: 140px;
      height: 188px;
      overflow: hidden;
      padding: 0 0 30px 50px;
      line-height: 1.4;
      width: 180px;
      height: 204px;
      padding-left: 42px;
      margin-bottom: 10px;
      .center-list-bg{
        position: relative;
        img{
          display: block;
          width: 100%;
          height: 100%;
        }
        .center-list-bg-bottom{
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 27px;
          background-position: 0 -537px;
          color: #ccc;
          background: url(${spriteCover}) no-repeat;
          display: flex;
          align-items: center;
          .center-list-bg-bottom-right{
            position: absolute;
            right: 10px;
            bottom: 5px;
            width: 16px;
            height: 17px;
            background-position: 0 0;
            display: inline-block;
            background: url(${spriteIcon}) no-repeat;
            cursor: pointer;
          }
          .center-list-bg-bottom-left{
            background: url(${spriteIcon}) no-repeat;
            width: 14px;
            display: inline-block;
            height: 11px;
            background-position: 0 -24px;
            margin: 9px 5px 9px 10px;
            
          }
        }
      }
      p{
        overflow: hidden;    
        display: -webkit-box;              
        text-overflow: ellipsis;            
        -webkit-box-orient: vertical;       
        -webkit-line-clamp: 3;   
      }
    }
  }
`
