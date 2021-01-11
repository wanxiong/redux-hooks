import styled from 'styled-components';
import playbarSprite from '@/assets/imgs/playbar_sprite.png'

export const PlayBarWrapper = styled.div`
  width: 100%;
  position: fixed;
  zoom: 1;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 53px;
  .player-bar{
    background: url(${playbarSprite}) no-repeat 0 9999px;
    height: 53px;
    width: 100%;
    zoom: 1;
    margin-right: 67px;
    background-position: 0 0;
    background-repeat: repeat-x;
  }
  .player-bar-empty{
    height: 53px;
    width: 100%;
    zoom: 1;
    margin-right: 67px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    width: 980px;
    text-align: left;
    line-height: 53px;
  }
  .player-bar-container{
      position: absolute;
      left: 50%;
      top: 6px;
      z-index: 15;
      width: 980px;
      height: 53px;
      margin: 0 auto;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      .player-bar-btn{
        .player-bar-btn-pre{
          display: inline-block;
          width: 28px;
          height: 28px;
          margin-right: 8px;
          margin-top: 5px;
          text-indent: -9999px;
          background: url(${playbarSprite}) no-repeat 0 9999px;
          background-position: 0 -130px;
          cursor: pointer;
        }
        .player-bar-btn-play{
          display: inline-block;
          width: 36px;
          height: 36px;
          margin-right: 8px;
          cursor: pointer;
          background: url(${playbarSprite}) no-repeat 0 9999px;
          background-position: ${(props) => (props.isPlaying ? '0 -165px' : '0 -204px')};

        }
        .player-bar-btn-next{
          background: url(${playbarSprite}) no-repeat 0 9999px;
          background-position: -80px -130px;
          display: inline-block;
          width: 28px;
          height: 28px;
          margin-right: 8px;
          margin-top: 5px;
          text-indent: -9999px;
          cursor: pointer;
        }
      }
      .player-bar-btn-img{
        margin-left: 30px;
        img {
          display: inline-block;
        }
      }
      .player-bar-btn-progress{
        margin-left: 15px;
        .player-bar-progress-top{
          height: 28px;
          overflow: hidden;
          color: #e8e8e8;
          text-shadow: 0 1px 0 #171717;
          line-height: 28px;
          span:nth-of-type(1) {
            color: #e8e8e8;
          }
          span:nth-of-type(2) {
            max-width: 220px;
            margin-left: 15px;
            color: #9b9b9b;
          }
        }
      }
      .player-bar-progress-bar{
        width: 493px;
        position: relative;
      }
      .player-bar-progress-time{
        margin-left: 15px;
        color: #a1a1a1;
        span:nth-of-type(2) {
          top: -3px;
          right: -84px;
          color: #797979;
          text-shadow: 0 1px 0 #121212;
        }
        span:nth-of-type(1) {
         
          /* margin-right: 5px */
        }
      }
    }
`
