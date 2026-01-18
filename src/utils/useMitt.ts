import { getCurrentInstance } from 'vue'

export default function mitt() {
  const instance = getCurrentInstance()!
  const mitt = instance.appContext.config.globalProperties.$mitt

  return mitt
}
