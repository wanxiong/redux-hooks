import React, { memo } from 'react'
import { FooterWrapper } from './style';

function Footer() {
  return (
    <FooterWrapper>
      <div className="copy">
        <div className="link">
          <span>服务条款</span>
          {' '}
          |
          {' '}
          <span>隐私政策</span>
          {' '}
          |
          {' '}
          <span>儿童隐私政策</span>
          {' '}
          |
          {' '}
          <span>版权投诉指引</span>
          {' '}
          |
          {' '}
          <span>意见反馈</span>
          {' '}
          |
        </div>
        <div className="address">网易公司版权所有©1997-2021 杭州乐读科技有限公司运营：浙网文[2018]3506-263号</div>
        <div className="address">违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com</div>
        <div className="address">粤B2-20090191-18工业和信息化部备案管理系统网站  浙公网安备 33010902002564号</div>
      </div>
    </FooterWrapper>
  )
}

export default memo(Footer)
