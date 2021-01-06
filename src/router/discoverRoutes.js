import Album from '@/views/discover/cPages/album'
import Artist from '@/views/discover/cPages/artist'
import Djradio from '@/views/discover/cPages/djradio'
import Ranking from '@/views/discover/cPages/ranking'
import Recommend from '@/views/discover/cPages/recommend'
import Songs from '@/views/discover/cPages/songs'

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
