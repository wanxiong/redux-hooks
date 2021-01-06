import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'
import { linkList } from '@/common/headerLink'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import { HeaderWrapper } from './style';

function Header() {
  return (
    <HeaderWrapper>
      <div className="content">
        <div className="left">
          <div className="logo" />
          <div className="tabbar">
            {
              linkList.map((item) => (
                <NavLink
                  to={item.link}
                  key={item.name}
                  exact={item.exact}
                >
                  {item.name}
                </NavLink>
              ))
            }
          </div>
        </div>
        <div className="right">
          <div className="searchBg">
            <Input placeholder="音乐/视频" />
            <SearchOutlined className="search-icon" />
          </div>
          <div className="auth_center">
            创作者中心
          </div>
          <div className="auth_login">
            <span>登陆</span>
          </div>
        </div>
      </div>
      <div className="line" />

    </HeaderWrapper>
  )
}

export default memo(Header)
