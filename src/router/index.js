import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

import discoverRoutes from './discoverRoutes';

const Discover = lazy(() => import('@/views/discover'))
const My = lazy(() => import('@/views/my'))

const routes = [
  {
    path: '/',
    exact: true,
    render: () => (
      <Redirect to="/discover" />
    ),
  },
  {
    path: '/discover',
    component: Discover,
    routes: [
      {
        path: "/discover",
        exact: true,
        render: () => (
          <Redirect to="/discover/recommend" />
        ),
      },
      ...discoverRoutes,
    ],
  },
  {
    path: '/my',
    exact: true,
    component: My,
  },
]

export default routes
