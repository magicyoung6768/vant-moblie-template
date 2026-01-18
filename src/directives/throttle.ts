export default {
  mounted(el, { value, arg }) {
    const eventType = arg || 'click'
    let timer: any = null
    el._handler = () => {
      if (!timer) {
        timer = setTimeout(() => {
          value?.()
          timer = null
        }, 300)
      }
    }
    el.addEventListener(eventType, el._handler)
  },
  unmounted(el, { arg }) {
    const eventType = arg || 'click'
    el.removeEventListener(eventType, el._handler)
  }
}
