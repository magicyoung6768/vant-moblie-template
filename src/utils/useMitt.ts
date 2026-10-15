import { getCurrentInstance } from 'vue'

export default function mitt() {
  const instance = getCurrentInstance()
  if (!instance) {
    throw new Error('useMitt must be called inside setup()')
  }
  const mitt = instance.appContext.config.globalProperties.$mitt

  return mitt
}
