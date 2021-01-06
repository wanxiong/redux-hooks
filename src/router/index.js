import React from 'react';
import { Redirect } from 'react-router-dom';

import Discover from '@/views/discover'
import My from '@/views/my'

import discoverRoutes from './discoverRoutes';

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
