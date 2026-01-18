import request from '@/utils/request'
// 字典数据
export const getDataDict = (data: object) => {
  return request({
    url: '/api/system/dict/group/getDict',
    method: 'post',
    data
  })
}
