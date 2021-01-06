import styled from 'styled-components';

export const DiscoverWrapper = styled.div`
  
`
export const TopMenu = styled.div`
  background-color: #C20C0C;
  .top-menu-content{
    width: 1100px;
    height: 34px;
    margin: 0 auto;
    display: flex;
    padding-left: 180px;
    .top-menu-item{
      text-align: center;
      a{
        color: #fff;
        line-height: 34px;
        display: inline-block;
        width: 80px;
      }
      a.active{
        background: #9B0909;
      }
    }
  }
`
