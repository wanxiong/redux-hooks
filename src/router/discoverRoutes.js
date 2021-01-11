import { lazy } from 'react';

const Album = lazy(() => import('@/views/discover/cPages/album'))
const Artist = lazy(() => import('@/views/discover/cPages/artist'))
const Djradio = lazy(() => import('@/views/discover/cPages/djradio'))
const Ranking = lazy(() => import('@/views/discover/cPages/ranking'))
const Recommend = lazy(() => import('@/views/discover/cPages/recommend'))
const Songs = lazy(() => import('@/views/discover/cPages/songs'))

const disChildrenRoutes = [
  {
    path: '/discover/recommend',
    title: '推荐',
    component: Recommend,
  },
  {
    path: '/discover/ranking',
    title: '排行榜',
    component: Ranking,
  },
  {
    path: '/discover/songs',
    title: '歌单',
    component: Songs,
  },
  {
    path: '/discover/djradio',
    title: '主播电台',
    component: Djradio,
  },
  {
    path: '/discover/artist',
    title: '歌手',
    component: Artist,
  },
  {
    path: '/discover/album',
    title: '新碟上架',
    component: Album,
  },
]

export default disChildrenRoutes
