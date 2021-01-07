import styled from 'styled-components';
import sprite02 from '@/assets/imgs/sprite_02.png'
// import spriteCover from '@/assets/imgs/sprite_cover.png'
import spriteIcon from '@/assets/imgs/sprite_icon.png'

export const RankingListWrapper = styled.div`
  width: 100%;
  width: 980px;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
  margin: 0 auto;
  
  .ranking-container{
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
  .ranking-list{
    height: 472px;
    margin-top: 20px;
    padding-left: 1px;
    display: flex;
    justify-content: space-between;
    .ranking-list-item{
      width: 230px;
      .ranking-list-item-title{
        text-align: center;
        padding: 10px 0px;
        font-size: 18px;
        color: #333;
      }
    }
    .ranking-list-item-subitem{
      padding-left: 20px;
      display: flex;
      cursor: pointer;
      span:nth-of-type(1){
        color: #666;
        width: 35px;
        height: 32px;
        text-align: center;
        font-size: 16px;
      }
      span:nth-of-type(2){
        display: inline-block;
        width: 200px;
        color: #666;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        position: relative;
      }
      .ranking-list-item-icon{
        position: absolute;
        right: 10px;
        bottom: 5px;
        width: 16px;
        height: 17px;
        display: none;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
        background: url(${spriteIcon}) no-repeat;
        background-position: 0 -60px;
        cursor: pointer;
      }
      &:hover{
        .ranking-list-item-icon{
          display: block;
        }
      }
      &:nth-of-type(1),
      &:nth-of-type(2),
      &:nth-of-type(3){
        span:nth-of-type(1){
          color: #c10d0c;
        }
      }
    }
  }
 
`
