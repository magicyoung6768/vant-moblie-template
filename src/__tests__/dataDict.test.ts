import { describe, test, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useDataDictStore } from '../stores/dataDict'

describe('dataDict store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('initializes with empty commonList', () => {
    const store = useDataDictStore()
    expect(store.commonList).toEqual([])
  })

  test('updates commonList', () => {
    const store = useDataDictStore()
    const mockData = [{ id: 1, name: 'test' }]
    store.commonList = mockData
    expect(store.commonList).toEqual(mockData)
  })
})
