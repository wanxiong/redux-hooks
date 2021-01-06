import styled from 'styled-components';
import sprite01 from '@/assets/imgs/sprite_01.png'

export const HeaderWrapper = styled.div`
  height: 70px;
  width: 100%;
  background-color: #242424;
  border-bottom: 1px solid #000;
  .left{
    display: flex;
    align-items: center;
  }
  .content{
    height: 70px;
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    color: #fff;
    .logo{
      width: 176px;
      height: 69px;
      display: block;
      background-position: 0 0;
      background: url(${sprite01}) no-repeat 0 0px;
    }
    .tabbar{
      a {
          padding: 0 19px;
          text-align: center;
          line-height: 70px;
          color: #ccc;
          display: inline-block;
          position: relative;
        }
      }
      a:hover{
        background: #000;
        text-decoration: none;
        color: #fff;
      }
      a.active{
        background: #000;
        text-decoration: none;
        color: #fff;
        &::after{
          display: block;
          position: absolute;
          left: 50%;
          bottom: -1px;
          width: 12px;
          height: 7px;
          content: "";
          transform: translateX()-50%;
          background: url(${sprite01}) no-repeat 0 9999px;
          background-position: -226px 0;
        }
      }
    }
    .right{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .searchBg{
        background-color: #fff;
        border-radius: 32px;
        position: relative;
        overflow: hidden;
        padding-left: 20px;
        height: 32px;
        input {
          outline: none;
          border: none;
          box-shadow: none;
          width: 150px;
        }
      }
      .search-icon{
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #333
      }
      .auth_center{
        width: 110px;
        height: 32px;
        margin-left: 10px;
        box-sizing: border-box;
        padding: 0px 16px;
        border: 1px solid #4F4F4F;
        line-height: 32px;
        color: #ccc;
        border-radius: 20px;
      }
      .auth_login{
        display: block;
        width: 28px;
        color: #aaa;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }

  .line{
    height: 5px;
    background-color: #C20C0C;
    width: 100%;
  }
`
