export default {
  mounted(el) {
    el.addEventListener('touchstart', () => {
      el.classList.add('active-touch')
    })
    el.addEventListener('touchend', () => {
      setTimeout(() => el.classList.remove('active-touch'), 200)
    })
  }
}
