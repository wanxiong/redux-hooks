import React, { memo, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'

import { disMenuData } from '@/common/discoverData';
import { DiscoverWrapper, TopMenu } from './style';

function Discover(props) {
  const { route } = props;

  useEffect(() => {
  }, [])
  return (
    <DiscoverWrapper>
      {/* 顶部子菜单 */}
      <TopMenu>
        <div className="top-menu-content">
          {
          disMenuData.map((item) => (
            <div
              key={item.title}
              className="top-menu-item"
            >
              <NavLink to={item.link}>{item.title}</NavLink>
            </div>
          ))
        }
        </div>
      </TopMenu>
      {/* 子内容 */}
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
}

export default memo(Discover)
