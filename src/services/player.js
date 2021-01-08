import http from '@/http'

export function getSongDetail(ids) {
  return http({
    url: "/song/detail",
    params: {
      ids,
    },
  })
}
