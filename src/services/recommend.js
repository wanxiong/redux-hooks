import http from '@/http'

export const getBanner = async () => http({
  url: 'banner',
})
