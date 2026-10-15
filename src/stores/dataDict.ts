import { defineStore } from 'pinia'

import { getDataDict } from '@/api/common'

interface DictItem {
  [key: string]: unknown
}

export const useDataDictStore = defineStore('dataDict', {
  state: (): { commonList: DictItem[] } => ({
    commonList: []
  }),
  actions: {
    async getCommonList(obj: object) {
      if (!obj && this.commonList.length) {
        return
      }
      try {
        const res = await getDataDict({
          page_size: 1000,
          page: 1,
          ...obj
        })
        if (res.code === '200') {
          this.commonList = res.data.DnsServer
        }
      } catch (error) {
        console.log('error getCommonList', (error as Error).message)
      }
    }
  },
  persist: true // 数据持久化
})
