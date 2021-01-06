import styled from 'styled-components';

export const FooterWrapper = styled.div`
  width: 980px;
  margin: 0 auto;
  .copy{
    text-align: center;
    .link{
      span{
        margin: 0 5px;
        &:first-child{
          margin-left: 0px;
        }
      }
      color: #999;
      line-height: 24px;
    }
    .address{
      color: #666;
    }
  }
`
