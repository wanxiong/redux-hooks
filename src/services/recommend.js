import http from '@/http'

export const getBanner = async () => http({
  url: 'banner',
})

export const getHotRecommend = async () => http({
  url: 'personalized?limit=8',
})

export const getNewAlbum = async () => http({
  url: '/top/album?limit=5',
})

export const getRankingList = async (id = 0) => http({
  url: '/top/list',
  params: {
    idx: id,
  },
})
